const payload = window.LEADER_TREND_DATA || {
  meta: {},
  methodology: {},
  categoryDefinitions: [],
  sourceStrategy: {},
  topRecommendations: [],
  trends: [],
  sources: [],
};
const historyPayload = window.LEADER_TREND_HISTORY || { reports: [] };
const categoryDefinitions = payload.categoryDefinitions || [];

const state = {
  search: "",
  parentCategory: "",
  category: "",
  sourceType: "",
  confidence: "",
  sort: "heat",
};

const els = {
  scopeText: document.querySelector("#scopeText"),
  weeklyThesis: document.querySelector("#weeklyThesis"),
  trendCount: document.querySelector("#trendCount"),
  categoryCount: document.querySelector("#categoryCount"),
  sourceCount: document.querySelector("#sourceCount"),
  generatedAt: document.querySelector("#generatedAt"),
  nextReview: document.querySelector("#nextReview"),
  hotSignalCount: document.querySelector("#hotSignalCount"),
  highConfidenceCount: document.querySelector("#highConfidenceCount"),
  historySelect: document.querySelector("#historySelect"),
  historyReport: document.querySelector("#historyReport"),
  mustReadNote: document.querySelector("#mustReadNote"),
  mustReadUpdated: document.querySelector("#mustReadUpdated"),
  mustReadGrid: document.querySelector("#mustReadGrid"),
  perspectiveSummary: document.querySelector("#perspectiveSummary"),
  perspectiveGrid: document.querySelector("#perspectiveGrid"),
  perspectiveLabel: document.querySelector("#perspectiveLabel"),
  recommendationNote: document.querySelector("#recommendationNote"),
  recommendationUpdated: document.querySelector("#recommendationUpdated"),
  recommendationGrid: document.querySelector("#recommendationGrid"),
  radarMap: document.querySelector("#radarMap"),
  radarLabel: document.querySelector("#radarLabel"),
  searchInput: document.querySelector("#searchInput"),
  categorySelect: document.querySelector("#categorySelect"),
  sourceTypeSelect: document.querySelector("#sourceTypeSelect"),
  confidenceSelect: document.querySelector("#confidenceSelect"),
  sortSelect: document.querySelector("#sortSelect"),
  categoryBars: document.querySelector("#categoryBars"),
  visibleCount: document.querySelector("#visibleCount"),
  resultLabel: document.querySelector("#resultLabel"),
  trendGrid: document.querySelector("#trendGrid"),
  sourceStrategyText: document.querySelector("#sourceStrategyText"),
  sourceList: document.querySelector("#sourceList"),
  detailPanel: document.querySelector("#detailPanel"),
  detailContent: document.querySelector("#detailContent"),
};

const confidenceScore = { A: 3, B: 2, C: 1 };

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[char];
  });
}

function uniqueValues(rows, key) {
  return [...new Set(rows.map((item) => item[key]).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, "zh-Hant")
  );
}

function trendCategories(item) {
  const categories = Array.isArray(item.categories) ? item.categories.filter(Boolean) : [];
  return categories.length ? categories : [item.category].filter(Boolean);
}

function categoryNames() {
  const definedNames = categoryDefinitions.map((item) => item.name).filter(Boolean);
  const seen = new Set(definedNames);
  const extras = [];
  payload.trends.forEach((item) => {
    trendCategories(item).forEach((category) => {
      if (!seen.has(category)) {
        seen.add(category);
        extras.push(category);
      }
    });
  });
  return [...definedNames, ...extras].sort((a, b) => a.localeCompare(b, "zh-Hant"));
}

function categoryInfo(category) {
  return categoryDefinitions.find((item) => item.name === category) || {};
}

function parentCategories() {
  const names = [];
  categoryDefinitions.forEach((item) => {
    if (item.parent && !names.includes(item.parent)) names.push(item.parent);
  });
  payload.trends.forEach((item) => {
    if (item.category && !names.includes(item.category)) names.push(item.category);
  });
  return names;
}

function parentCategoriesForTrend(item) {
  const parents = new Set([item.category].filter(Boolean));
  trendCategories(item).forEach((category) => {
    const info = categoryInfo(category);
    if (info.parent) parents.add(info.parent);
  });
  return [...parents];
}

function fillSelect(select, values, firstLabel) {
  select.innerHTML = `<option value="">${escapeHtml(firstLabel)}</option>${values
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join("")}`;
}

function confidenceClass(value) {
  return `confidence-${String(value || "c").toLowerCase()}`;
}

function trendText(item) {
  return [
    item.title,
    item.category,
    ...trendCategories(item),
    item.sourceType,
    item.sourceName,
    item.summary,
    item.whyLeadersCare,
    item.taiwanImpact,
    item.opportunity,
    ...(item.signals || []),
    ...(item.actions || []),
  ]
    .join(" ")
    .toLowerCase();
}

function recommendationText(item) {
  return [
    item.title,
    item.category,
    item.targetAudience,
    item.whyNow,
    item.teacherProfile,
    item.copywriting,
    ...(item.productStructure || []),
    ...(item.sourceBasis || []),
  ]
    .join(" ")
    .toLowerCase();
}

function getFilteredTrends() {
  const keyword = state.search.trim().toLowerCase();
  let rows = payload.trends.filter((item) => {
    if (state.parentCategory && !parentCategoriesForTrend(item).includes(state.parentCategory)) return false;
    if (state.category && !trendCategories(item).includes(state.category)) return false;
    if (state.sourceType && item.sourceType !== state.sourceType) return false;
    if (state.confidence && item.confidence !== state.confidence) return false;
    if (keyword && !trendText(item).includes(keyword)) return false;
    return true;
  });

  rows = [...rows].sort((a, b) => {
    if (state.sort === "confidence") {
      return (
        (confidenceScore[b.confidence] || 0) - (confidenceScore[a.confidence] || 0) ||
        Number(b.heat || 0) - Number(a.heat || 0)
      );
    }
    if (state.sort === "category") {
      return (
        (trendCategories(a)[0] || "").localeCompare(trendCategories(b)[0] || "", "zh-Hant") ||
        Number(b.heat || 0) - Number(a.heat || 0)
      );
    }
    if (state.sort === "date") {
      return Date.parse(b.sourceDate || "1970-01-01") - Date.parse(a.sourceDate || "1970-01-01");
    }
    return Number(b.heat || 0) - Number(a.heat || 0);
  });

  return rows;
}

function initMeta() {
  const categories = categoryNames();
  els.scopeText.textContent = payload.meta.scope || "";
  els.weeklyThesis.textContent = payload.meta.weekly_thesis || "";
  els.trendCount.textContent = payload.trends.length.toLocaleString("zh-Hant");
  els.categoryCount.textContent = categories.length.toLocaleString("zh-Hant");
  els.sourceCount.textContent = payload.sources.length.toLocaleString("zh-Hant");
  els.generatedAt.textContent = payload.meta.generated_at || "-";
  els.nextReview.textContent = payload.meta.next_review || "-";
  els.hotSignalCount.textContent = payload.trends.filter((item) => Number(item.heat || 0) >= 85).length;
  els.highConfidenceCount.textContent = payload.trends.filter((item) => item.confidence === "A").length;
  els.mustReadNote.textContent =
    "每週只抓最值得放進領導者視野的幾件事，先練判斷，再思考產品化。";
  els.mustReadUpdated.textContent = payload.meta.generated_at ? `更新 ${payload.meta.generated_at}` : "-";
  els.perspectiveSummary.textContent = payload.perspectiveNote?.summary || "";
  els.recommendationNote.textContent = payload.meta.recommendation_note || "";
  els.recommendationUpdated.textContent = payload.meta.generated_at ? `更新 ${payload.meta.generated_at}` : "-";
  els.sourceStrategyText.textContent = payload.sourceStrategy.summary || "";

  fillSelect(els.categorySelect, categories, "全部類別");
  fillSelect(els.sourceTypeSelect, uniqueValues(payload.trends, "sourceType"), "全部來源類型");
}

function uniqueLinks(links) {
  const seen = new Set();
  return (links || []).filter((item) => {
    if (!item?.url || seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}

function renderHistoryReport(report) {
  if (!els.historyReport) return;
  if (!report) {
    els.historyReport.innerHTML = `
      <div class="empty-state">
        <strong>目前沒有歷史週報</strong>
        <p>每週更新後，這裡會累積可回看的週報摘要。</p>
      </div>
    `;
    return;
  }

  const metrics = report.metrics || {};
  const statusLabel = report.status === "complete" ? "完整週報" : "快照摘要";
  const sourceLinks = uniqueLinks(report.sourceLinks);
  els.historyReport.innerHTML = `
    <article class="history-summary">
      <div class="history-summary-head">
        <div>
          <div class="pill-row">
            <span class="pill hot">${escapeHtml(statusLabel)}</span>
            <span class="pill">${escapeHtml(report.date)}</span>
          </div>
          <h3>${escapeHtml(report.label)}</h3>
          <p>${escapeHtml(report.summary)}</p>
        </div>
        <div class="history-metrics">
          <div><strong>${escapeHtml(metrics.trends || 0)}</strong><span>趨勢卡</span></div>
          <div><strong>${escapeHtml(metrics.sources || 0)}</strong><span>來源</span></div>
          <div><strong>${escapeHtml(metrics.highConfidence || 0)}</strong><span>A 級</span></div>
          <div><strong>${escapeHtml(metrics.hotSignals || 0)}</strong><span>高熱度</span></div>
        </div>
      </div>
    </article>

    <div class="history-columns">
      <article class="history-panel">
        <h3>領導者必看 / 當週熱點</h3>
        <div class="history-list">
          ${(report.mustReads || [])
            .map(
              (item) => `
                <div class="history-item">
                  <span class="history-rank">${escapeHtml(item.rank)}</span>
                  <div>
                    <strong>${escapeHtml(item.headline)}</strong>
                    <p>${escapeHtml(item.whyLeadersCare)}</p>
                    ${
                      item.sourceUrl
                        ? `<a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(item.sourceName || "來源")}</a>`
                        : ""
                    }
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="history-panel">
        <h3>Joyce 判讀與追問</h3>
        <div class="history-block">
          <strong>判讀重點</strong>
          ${listItems(report.interpretation || [])}
        </div>
        <div class="history-block">
          <strong>可拿去問高階主管</strong>
          ${listItems(report.discussionPrompts || [])}
        </div>
      </article>
    </div>

    <div class="history-columns">
      <article class="history-panel">
        <h3>新增或升溫主題</h3>
        <div class="history-theme-list">
          ${(report.risingThemes || [])
            .map(
              (item) => `
                <div class="history-theme">
                  <strong>${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(item.reason)}</p>
                  <span>${escapeHtml(item.taiwanMeaning || "")}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="history-panel">
        <h3>學習產品機會</h3>
        <div class="history-opportunity-list">
          ${(report.learningOpportunities || [])
            .map(
              (item) => `
                <div class="history-opportunity">
                  <span>${escapeHtml(item.priority)}</span>
                  <div>
                    <strong>${escapeHtml(item.title)}</strong>
                    <p>${escapeHtml(item.whyNow || `${item.category || ""}｜熱度 ${item.heat || "-"}`)}</p>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
    </div>

    <div class="history-columns compact-history">
      <article class="history-panel">
        <h3>分類分布</h3>
        <div class="history-category-grid">
          ${(report.categoryCounts || [])
            .map((item) => `<span>${escapeHtml(item.name)} <strong>${escapeHtml(item.count)}</strong></span>`)
            .join("")}
        </div>
      </article>
      <article class="history-panel">
        <h3>來源與缺口</h3>
        <div class="history-source-links">
          ${
            sourceLinks.length
              ? sourceLinks
                  .map((item) => `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.name || item.url)}</a>`)
                  .join("")
              : '<p class="muted-copy">此週快照未保留完整來源連結。</p>'
          }
        </div>
        ${listItems(report.gaps || [])}
      </article>
    </div>
  `;
}

function initHistory() {
  if (!els.historySelect) return;
  const reports = historyPayload.reports || [];
  if (!reports.length) {
    renderHistoryReport(null);
    return;
  }
  els.historySelect.innerHTML = reports
    .map((report) => `<option value="${escapeHtml(report.id)}">${escapeHtml(report.label)}</option>`)
    .join("");
  renderHistoryReport(reports[0]);
}

function renderRecommendations() {
  const keyword = state.search.trim().toLowerCase();
  const rows = payload.topRecommendations.filter((item) => {
    if (!keyword) return true;
    return recommendationText(item).includes(keyword);
  });

  els.recommendationGrid.innerHTML = rows
    .map(
      (item) => `
        <article class="recommendation-card" tabindex="0" role="button" data-recommendation-id="${escapeHtml(item.id)}">
          <div class="pill-row">
            <span class="pill hot">優先 ${escapeHtml(item.priority)}</span>
            <span class="pill ${confidenceClass(item.confidence)}">${escapeHtml(item.confidence)} 級資料</span>
            <span class="pill">${escapeHtml(item.category)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.whyNow)}</p>
          <dl class="key-value">
            <div>
              <dt>目標客群</dt>
              <dd>${escapeHtml(item.targetAudience)}</dd>
            </div>
            <div>
              <dt>建議師資輪廓</dt>
              <dd>${escapeHtml(item.teacherProfile)}</dd>
            </div>
          </dl>
        </article>
      `
    )
    .join("");
}

function renderMustReads() {
  const rows = payload.weeklyMustReads || [];
  els.mustReadGrid.innerHTML = rows
    .map(
      (item) => `
        <article class="must-read-card" tabindex="0" role="button" data-must-read-id="${escapeHtml(item.id)}">
          <div class="must-read-rank">${escapeHtml(item.rank)}</div>
          <div class="must-read-body">
            <h3>${escapeHtml(item.headline)}</h3>
            <p>${escapeHtml(item.globalSignal)}</p>
            <dl class="must-read-points">
              <div>
                <dt>領導者為何要看</dt>
                <dd>${escapeHtml(item.whyLeadersCare)}</dd>
              </div>
              <div>
                <dt>Joyce 可以追問</dt>
                <dd>${escapeHtml(item.joyceQuestion)}</dd>
              </div>
            </dl>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPerspective() {
  const note = payload.perspectiveNote || {};
  const blocks = [
    { title: "本週判斷", items: note.notes || [] },
    { title: "可以拿去討論", items: note.discussionPrompts || [] },
    { title: "可延伸成文章/開場", items: note.writingAngles || [] },
  ];
  els.perspectiveGrid.innerHTML = blocks
    .map(
      (block) => `
        <article class="perspective-card">
          <h3>${escapeHtml(block.title)}</h3>
          ${listItems(block.items)}
        </article>
      `
    )
    .join("");
}

const categoryQuestions = {
  AI投資與資本市場: "哪些 AI 投資值得加碼，哪些要停損？",
  AI落地與資料治理: "哪些流程已具備資料與權責條件，可以從試點走向規模化？",
  AI信任與科技治理: "AI 使用、資安、法遵與品牌信任是否有共同治理框架？",
  組織人才與CEO學習: "人才能力、主管節奏與學習設計是否跟上 AI 與低成長環境？",
  全球宏觀與地緣市場: "目前最需要重跑的成本、價格、區域布局與風險情境是什麼？",
  供應鏈韌性與產業佈局: "供應鏈與產業佈局是否能承受能源、政策與 AI 基建變化？",
};

function getCategoryQuestion(category) {
  return categoryInfo(category).decisionQuestion || categoryQuestions[category] || "這類訊號對今年的投資、人才與風險節奏有什麼影響？";
}

function averageHeat(rows) {
  if (!rows.length) return 0;
  const total = rows.reduce((sum, item) => sum + Number(item.heat || 0), 0);
  return Math.round(total / rows.length);
}

function confidenceCounts(rows) {
  return rows.reduce(
    (acc, item) => {
      acc[item.confidence] = (acc[item.confidence] || 0) + 1;
      return acc;
    },
    { A: 0, B: 0, C: 0 }
  );
}

function renderRadar(rows) {
  const selectedCategory = state.category;
  const selectedParent = state.parentCategory;
  const categories = selectedCategory ? [selectedCategory] : selectedParent ? [selectedParent] : parentCategories();
  const entries = categories
    .map((category) => {
      const categoryRows = selectedCategory
        ? rows.filter((item) => trendCategories(item).includes(category))
        : rows.filter((item) => parentCategoriesForTrend(item).includes(category));
      const sorted = [...categoryRows].sort((a, b) => Number(b.heat || 0) - Number(a.heat || 0));
      const subcategories = selectedCategory
        ? []
        : categoryDefinitions.filter((item) => item.parent === category).map((item) => item.name);
      return {
        category,
        subcategories,
        rows: sorted,
        avgHeat: averageHeat(sorted),
        confidence: confidenceCounts(sorted),
      };
    })
    .filter((item) => item.rows.length)
    .sort((a, b) => b.avgHeat - a.avgHeat || b.rows.length - a.rows.length || a.category.localeCompare(b.category, "zh-Hant"));

  els.radarLabel.textContent = selectedCategory ? "1 個焦點類別" : selectedParent ? "1 條主線" : `${entries.length} 條主線`;
  els.radarMap.innerHTML = entries.length
    ? entries
        .map((item) => {
          const focusTrends = item.rows.slice(0, 2);
          const subcategoryLabel = item.subcategories.length
            ? `${item.subcategories.length} 個細類：${item.subcategories.slice(0, 4).join("、")}`
            : "目前篩選的細分類別";
          const clickTarget = selectedCategory ? `data-category="${escapeHtml(item.category)}"` : `data-parent-category="${escapeHtml(item.category)}"`;
          return `
            <button class="decision-card" type="button" ${clickTarget}>
              <div class="decision-card-top">
                <span class="pill">${escapeHtml(item.category)}</span>
                <strong>${item.rows.length} 張</strong>
              </div>
              <dl class="decision-copy">
                <div>
                  <dt>本週焦點</dt>
                  <dd>${escapeHtml(focusTrends.map((trend) => trend.title).join(" / ") || "-")}</dd>
                </div>
                <div>
                  <dt>領導者該問</dt>
                  <dd>${escapeHtml(getCategoryQuestion(item.category))}</dd>
                </div>
                <div>
                  <dt>${selectedCategory ? "篩選狀態" : "包含細類"}</dt>
                  <dd>${escapeHtml(subcategoryLabel)}</dd>
                </div>
              </dl>
            </button>
          `;
        })
        .join("")
    : `
      <div class="empty-state">
        <strong>目前沒有符合條件的類別</strong>
        <p>調整搜尋或篩選條件後，這裡會重新整理類別摘要。</p>
      </div>
    `;
}

function renderCategoryBars(rows) {
  const counts = rows.reduce((acc, item) => {
    trendCategories(item).forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-Hant"));
  const max = Math.max(1, ...entries.map(([, count]) => count));

  els.visibleCount.textContent = `${rows.length} 筆`;
  els.categoryBars.innerHTML = entries
    .map(
      ([category, count]) => `
        <div class="category-bar">
          <button type="button" data-category="${escapeHtml(category)}">
            <strong>${escapeHtml(category)}</strong>
            <span>${count}</span>
          </button>
          <div class="bar-track"><div class="bar-fill" style="--width:${Math.round((count / max) * 100)}%;"></div></div>
        </div>
      `
    )
    .join("");
}

function renderTrendCards(rows) {
  els.resultLabel.textContent = rows.length ? `${rows.length} 筆結果` : "沒有符合條件";
  els.trendGrid.innerHTML = rows
    .map((item) => {
      const categories = trendCategories(item);
      const visibleCategory = state.category && categories.includes(state.category) ? state.category : categories[0] || item.category;
      const extraCategoryCount = Math.max(0, categories.length - 1);
      return `
        <article class="trend-card" tabindex="0" role="button" data-trend-id="${escapeHtml(item.id)}">
          <div class="pill-row">
            <span class="pill hot">熱度 ${escapeHtml(item.heat)}</span>
            <span class="pill ${confidenceClass(item.confidence)}">${escapeHtml(item.confidence)} 級</span>
            <span class="pill">${escapeHtml(visibleCategory)}</span>
            ${extraCategoryCount ? `<span class="pill">+${extraCategoryCount} 類</span>` : ""}
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <dl class="key-value">
            <div>
              <dt>管理意義</dt>
              <dd>${escapeHtml(item.whyLeadersCare)}</dd>
            </div>
            <div>
              <dt>台灣企業影響</dt>
              <dd>${escapeHtml(item.taiwanImpact)}</dd>
            </div>
          </dl>
          <a class="source-link" href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">
            ${escapeHtml(item.sourceName)}
          </a>
        </article>
      `;
    })
    .join("");
}

function renderSources() {
  els.sourceList.innerHTML = payload.sources
    .map(
      (item) => `
        <a class="source-item" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">
          <strong>${escapeHtml(item.name)}</strong>
          <span>${escapeHtml(item.type)}</span>
          <span>${escapeHtml(item.use)}</span>
        </a>
      `
    )
    .join("");
}

function listItems(items) {
  return `<ul>${(items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function listTrendLinks(trends) {
  const rows = (trends || []).filter(Boolean);
  if (!rows.length) return '<p class="muted-copy">目前沒有可用連結。</p>';
  return `
    <div class="research-link-list">
      ${rows
        .map(
          (trend) => `
            <a class="research-link" href="${escapeHtml(trend.sourceUrl)}" target="_blank" rel="noreferrer">
              <strong>${escapeHtml(trend.title)}</strong>
              <span>${escapeHtml(trend.sourceName)}｜${escapeHtml(trend.sourceDate || "-")}｜${escapeHtml(trend.sourceType)}</span>
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function listLeaderQuestions(trends) {
  const questions = [];
  (trends || []).forEach((trend) => {
    trendCategories(trend).forEach((category) => {
      const question = getCategoryQuestion(category);
      if (question && !questions.includes(question)) questions.push(question);
    });
  });
  return listItems(questions.slice(0, 5));
}

function findTrend(id) {
  return payload.trends.find((item) => item.id === id);
}

function findMustRead(id) {
  return (payload.weeklyMustReads || []).find((item) => item.id === id);
}

function findRecommendation(id) {
  return payload.topRecommendations.find((item) => item.id === id);
}

function openTrendDetail(item) {
  if (!item) return;
  const categories = trendCategories(item);
  els.detailContent.innerHTML = `
    <div class="detail-header">
      <div class="pill-row">
        <span class="pill hot">熱度 ${escapeHtml(item.heat)}</span>
        <span class="pill ${confidenceClass(item.confidence)}">${escapeHtml(item.confidence)} 級可信度</span>
        <span class="pill">${escapeHtml(item.category)}</span>
        <span class="pill">${escapeHtml(item.sourceType)}</span>
      </div>
      <h2 id="detailTitle">${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.summary)}</p>
    </div>

    <section class="detail-section">
      <h3>管理意義</h3>
      <p>${escapeHtml(item.whyLeadersCare)}</p>
    </section>
    <section class="detail-section">
      <h3>台灣企業影響</h3>
      <p>${escapeHtml(item.taiwanImpact)}</p>
    </section>
    <section class="detail-section">
      <h3>可轉成的課程機會</h3>
      <p>${escapeHtml(item.opportunity)}</p>
    </section>
    <section class="detail-section">
      <h3>領導者要追問</h3>
      ${listLeaderQuestions([item])}
    </section>
    <section class="detail-section">
      <h3>觀察訊號</h3>
      ${listItems(item.signals)}
    </section>
    <section class="detail-section">
      <h3>主管可行動項目</h3>
      ${listItems(item.actions)}
    </section>
    <section class="detail-section">
      <h3>來源</h3>
      ${listTrendLinks([item])}
    </section>
    <section class="detail-section">
      <h3>細分類別</h3>
      <div class="pill-row">${categories.map((category) => `<span class="pill">${escapeHtml(category)}</span>`).join("")}</div>
    </section>
  `;
  showDetail();
}

function openMustReadDetail(item) {
  if (!item) return;
  const trend = findTrend(item.trendId);
  els.detailContent.innerHTML = `
    <div class="detail-header">
      <div class="pill-row">
        <span class="pill hot">本週必看 ${escapeHtml(item.rank)}</span>
        ${trend ? `<span class="pill ${confidenceClass(trend.confidence)}">${escapeHtml(trend.confidence)} 級資料</span>` : ""}
        ${trend ? `<span class="pill">${escapeHtml(trend.category)}</span>` : ""}
      </div>
      <h2 id="detailTitle">${escapeHtml(item.headline)}</h2>
      <p>${escapeHtml(item.globalSignal)}</p>
    </div>

    <section class="detail-section">
      <h3>領導者為何要看</h3>
      <p>${escapeHtml(item.whyLeadersCare)}</p>
    </section>
    <section class="detail-section">
      <h3>對台灣企業的意義</h3>
      <p>${escapeHtml(item.taiwanMeaning)}</p>
    </section>
    <section class="detail-section">
      <h3>Joyce 可以追問</h3>
      <div class="copy-box">${escapeHtml(item.joyceQuestion)}</div>
    </section>
    <section class="detail-section">
      <h3>後續追蹤訊號</h3>
      <p>${escapeHtml(item.keepWatching)}</p>
    </section>
    ${
      trend
        ? `
          <section class="detail-section">
            <h3>關聯趨勢內容</h3>
            <p>${escapeHtml(trend.summary)}</p>
            <dl class="key-value">
              <div>
                <dt>管理意義</dt>
                <dd>${escapeHtml(trend.whyLeadersCare)}</dd>
              </div>
              <div>
                <dt>台灣企業影響</dt>
                <dd>${escapeHtml(trend.taiwanImpact)}</dd>
              </div>
            </dl>
          </section>
          <section class="detail-section">
            <h3>原始來源與延伸閱讀</h3>
            ${listTrendLinks([trend])}
          </section>
        `
        : ""
    }
  `;
  showDetail();
}

function openRecommendationDetail(item) {
  if (!item) return;
  const related = (item.trendIds || []).map(findTrend).filter(Boolean);
  els.detailContent.innerHTML = `
    <div class="detail-header">
      <div class="pill-row">
        <span class="pill hot">推薦順位 ${escapeHtml(item.priority)}</span>
        <span class="pill ${confidenceClass(item.confidence)}">${escapeHtml(item.confidence)} 級資料</span>
        <span class="pill">${escapeHtml(item.category)}</span>
      </div>
      <h2 id="detailTitle">${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.whyNow)}</p>
    </div>

    <section class="detail-section">
      <h3>目標客群</h3>
      <p>${escapeHtml(item.targetAudience)}</p>
    </section>
    <section class="detail-section">
      <h3>建議師資輪廓</h3>
      <p>${escapeHtml(item.teacherProfile)}</p>
    </section>
    <section class="detail-section">
      <h3>課程產品結構</h3>
      ${listItems(item.productStructure)}
    </section>
    <section class="detail-section">
      <h3>招生文案重寫</h3>
      <div class="copy-box">${escapeHtml(item.copywriting)}</div>
    </section>
    <section class="detail-section">
      <h3>建議形式</h3>
      <p>${escapeHtml(item.openingFormat)}</p>
    </section>
    <section class="detail-section">
      <h3>依據來源</h3>
      ${listItems(item.sourceBasis)}
    </section>
    <section class="detail-section">
      <h3>可深入研究的關聯趨勢</h3>
      ${related.length ? listTrendLinks(related) : listItems([])}
    </section>
    <section class="detail-section">
      <h3>領導者可以追問</h3>
      ${listLeaderQuestions(related)}
    </section>
  `;
  showDetail();
}

function showDetail() {
  els.detailPanel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  els.detailPanel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function render() {
  const rows = getFilteredTrends();
  renderRecommendations();
  renderMustReads();
  renderPerspective();
  renderRadar(rows);
  renderCategoryBars(rows);
  renderTrendCards(rows);
}

function bindEvents() {
  if (els.historySelect) {
    els.historySelect.addEventListener("change", (event) => {
      const report = (historyPayload.reports || []).find((item) => item.id === event.target.value);
      renderHistoryReport(report);
    });
  }

  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });
  els.categorySelect.addEventListener("change", (event) => {
    state.parentCategory = "";
    state.category = event.target.value;
    render();
  });
  els.sourceTypeSelect.addEventListener("change", (event) => {
    state.sourceType = event.target.value;
    render();
  });
  els.confidenceSelect.addEventListener("change", (event) => {
    state.confidence = event.target.value;
    render();
  });
  els.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });

  document.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-close]");
    if (closeTarget) {
      closeDetail();
      return;
    }

    const categoryTarget = event.target.closest("[data-category]");
    if (categoryTarget) {
      state.parentCategory = "";
      state.category = categoryTarget.dataset.category || "";
      els.categorySelect.value = state.category;
      render();
      return;
    }

    const parentCategoryTarget = event.target.closest("[data-parent-category]");
    if (parentCategoryTarget) {
      state.parentCategory = parentCategoryTarget.dataset.parentCategory || "";
      state.category = "";
      els.categorySelect.value = "";
      render();
      return;
    }

    const recommendationTarget = event.target.closest("[data-recommendation-id]");
    if (recommendationTarget) {
      openRecommendationDetail(findRecommendation(recommendationTarget.dataset.recommendationId));
      return;
    }

    const mustReadTarget = event.target.closest("[data-must-read-id]");
    if (mustReadTarget) {
      openMustReadDetail(findMustRead(mustReadTarget.dataset.mustReadId));
      return;
    }

    const trendTarget = event.target.closest("[data-trend-id]");
    if (trendTarget) {
      openTrendDetail(findTrend(trendTarget.dataset.trendId));
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDetail();
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target;
    if (target.matches("[data-trend-id]")) {
      event.preventDefault();
      openTrendDetail(findTrend(target.dataset.trendId));
    }
    if (target.matches("[data-recommendation-id]")) {
      event.preventDefault();
      openRecommendationDetail(findRecommendation(target.dataset.recommendationId));
    }
    if (target.matches("[data-must-read-id]")) {
      event.preventDefault();
      openMustReadDetail(findMustRead(target.dataset.mustReadId));
    }
  });
}

initMeta();
initHistory();
renderSources();
bindEvents();
render();
