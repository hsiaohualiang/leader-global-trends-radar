# 領導者全球趨勢雷達 Skill 說明

## 一句話定位

這個 skill 不是只為了設計課程，而是幫 Joyce 每週建立「全球領導者現在應該關心什麼」的國際視野，並把重要訊號整理成一個可持續更新的網站。

正式技能名稱：

`$update-leader-global-trends`

網站位置：

`/Users/joyce/Documents/工作流/領導者市場脈動/07_領導者全球趨勢雷達網站/site/index.html`

正式 Codex skill 位置：

`/Users/joyce/.codex/skills/update-leader-global-trends/SKILL.md`

## 這個 Skill 會做什麼

| 模組 | 作用 |
| --- | --- |
| 本週全球領導者必看 | 精選 5 到 7 個本週最值得 Joyce 追蹤的全球議題 |
| Joyce 本週觀點筆記 | 把新聞與報告轉成判斷、提問、文章或演講切角 |
| 全球視野主線 | 用 5 到 7 條不重複的主線幫助快速理解本週局勢 |
| 趨勢卡片 | 每張卡片說明議題、來源、管理意義、台灣企業影響 |
| 深入研究 Modal | 點擊後看到完整內容、來源連結、延伸議題與可追蹤問題 |
| 25 個以上分類 | 不限制在原本分類，能主動發現新議題、新老師、新課程方向 |
| 可轉化為領導力學習的議題 | 從全球趨勢推導遠見領導力學院可開發的 6 個課程機會 |
| 歷史紀錄 | 每次更新保存快照，用來觀察議題是否連續升溫或退燒 |

## 每週自動化

已設定為：

每週六晚上 8:00，台北時間，更新並公布「領導者全球趨勢雷達」。

更新時會優先做三件事：

1. 抓取最新國際財經、AI、治理、組織與供應鏈訊號。
2. 判斷哪些議題值得高階領導者關心，而不是只整理新聞。
3. 更新網站內容、來源連結、趨勢分類、推薦議題與歷史紀錄。

## 資料來源策略

主要看國際性、高可信度、可追溯來源。

| 類型 | 代表來源 | 主要看什麼 |
| --- | --- | --- |
| 國際財經媒體 | The Economist、Bloomberg、CNBC、Reuters | CEO 議題、資本市場、AI 經濟、供應鏈、能源、地緣政治 |
| 官方經濟機構 | IMF、OECD、World Bank、BIS | 經濟展望、通膨、金融穩定、債務、貿易風險 |
| AI 與科技研究 | Stanford AI Index、Goldman Sachs AI research、政策研究機構 | AI 投資、AI 基礎建設、資料中心、agentic AI、AI 治理 |
| CEO 與董事會研究 | PwC、Deloitte、McKinsey、The Conference Board、DDI | CEO 信心、董事會議程、人才、轉型、組織韌性 |
| 影音弱訊號 | BBC AI Decoded、Bloomberg Technology、CNBC、Reuters YouTube | 重複出現的議題、訪談主題、觀看與留言訊號 |
| 歐洲 AI 與治理 | European Commission AI Office、AI Continent、Financial Times AI、Sifted AI 100 | EU AI Act、AI factories、AI 主權、歐洲產業觀點 |

不把下列來源當作「全球趨勢」的主要證據：

- 商周 CEO 學院
- 天下學習
- HBR 領導影響力學院
- EMBA

這些來源之後可以用於產品定位或競品比較，但不作為全球領導趨勢成立的主要依據。

## 每週更新流程

1. 檢查目前網站資料與歷史紀錄。
2. 搜尋最近 7 到 14 天的國際來源。
3. 若年度報告仍是該議題最可信來源，也會納入。
4. 為每個候選訊號記錄來源、日期、事實、管理意義、台灣企業影響。
5. 依據可信度 A/B/C 與熱度 1 到 100 分進行評估。
6. 更新 `site/data.js`。
7. 保存歷史快照。
8. 跑驗證腳本，確認網站資料完整。

## 分類與評分規則

### 可信度

| 等級 | 判斷方式 |
| --- | --- |
| A | 官方機構、原始研究、年度報告、可追溯數據 |
| B | 國際主流媒體、專家訪談、可信機構影音或會議內容 |
| C | 社群、留言、搜尋熱度、事件討論等弱訊號 |

### 熱度

熱度會綜合判斷：

- 是否夠新。
- 是否多個高品質來源都在談。
- 是否與 CEO、董事會、CFO、CHRO、CIO 有關。
- 是否對台灣企業有管理意義。
- 是否有可能轉化為高階領導力課程或討論題。
- 是否在多週持續出現。

## 產品與內容原則

| 原則 | 說明 |
| --- | --- |
| 先全球視野，後課程設計 | 首頁不能看起來只是課程企劃工具 |
| 避免重複 | 大卡片只放不重複的主線，25 個分類留在篩選與研究導覽 |
| 每個點擊都要有價值 | 點進去要有來源、完整內容、管理意義與延伸問題 |
| 必看議題要精選 | 每週 5 到 7 個就好，不是把所有資料都塞上去 |
| Joyce 筆記是判斷訓練 | 要幫 Joyce 形成觀點，而不是只做摘要 |
| 分類要能長大 | 不限制 25 類，看到新議題就可以長出新分類 |
| 來源要有紀律 | 社群與留言可以作為弱訊號，但不能假裝是高可信度資料 |

## 驗收標準

每次更新完成前，要確認：

- `weeklyMustReads` 有 5 到 7 則。
- `perspectiveNote` 有本週觀點、討論問題與寫作切角。
- `topRecommendations` 剛好 6 個。
- `trends` 至少 20 張趨勢卡。
- `categoryDefinitions` 至少 25 個分類。
- 每個分類至少能對應 4 張趨勢卡。
- 每張趨勢卡都有來源 URL 與日期。
- 點擊卡片後能看到更完整內容與連結。
- 首頁沒有大量重複訊息。
- 驗證腳本通過。

## 可以怎麼叫 Codex 執行

中文指令：

```text
使用 $update-leader-global-trends，更新本週領導者全球趨勢雷達。請優先幫我判斷全球領導者本週應該關心什麼，更新網站、來源連結、Joyce 觀點筆記、六個可轉化為領導力學習的議題，並保存歷史紀錄。
```

英文指令：

```text
Use $update-leader-global-trends to refresh Joyce's global leadership perspective radar website. Prioritize weekly global leadership must-reads, Joyce's perspective note, source-linked deep dives, six learning opportunities, validation, and history snapshots.
```

## 相關檔案

| 檔案 | 用途 |
| --- | --- |
| `/Users/joyce/.codex/skills/update-leader-global-trends/SKILL.md` | Codex 讀取的正式 skill |
| `/Users/joyce/.codex/skills/update-leader-global-trends/references/design-principles.md` | 產品設計與學習原則 |
| `/Users/joyce/.codex/skills/update-leader-global-trends/references/source-watchlist.md` | 每週追蹤來源清單 |
| `/Users/joyce/.codex/skills/update-leader-global-trends/scripts/check_global_trends.js` | 資料完整性驗證 |
| `/Users/joyce/.codex/skills/update-leader-global-trends/scripts/record_trend_history.js` | 保存歷史快照 |
| `/Users/joyce/Documents/工作流/領導者市場脈動/07_領導者全球趨勢雷達網站/site/data.js` | 網站主要資料 |
| `/Users/joyce/Documents/工作流/領導者市場脈動/07_領導者全球趨勢雷達網站/site/index.html` | 網站入口 |

## 下一步建議

下一次可以討論是否要把這個雷達再延伸成：

1. 給董事長或企業二代看的「每週 5 分鐘國際視野簡報」。
2. 給遠見內部使用的「課程企劃輸入表」。
3. 給會員或學員看的「高階領導者趨勢週報」。
