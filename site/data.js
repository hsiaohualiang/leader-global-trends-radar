window.LEADER_TREND_DATA = {
  meta: {
    generated_at: "2026-06-24",
    next_review: "2026-06-29 07:30 Asia/Taipei",
    scope:
      "追蹤全球領導者必看的經營趨勢，來源涵蓋國際財經媒體、官方經濟機構、董事會/CEO調查、供應鏈、AI 研究與歐洲 AI 治理/產業訊號，協助高階主管把外部變化轉成策略、人才與課程產品判斷。",
    weekly_thesis:
      "本週訊號最集中在三條主線：AI 投資開始從創新口號變成 CEO/CFO 的資本配置與 ROI 問題；地緣政治、能源與供應鏈風險再度回到經營核心；人才與工作設計則進入人機協作、信任治理、持續再學習的新階段。",
    recommendation_note:
      "六門建議課不是一般管理課，而是把全球趨勢轉成台灣企業領導人可做決策的課程產品。每門都包含目標客群、師資輪廓、課程結構與可直接使用的招生文案方向。",
  },
  methodology: {
    confidence:
      "A=官方機構、一手調查、年度報告或可追溯原始資料；B=國際主流媒體、活動頁、專家訪談或影音訊號；C=弱訊號，需持續追蹤互動、轉載與後續資料。",
    heat:
      "熱度分數綜合來源密度、近期性、CEO/董事會關聯性、台灣企業影響、可轉成課程產品的程度。",
    update_rule:
      "每週保留最新快照，新增趨勢不限制既有類別；當同一主題連續多週出現、來源增加或熱度上升時，提升推薦順位。",
  },
  sourceStrategy: {
    summary:
      "第一圈採用國際財經媒體與官方/研究機構，第二圈採用高信譽顧問公司與董事會調查，第三圈才觀察 YouTube、社群互動與弱訊號。台灣學習機構可作為產品對標，不作為宏觀趨勢的一手來源。",
    excludedPrimarySources: ["商周 CEO 學院", "天下學習", "HBR 領導影響力學院", "EMBA"],
  },
  topRecommendations: [
    {
      id: "course-ai-capital-roi",
      title: "AI 投資與 ROI 治理：CEO/CFO 的資本配置課",
      category: "AI資本配置",
      priority: 1,
      heat: 96,
      confidence: "A",
      trendIds: ["ai-cost-discipline", "ai-capex-financial-link", "ai-scale-gap"],
      targetAudience:
        "董事長、執行長、財務長、資訊長、數位長，以及正在評估 AI 預算但缺乏投資準則的企業二代與事業群主管。",
      whyNow:
        "AI 預算與資料中心投資快速升高，但多數企業仍難以把試點轉成財務成果，領導者需要一套能管投資、管風險、管落地的共同語言。",
      teacherProfile:
        "建議由科技產業分析師、企業 CFO/投資長、AI 轉型顧問與實際導入過企業級 AI 的 CIO 共同授課。",
      productStructure: [
        "AI 投資組合盤點：哪些用例值得做，哪些應暫緩",
        "ROI 與成本治理：token、雲端、資安、人力與流程成本",
        "董事會報告模板：用財務語言呈現 AI 成果與風險",
        "台灣企業案例工作坊：從一個部門試點走到跨部門規模化",
      ],
      copywriting:
        "AI 不是多買工具，而是重新配置企業資本。這堂課協助 CEO 與 CFO 建立一張 AI 投資地圖，判斷哪些專案值得加碼、哪些專案該停損，讓 AI 從熱潮回到經營成果。",
      openingFormat: "2 天高階班＋1 次線上追蹤診斷",
      sourceBasis: ["Goldman Sachs AI capex", "PwC CEO Survey", "McKinsey State of AI", "BIS Quarterly Review"],
    },
    {
      id: "course-geopolitics-energy",
      title: "地緣政治、能源與通膨：高階主管情境決策演練",
      category: "地緣政治與能源",
      priority: 2,
      heat: 94,
      confidence: "A",
      trendIds: ["middle-east-energy-risk", "global-growth-downgrade", "tariff-cyber-pressure"],
      targetAudience:
        "製造業、科技業、零售通路、物流、金融與能源敏感產業的 CEO、營運長、供應鏈長與策略長。",
      whyNow:
        "IMF、OECD、World Bank 同時指向全球成長放緩與能源/地緣政治風險，企業需要把情境推演放回年度策略與價格決策。",
      teacherProfile:
        "建議由國際政經分析師、能源市場研究者、供應鏈主管與財務避險專家共同設計案例。",
      productStructure: [
        "三種地緣政治情境：能源價格、航運、匯率與需求衝擊",
        "價格與毛利防線：如何把風險轉成可執行的決策門檻",
        "供應鏈備援：區域化、庫存、替代供應商與合約條款",
        "高階桌遊式演練：董事會當週必須做的五個決定",
      ],
      copywriting:
        "當風險不是黑天鵝，而是營運日常，領導者需要的不是更多新聞，而是一套可以在會議室裡做決策的情境工具。",
      openingFormat: "1 天密集演練＋企業內訓版本",
      sourceBasis: ["IMF WEO", "OECD Economic Outlook", "World Bank Global Economic Prospects"],
    },
    {
      id: "course-supply-chain-resilience",
      title: "韌性供應鏈再設計：先有人與資料，再談 AI 自動化",
      category: "供應鏈韌性",
      priority: 3,
      heat: 91,
      confidence: "B",
      trendIds: ["supply-chain-bend-not-break", "data-before-automation", "taiwan-ai-supply-chain"],
      targetAudience:
        "製造、半導體、電子零組件、醫材、食品、零售與跨境品牌的供應鏈長、營運長、採購長與總經理。",
      whyNow:
        "全球供應鏈討論已從效率最大化轉向韌性、資料可視性與人機協作，AI 不是第一步，基礎資料與跨部門決策權才是第一步。",
      teacherProfile:
        "建議邀請供應鏈顧問、台灣製造業 COO、資料治理專家與具國際採購經驗的高階主管。",
      productStructure: [
        "供應鏈韌性成熟度盤點",
        "資料斷點與決策斷點診斷",
        "AI demand sensing 與風險預警的導入條件",
        "台灣供應商如何從代工能力升級成韌性夥伴",
      ],
      copywriting:
        "韌性不是多買庫存，而是讓組織在變局中仍能看得見、判斷快、轉得動。這堂課幫高階主管重新設計供應鏈的資料、人才與決策節奏。",
      openingFormat: "2 天工作坊＋供應鏈成熟度檢核表",
      sourceBasis: ["Reuters Events Supply Chain USA", "World Economic Forum Global Value Chains Outlook"],
    },
    {
      id: "course-ai-board-trust",
      title: "AI 信任與董事會治理：從資安到錯假資訊風險",
      category: "董事會治理",
      priority: 4,
      heat: 89,
      confidence: "A",
      trendIds: ["ai-trust-disinformation", "board-ai-cyber", "cyber-risk-ceo"],
      targetAudience:
        "董事、獨立董事、CEO、法遵長、資安長、品牌長，以及正在建立 AI governance 的企業高階團隊。",
      whyNow:
        "AI 進入核心流程後，董事會不能只問效率，也要問資料可信、決策責任、資安與錯假資訊。這是品牌信任與營運風險問題。",
      teacherProfile:
        "建議由公司治理專家、資安長、資料/AI 法規顧問、品牌危機處理顧問與董事會成員共同授課。",
      productStructure: [
        "AI governance 董事會必問十題",
        "資料可信、模型偏誤、錯假資訊與品牌危機",
        "資安與 AI 風險的董事會儀表板",
        "從政策到流程：誰可以讓 AI 做決策，誰負責覆核",
      ],
      copywriting:
        "AI 讓決策更快，也讓錯誤擴散更快。這堂課協助董事與高階主管建立 AI 時代的信任治理框架，避免把技術風險誤判成 IT 小事。",
      openingFormat: "董事會半日班＋高階團隊 1 日版",
      sourceBasis: ["Deloitte Human Capital Trends", "Conference Board CEO Confidence", "PwC AI Predictions"],
    },
    {
      id: "course-human-ai-work",
      title: "人機協作的組織再設計：從職能效率到新價值曲線",
      category: "未來工作與人才",
      priority: 5,
      heat: 87,
      confidence: "A",
      trendIds: ["human-x-machine", "continuous-reinvention", "leadership-pipeline-stress"],
      targetAudience:
        "CEO、CHRO、事業部主管、學習發展主管，以及正在重塑工作流程與人才梯隊的企業。",
      whyNow:
        "AI 不是單純替代人，而是改變工作設計、能力模型與領導者責任。企業若只自動化成本，容易錯過新價值曲線。",
      teacherProfile:
        "建議由組織變革顧問、CHRO、AI 工作流設計師、心理安全與領導發展專家共同設計。",
      productStructure: [
        "人機分工：哪些工作交給 AI，哪些價值必須由人創造",
        "能力模型重寫：判斷力、溝通、協作與 AI fluency",
        "學習設計：把再學習嵌入日常流程",
        "領導者壓力與人才梯隊：從 burnout 到可持續績效",
      ],
      copywriting:
        "AI 真正改變的不是工具清單，而是工作本身。這堂課幫領導者重新定義人與機器如何共同創造價值，讓效率成為第二曲線的燃料。",
      openingFormat: "2 天高階工作坊＋90 天組織實驗設計",
      sourceBasis: ["Deloitte Human Capital Trends", "DDI Leadership Trends", "Stanford AI Index"],
    },
    {
      id: "course-ceo-risk-radar",
      title: "CEO 風險雷達：低成長、低招聘與高不確定下的經營節奏",
      category: "CEO經營節奏",
      priority: 6,
      heat: 85,
      confidence: "A",
      trendIds: ["ceo-confidence-down", "low-hire-low-fire", "value-over-efficiency"],
      targetAudience:
        "企業主、CEO、總經理、策略長、財務長，以及處在低成長但仍要投資轉型的高階團隊。",
      whyNow:
        "CEO 信心與宏觀成長預期下修，但 AI 與資本支出仍在推動競爭差距。領導者需要的是更短週期、更高頻率的策略節奏。",
      teacherProfile:
        "建議由宏觀經濟學者、企業 CEO、策略顧問與組織敏捷轉型顧問共同授課。",
      productStructure: [
        "低成長時代的 CEO 儀表板",
        "投資、招聘、薪酬與成本的四個決策節奏",
        "從年度計畫改成季度策略回顧",
        "高階團隊如何在不確定中保持一致行動",
      ],
      copywriting:
        "當景氣沒有明確答案，CEO 最需要的是節奏感。這堂課協助高階團隊建立一套短週期經營雷達，在該保守時保守，在該下注時下注。",
      openingFormat: "1 天 CEO 閉門班＋季度同儕圓桌",
      sourceBasis: ["Conference Board CEO Confidence", "PwC Global CEO Survey", "World Bank Global Economic Prospects"],
    },
  ],
  trends: [
    {
      id: "ai-cost-discipline",
      title: "AI 成本紀律成為 CEO/CFO 議題",
      category: "AI資本配置",
      sourceType: "國際財經媒體",
      sourceName: "The Economist",
      sourceUrl: "https://www.economist.com/business/2026/06/14/companies-are-scrambling-to-curtail-soaring-ai-costs",
      sourceDate: "2026-06-14",
      heat: 96,
      confidence: "B",
      summary:
        "企業開始意識到 AI 使用成本快速累積，特別是雲端、token、模型調用、資安與人力改造成本，AI 預算從創新部門走進 CFO 的管控範圍。",
      whyLeadersCare:
        "AI 不再只是導入工具，而是資本配置問題。CEO 要決定哪些用例值得投資，CFO 要建立成本、效益與停損機制。",
      taiwanImpact:
        "台灣企業若同時是 AI 供應鏈受益者與 AI 使用者，必須一手把握需求成長，一手避免內部 AI 投資失控。",
      opportunity:
        "開設 AI 投資組合、ROI 治理、CFO 決策儀表板與高階主管 AI 預算審查課。",
      signals: ["AI 使用成本被主流財經媒體放大討論", "企業從採用率轉向 ROI 與成本紀律", "CFO 與 CIO 需要共同治理語言"],
      actions: ["盤點所有 AI 用例的完整成本", "建立 AI 專案分級與停損門檻", "把 AI 成果改用營收、毛利、時間與風險四類指標衡量"],
    },
    {
      id: "ai-capex-financial-link",
      title: "AI 資本支出與金融穩定開始連動",
      category: "AI資本配置",
      sourceType: "官方/金融機構",
      sourceName: "BIS Quarterly Review / Goldman Sachs",
      sourceUrl: "https://www.bis.org/publ/qtrpdf/r_qt2603.pdf",
      sourceDate: "2026-06",
      heat: 94,
      confidence: "A",
      summary:
        "AI 基礎建設投資規模擴大，資料中心與 hyperscaler 的資金來源、債務與非銀行金融連結，開始被金融監理與投資機構視為可能的風險傳導管道。",
      whyLeadersCare:
        "AI 投資可能影響企業融資成本、估值、供應商財務健康與景氣循環。董事會需要把 AI capex 當成策略與風險雙重議題。",
      taiwanImpact:
        "半導體、伺服器、散熱與電力供應鏈可能受惠，但也需注意客戶資本支出週期與融資條件變化。",
      opportunity:
        "設計 AI 投資週期、金融風險與供應鏈景氣判讀課，服務科技業與投資決策者。",
      signals: ["BIS 關注 AI 投資與金融系統連結", "Goldman Sachs 上調 AI hyperscaler capex 預期", "市場開始問 AI 支出是否能形成現金流"],
      actions: ["追蹤主要客戶 capex guidance", "建立 AI 供應鏈敏感度表", "董事會每季檢視 AI 相關投資與融資風險"],
    },
    {
      id: "ai-scale-gap",
      title: "AI 試點很多，規模化成果仍不足",
      category: "AI落地與治理",
      sourceType: "顧問/研究",
      sourceName: "McKinsey State of AI",
      sourceUrl: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
      sourceDate: "2025-11",
      heat: 90,
      confidence: "A",
      summary:
        "AI 使用率快速提升，但多數組織仍停在實驗或試點階段，能把 AI 嵌入流程並產生企業級財務效果的公司仍是少數。",
      whyLeadersCare:
        "導入 AI 的瓶頸通常不是工具，而是流程重設、資料治理、角色權責與改變管理。CEO 必須從試點思維轉向營運設計。",
      taiwanImpact:
        "許多台灣企業已有 AI POC，但高階主管需要用營運語言重新定義 AI 的落地節奏。",
      opportunity:
        "開設 AI from pilot to scale 的高階工作坊，協助企業挑選可規模化場景。",
      signals: ["AI 使用廣泛但規模化仍有限", "agentic AI 開始進入企業試驗", "大型企業比中小企業更容易進入 scale 階段"],
      actions: ["從 10 個 POC 收斂到 2 個高價值工作流", "指定 business owner 而非只由 IT 推動", "建立 90 天規模化檢核表"],
    },
    {
      id: "agentic-workflow",
      title: "Agentic AI 從概念進入高價值工作流",
      category: "AI落地與治理",
      sourceType: "顧問/研究",
      sourceName: "PwC AI Predictions",
      sourceUrl: "https://www.pwc.com/us/en/tech-effect/ai-analytics/ai-predictions.html",
      sourceDate: "2026",
      heat: 88,
      confidence: "A",
      summary:
        "agentic AI 被視為能自動化複雜、高價值流程的新一波應用，尤其是需求預測、個人化、產品設計、財務、人資、IT 與內稽等領域。",
      whyLeadersCare:
        "AI agent 牽涉決策權、責任歸屬與流程控制，不能只交給技術團隊。領導者要決定哪些流程可放權，哪些需要人類覆核。",
      taiwanImpact:
        "可優先用在客服、採購、預測、稽核與知識管理，但要避免把不穩定流程自動化後放大錯誤。",
      opportunity:
        "開設 AI agent 流程設計與治理課，讓高階主管學會看懂 agent 導入藍圖。",
      signals: ["顧問公司將 agentic AI 列為 2026 核心企業應用", "企業從聊天工具轉向流程自動化", "決策權與覆核機制成為管理焦點"],
      actions: ["挑選可監控、可回滾的流程試點", "定義 AI agent 的權限邊界", "建立人類覆核與事件紀錄"],
    },
    {
      id: "ai-trust-disinformation",
      title: "AI 信任治理從資安擴大到錯假資訊",
      category: "董事會治理",
      sourceType: "顧問/研究",
      sourceName: "Deloitte Human Capital Trends",
      sourceUrl: "https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends.html",
      sourceDate: "2026-03-04",
      heat: 88,
      confidence: "A",
      summary:
        "AI 正在模糊內容來源與決策責任，組織需要把 digital trust 從資安擴大到資料可信、錯假資訊與人機決策權。",
      whyLeadersCare:
        "AI 造成的錯誤不只是技術問題，會影響品牌、員工信任、客戶關係與合規。董事會要能問對問題。",
      taiwanImpact:
        "金融、醫療、媒體、零售與教育訓練機構特別需要建立 AI 內容、推薦與決策的信任治理。",
      opportunity:
        "發展董事會 AI trust checklist、AI 風險演練與高階主管數位信任課。",
      signals: ["Deloitte 把信任、資料與文化列為組織基礎建設", "AI 內容與資料可信度成為人資與治理議題", "資安不再足以涵蓋 AI 風險"],
      actions: ["建立 AI 使用政策與問責流程", "對外部溝通內容加上 AI 來源檢核", "把錯假資訊納入危機管理演練"],
    },
    {
      id: "human-x-machine",
      title: "工作設計從 human + machine 轉向 human x machine",
      category: "未來工作與人才",
      sourceType: "顧問/研究",
      sourceName: "Deloitte Human Capital Trends",
      sourceUrl: "https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends.html",
      sourceDate: "2026-03-04",
      heat: 87,
      confidence: "A",
      summary:
        "人與 AI 不只是並肩工作，而是工作流程、文化、決策權與信任架構重新交織。組織要從自動化任務轉向重設工作。",
      whyLeadersCare:
        "高階主管需要決定人類判斷力在哪裡創造價值，AI 在哪裡提高速度，並重寫人才能力模型。",
      taiwanImpact:
        "台灣企業若只把 AI 當節省人力，可能錯過流程創新與新服務模式。",
      opportunity:
        "開設人機協作組織設計、AI fluency 與高階主管人才轉型課。",
      signals: ["人機協作成為 2026 人力資本主題", "組織需要重新分配決策權", "效率焦點轉向新價值創造"],
      actions: ["列出三個高價值流程重新設計", "定義 AI fluency 能力等級", "把 AI 應用與人才發展計畫綁在一起"],
    },
    {
      id: "continuous-reinvention",
      title: "長週期計畫讓位給持續再發明",
      category: "組織韌性",
      sourceType: "顧問/研究",
      sourceName: "Deloitte Human Capital Trends",
      sourceUrl: "https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends.html",
      sourceDate: "2026-03-04",
      heat: 84,
      confidence: "A",
      summary:
        "市場、技術與人才期待快速變動，成功組織需要更高頻的 sensing、experimenting、adapting，而不是只靠年度計畫。",
      whyLeadersCare:
        "這會改變 CEO 的經營節奏：策略、資源、人才與學習需要更短迭代。",
      taiwanImpact:
        "中堅企業與家族企業若決策節奏過慢，可能在 AI 與地緣風險下失去調整窗口。",
      opportunity:
        "打造 CEO 90 天策略節奏、第二曲線實驗管理與高階團隊 alignment 課。",
      signals: ["組織 S curve 被壓縮", "敏捷與學習成為策略能力", "高階團隊要從規劃者變成實驗設計者"],
      actions: ["把年度策略拆成季度賭注", "每月檢視趨勢雷達與資源挪移", "設定小規模高學習量實驗"],
    },
    {
      id: "ceo-confidence-down",
      title: "CEO 信心回落，風險感升高",
      category: "CEO經營節奏",
      sourceType: "CEO調查",
      sourceName: "The Conference Board",
      sourceUrl: "https://www.conference-board.org/topics/CEO-Confidence/",
      sourceDate: "2026-05-28",
      heat: 85,
      confidence: "A",
      summary:
        "美國大型企業 CEO 信心在 2026 年第二季回落到負區間，CEO 對經濟、產業、資安、地緣政治、AI 與能源供應鏈風險更謹慎。",
      whyLeadersCare:
        "低信心不代表停止投資，而是要求投資更精準。CEO 需要同時管理防守與進攻。",
      taiwanImpact:
        "外銷導向企業需觀察客戶投資、庫存與採購節奏變化，避免以單一樂觀假設做年度計畫。",
      opportunity:
        "開設 CEO 風險雷達與季度策略回顧課，協助高階團隊把風險轉成會議節奏。",
      signals: ["CEO 信心指標下滑", "資安、地緣、AI、能源與供應鏈風險並列", "投資計畫仍未完全撤退"],
      actions: ["建立 CEO risk dashboard", "每季檢查招聘、capex、現金與供應鏈假設", "設計樂觀/基準/壓力三種情境"],
    },
    {
      id: "low-hire-low-fire",
      title: "低招聘、低裁員的管理常態",
      category: "未來工作與人才",
      sourceType: "CEO調查",
      sourceName: "The Conference Board",
      sourceUrl: "https://www.conference-board.org/topics/CEO-Confidence/",
      sourceDate: "2026-05-28",
      heat: 78,
      confidence: "A",
      summary:
        "CEO 對擴編持謹慎態度，但並未大幅裁員，形成低招聘、低裁員的狀態。人才策略不再只是招募，而是內部能力重配。",
      whyLeadersCare:
        "在不確定環境下，組織要把既有人才轉向新能力，而不是單純依賴外部招聘。",
      taiwanImpact:
        "台灣企業面臨高齡化與人才短缺，低招聘環境會放大內部培育與接班壓力。",
      opportunity:
        "開設人才重配置、內部流動市場與 AI 時代能力盤點課。",
      signals: ["招聘計畫保守", "部分 CEO 預期需要大幅 upskill", "薪資與人力計畫變成策略風險"],
      actions: ["盤點關鍵職能缺口", "把學習預算連結策略職缺", "建立內部人才流動機制"],
    },
    {
      id: "middle-east-energy-risk",
      title: "中東衝突與能源價格重新改寫策略假設",
      category: "地緣政治與能源",
      sourceType: "官方/經濟機構",
      sourceName: "IMF / OECD / World Bank",
      sourceUrl: "https://www.imf.org/en/publications/weo/issues/2026/04/14/world-economic-outlook-april-2026",
      sourceDate: "2026-06",
      heat: 93,
      confidence: "A",
      summary:
        "IMF、OECD 與 World Bank 均提示全球成長放緩，並把能源、地緣政治與貿易緊張列為重要下行風險。",
      whyLeadersCare:
        "能源與運輸成本會直接影響毛利、價格策略、供應鏈與消費需求。CEO 需要用情境而不是單點預測來做決策。",
      taiwanImpact:
        "台灣高度仰賴能源進口，電子、化工、航運、零售與製造業都需重估成本與交期。",
      opportunity:
        "設計地緣政治情境決策演練，讓主管用一天走完價格、庫存、供應與客戶決策。",
      signals: ["官方機構下修成長或提示下行風險", "能源價格與航運風險受關注", "亞洲能源進口經濟體敏感度上升"],
      actions: ["重跑能源與匯率敏感度", "更新合約價格調整條款", "為關鍵材料建立替代供應與庫存策略"],
    },
    {
      id: "global-growth-downgrade",
      title: "全球低成長成為基準假設",
      category: "全球宏觀",
      sourceType: "官方/經濟機構",
      sourceName: "World Bank Global Economic Prospects",
      sourceUrl: "https://www.worldbank.org/en/news/press-release/2026/06/11/global-economic-prospects-june-2026-press-release",
      sourceDate: "2026-06-11",
      heat: 86,
      confidence: "A",
      summary:
        "世界銀行下修全球成長預估，指出多數經濟體展望轉弱。對企業而言，低成長環境要求更高的資本效率與客戶選擇能力。",
      whyLeadersCare:
        "成長放緩時，企業不能只靠市場自然成長，需要更清楚的客群選擇、產品組合與現金流管理。",
      taiwanImpact:
        "台灣出口與 B2B 企業需重新評估客戶需求、匯率、庫存與資金週轉。",
      opportunity:
        "開設低成長時代的策略選擇、產品組合與現金流管理課。",
      signals: ["全球成長預估被下修", "不確定性升高", "企業需要更精準的投資優先順序"],
      actions: ["重新排序高毛利與高韌性客戶", "把現金轉換週期納入高階會議", "調整年度預算中的成長假設"],
    },
    {
      id: "tariff-cyber-pressure",
      title: "關稅、資安與科技治理壓力同時上升",
      category: "全球宏觀",
      sourceType: "CEO調查",
      sourceName: "PwC Global CEO Survey",
      sourceUrl: "https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-global-ceo-survey.html",
      sourceDate: "2026-01-19",
      heat: 83,
      confidence: "A",
      summary:
        "全球 CEO 對收入成長信心下降，同時面對 AI 回報不確定、關稅、地緣政治與資安壓力。",
      whyLeadersCare:
        "多重風險會同時作用在成本、收入與信任。CEO 需要避免把風險分散在不同部門各自處理。",
      taiwanImpact:
        "台灣企業若有美中供應鏈、跨境雲端、資安與出口關稅暴露，需要整合財務、法務、IT 與營運判斷。",
      opportunity:
        "設計 CEO multi-risk dashboard 課，把宏觀、科技、法遵與供應鏈風險放在一張表。",
      signals: ["CEO 收入信心創多年低點", "AI ROI 與資安同時被點名", "關稅與地緣政治干擾投資"],
      actions: ["把關稅、資安、AI 風險納入同一個策略回顧", "設定跨部門風險 owner", "建立董事會風險更新格式"],
    },
    {
      id: "supply-chain-bend-not-break",
      title: "供應鏈韌性從不斷裂轉向可彎曲",
      category: "供應鏈韌性",
      sourceType: "產業活動/媒體",
      sourceName: "Reuters Events Supply Chain USA",
      sourceUrl: "https://events.reutersevents.com/supply-chain/usa",
      sourceDate: "2026",
      heat: 84,
      confidence: "B",
      summary:
        "供應鏈討論從效率最佳化轉向可調整、可承受衝擊。關鍵不只是更多 AI，而是人、資料與營運節奏先到位。",
      whyLeadersCare:
        "供應鏈韌性需要跨部門取捨：成本、庫存、交期、客戶承諾與風險不能各自最佳化。",
      taiwanImpact:
        "台灣製造與出口企業要把韌性從採購議題提升為總經理議題。",
      opportunity:
        "開設供應鏈韌性成熟度與高階主管演練課。",
      signals: ["Reuters 供應鏈活動主打韌性與人/資料基礎", "AI/automation 前要先補基礎能力", "供應鏈長與 CEO 共同參與"],
      actions: ["定義關鍵供應鏈情境", "盤點資料可視性缺口", "建立跨部門供應鏈戰情會議節奏"],
    },
    {
      id: "data-before-automation",
      title: "資料基礎先於 AI 自動化",
      category: "資料治理",
      sourceType: "產業活動/媒體",
      sourceName: "Reuters Events / PwC AI Predictions",
      sourceUrl: "https://events.reutersevents.com/supply-chain/usa",
      sourceDate: "2026",
      heat: 82,
      confidence: "B",
      summary:
        "無論供應鏈或 AI agent，國際討論都指向同一件事：沒有乾淨資料、共同流程與權責設計，自動化只會放大混亂。",
      whyLeadersCare:
        "資料治理不是 IT 後勤，而是 AI 成敗的地基。高階主管要為資料品質與流程所有權負責。",
      taiwanImpact:
        "許多台灣企業資料仍分散在 ERP、Excel、部門系統與個人經驗中，AI 導入前要先補治理。",
      opportunity:
        "推出高階主管資料治理入門與 AI-ready organization 課。",
      signals: ["供應鏈與 AI 討論同時強調資料基礎", "流程責任比工具採購更關鍵", "AI-ready 成為轉型門檻"],
      actions: ["選出三個高價值資料域", "建立資料 owner 與資料品質儀表板", "把資料治理列入部門主管 KPI"],
    },
    {
      id: "cloud-sovereignty",
      title: "雲端主權與科技治理進入董事會議程",
      category: "科技治理",
      sourceType: "國際組織/論壇",
      sourceName: "World Economic Forum",
      sourceUrl: "https://www.weforum.org/stories/2026/01/pwc-ceo-survey-highlights-2026/",
      sourceDate: "2026-01",
      heat: 77,
      confidence: "B",
      summary:
        "各國對雲端、資料、AI 與資安治理路徑不同，企業跨境營運時，數位策略與全球風險開始更緊密相連。",
      whyLeadersCare:
        "科技架構會影響法遵、客戶信任、營運不中斷與跨境擴張。董事會不能只看成本與效能。",
      taiwanImpact:
        "台灣企業跨國佈局與服務海外客戶時，需要重估資料落地、雲端供應商與法規相容性。",
      opportunity:
        "開設高階主管雲端主權、資料跨境與科技治理課。",
      signals: ["數位策略與全球風險連動", "資安與雲端主權升上 CEO 議程", "跨境科技架構不再只是 IT 選型"],
      actions: ["盤點關鍵資料所在地", "檢查雲端與 AI 供應商法遵暴露", "把科技架構納入海外擴張評估"],
    },
    {
      id: "board-ai-cyber",
      title: "董事會 AI、資安與危機治理需求升高",
      category: "董事會治理",
      sourceType: "CEO調查",
      sourceName: "The Conference Board",
      sourceUrl: "https://www.conference-board.org/topics/CEO-Confidence/",
      sourceDate: "2026-05-28",
      heat: 86,
      confidence: "A",
      summary:
        "CEO 將資安、AI 新科技、地緣政治、供應鏈與能源列為重要風險。董事會需要能同時理解科技、營運與外部環境。",
      whyLeadersCare:
        "董事會若只在事件發生後才介入，會錯過風險預防與資源配置窗口。",
      taiwanImpact:
        "上市櫃公司、金融業與高科技供應鏈需要更成熟的董事會風險溝通與演練。",
      opportunity:
        "推出董事會 AI/cyber risk briefing 與危機桌上演練。",
      signals: ["CEO 風險清單高度集中在科技與外部風險", "資安被視為 top risk", "董事會需要更高頻資料更新"],
      actions: ["每季董事會進行 AI/cyber briefing", "建立事件前演練機制", "要求管理團隊提出風險量化與預警指標"],
    },
    {
      id: "cyber-risk-ceo",
      title: "資安風險不再只是 CISO 的責任",
      category: "科技治理",
      sourceType: "CEO調查",
      sourceName: "PwC / Conference Board",
      sourceUrl: "https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-global-ceo-survey.html",
      sourceDate: "2026-01",
      heat: 82,
      confidence: "A",
      summary:
        "資安與 AI 風險一起成為 CEO 與董事會焦點。風險已從系統防護擴大到營運不中斷、品牌信任、供應鏈與合規。",
      whyLeadersCare:
        "資安事件會直接影響收入、客戶關係與董事責任。CEO 需要參與優先順序與資源配置。",
      taiwanImpact:
        "台灣供應鏈若是國際客戶關鍵節點，資安成熟度會成為接單與合作門檻。",
      opportunity:
        "開設 CEO/CISO 共同決策課，讓非技術高階主管看懂資安投資。",
      signals: ["CEO 調查反覆提到資安暴露", "供應鏈與 AI 使攻擊面擴大", "董事會問責升高"],
      actions: ["把資安風險轉成營運與財務語言", "檢查關鍵供應商資安要求", "設計 CEO 層級資安演練"],
    },
    {
      id: "value-over-efficiency",
      title: "從成本效率轉向價值創造",
      category: "組織韌性",
      sourceType: "顧問/研究",
      sourceName: "Deloitte Human Capital Trends",
      sourceUrl: "https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends.html",
      sourceDate: "2026-03-04",
      heat: 80,
      confidence: "A",
      summary:
        "AI 與成本壓力讓企業容易只追求效率，但國際趨勢提醒組織要把節省下來的能力重新投入創新、成長與人類獨特價值。",
      whyLeadersCare:
        "只靠降本會讓組織進入萎縮循環；高階主管要決定省下來的資源投到哪個新價值曲線。",
      taiwanImpact:
        "台灣企業擅長效率，但下一階段競爭需要服務、品牌、解決方案與人才價值升級。",
      opportunity:
        "設計從效率到價值的第二曲線課，連結 AI、生產力與商業模式。",
      signals: ["人力資本研究強調 value creation", "AI 效率需要轉成再投資", "組織能力重心從成本控制擴大到創新"],
      actions: ["列出效率節省後的再投資方向", "把 AI 生產力連結新收入而非只裁成本", "建立新價值實驗池"],
    },
    {
      id: "ai-infra-geopolitics",
      title: "AI 基礎建設成為地緣競爭核心",
      category: "AI供應鏈與地緣",
      sourceType: "政策/研究",
      sourceName: "Atlantic Council / Stanford AI Index",
      sourceUrl: "https://hai.stanford.edu/ai-index/2026-ai-index-report",
      sourceDate: "2026",
      heat: 86,
      confidence: "A",
      summary:
        "AI 競爭橫跨半導體、高速網路、資料中心、模型、應用與治理規範，國家與企業都在重新配置技術堆疊。",
      whyLeadersCare:
        "企業的供應商、雲端、晶片與模型選擇都可能受到政策與地緣風險影響。",
      taiwanImpact:
        "台灣在半導體與 AI 伺服器供應鏈位置關鍵，但同時更暴露於科技管制與客戶集中風險。",
      opportunity:
        "開設 AI 供應鏈地緣策略課，協助企業理解半導體、雲端、資料中心與政策連動。",
      signals: ["AI 投資與國家競爭連動", "Stanford AI Index 持續追蹤 AI 經濟規模", "政策研究強調技術堆疊競爭"],
      actions: ["盤點關鍵技術供應商與政策暴露", "建立科技管制情境", "追蹤主要客戶 AI 基礎建設投資"],
    },
    {
      id: "taiwan-ai-supply-chain",
      title: "台灣 AI 供應鏈機會擴大但波動更高",
      category: "台灣企業機會",
      sourceType: "投資/研究",
      sourceName: "Goldman Sachs / Stanford AI Index",
      sourceUrl: "https://www.goldmansachs.com/insights/articles/why-ai-companies-may-invest-more-than-500-billion-in-2026",
      sourceDate: "2026",
      heat: 89,
      confidence: "A",
      summary:
        "AI infrastructure capex 仍是全球投資焦點，台灣供應鏈可能受益於伺服器、晶片、散熱、電力與資料中心需求。",
      whyLeadersCare:
        "高成長機會也帶來產能、客戶集中、資本支出與景氣反轉風險。",
      taiwanImpact:
        "這是台灣企業的優勢領域，但需要從接單能力升級到策略議價、客戶組合與風險管理。",
      opportunity:
        "推出 AI 供應鏈經營策略與大客戶風險管理課。",
      signals: ["AI capex 預估維持高檔", "供應鏈投資與資料中心需求連動", "投資者更重視 AI 投資回報"],
      actions: ["檢查 AI 客戶收入占比", "建立產能與現金流壓力測試", "設計大客戶議價與風險分散策略"],
    },
    {
      id: "customer-trust-ai",
      title: "AI 透明度成為客戶信任門檻",
      category: "品牌與客戶信任",
      sourceType: "顧問/研究",
      sourceName: "Deloitte / PwC",
      sourceUrl: "https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends.html",
      sourceDate: "2026",
      heat: 76,
      confidence: "B",
      summary:
        "AI 被用在客服、推薦、內容與決策後，客戶會更在意資料如何使用、AI 是否透明、錯誤由誰負責。",
      whyLeadersCare:
        "品牌信任會成為 AI 產品化的前提，尤其在金融、醫療、教育、媒體與零售。",
      taiwanImpact:
        "台灣服務業若導入 AI 客服或個人化推薦，需要同步設計透明告知與申訴機制。",
      opportunity:
        "開設 AI 時代的顧客信任、品牌風險與服務設計課。",
      signals: ["AI trust 被納入人力與治理討論", "客戶資料使用透明度升高", "AI 內容與決策責任引發品牌風險"],
      actions: ["建立 AI 對客戶使用告知原則", "設計人工介入與申訴流程", "對高風險 AI 場景做品牌風險評估"],
    },
    {
      id: "leadership-pipeline-stress",
      title: "領導者壓力與人才梯隊同時承壓",
      category: "領導力與接班",
      sourceType: "領導力研究",
      sourceName: "DDI Leadership Trends",
      sourceUrl: "https://www.ddi.com/blog/leadership-trends-2026",
      sourceDate: "2025-11",
      heat: 75,
      confidence: "B",
      summary:
        "AI、不確定性、組織扁平化與員工期待改變，讓領導者壓力增加，也讓傳統領導梯隊與接班培養面臨挑戰。",
      whyLeadersCare:
        "領導力不只是個人特質，而是組織能否在不確定中保持判斷、連結與行動的能力。",
      taiwanImpact:
        "企業二代、總經理與中高階主管需要更強的 AI 判讀力、跨代溝通與變革帶人能力。",
      opportunity:
        "開設 AI 時代領導力、企業二代接班與高階團隊心理安全課。",
      signals: ["DDI 提到 human + AI leadership", "領導者 burnout 與 quiet cracking 被關注", "AI fluency 成為領導能力"],
      actions: ["更新領導職能模型", "把 AI 判讀力納入主管培訓", "為高壓主管建立同儕支持與回饋機制"],
    },
    {
      id: "capital-to-india",
      title: "全球投資地圖重估，印度關注度上升",
      category: "全球市場機會",
      sourceType: "CEO調查",
      sourceName: "PwC Global CEO Survey",
      sourceUrl: "https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-global-ceo-survey.html",
      sourceDate: "2026-01-19",
      heat: 72,
      confidence: "A",
      summary:
        "PwC CEO 調查指出美國仍是全球投資首選，但印度投資關注度明顯上升，反映企業在地緣與成長市場間重新配置。",
      whyLeadersCare:
        "全球布局不只是成本考量，也包含市場成長、政策、供應鏈韌性與人才。",
      taiwanImpact:
        "台灣企業若思考 China+1、印度市場或東南亞布局，需要更完整的區域策略與組織能力。",
      opportunity:
        "開設全球布局與印度/東南亞策略判讀課。",
      signals: ["CEO 調查提到印度投資興趣上升", "企業持續分散地緣風險", "成長市場與供應鏈備援重疊"],
      actions: ["盤點區域市場的客戶與人才條件", "用情境比較印度與東南亞布局", "建立海外事業治理框架"],
    },
    {
      id: "private-credit-ai-risk",
      title: "私募信貸與 AI 基建連結值得追蹤",
      category: "金融與資本市場",
      sourceType: "官方/金融機構",
      sourceName: "BIS Quarterly Review",
      sourceUrl: "https://www.bis.org/publ/qtrpdf/r_qt2603.pdf",
      sourceDate: "2026-06",
      heat: 74,
      confidence: "A",
      summary:
        "AI 基礎建設若愈來愈依賴債務與非銀行資金，市場壓力可能透過金融市場、供應商與投資評價回到實體企業。",
      whyLeadersCare:
        "即使非金融企業也需理解客戶、供應商與投資人的融資條件，避免在景氣反轉時承擔過高風險。",
      taiwanImpact:
        "高度投入 AI 供應鏈的企業需要追蹤主要客戶的融資能力與資本市場情緒。",
      opportunity:
        "設計給科技業高階主管的 AI capex 與金融風險課。",
      signals: ["BIS 討論 AI capex 與非銀行資金連結", "市場開始檢視 AI 投資的資金來源", "供應鏈受資本市場情緒影響"],
      actions: ["追蹤客戶融資與信用風險", "建立訂單與現金流壓力測試", "避免過度依賴單一 AI 投資周期"],
    },
    {
      id: "video-executive-learning",
      title: "國際財經 YouTube 成為高階主管趨勢入口",
      category: "內容與學習設計",
      sourceType: "影音媒體",
      sourceName: "Bloomberg Technology / CNBC / Reuters YouTube",
      sourceUrl: "https://www.youtube.com/c/BloombergTech/videos",
      sourceDate: "2026-06",
      heat: 71,
      confidence: "C",
      summary:
        "Bloomberg、CNBC、Reuters 等影音頻道持續用短訪談、CEO 對談與市場解讀傳遞趨勢，成為高階主管快速掃描國際議題的入口。",
      whyLeadersCare:
        "高階主管未必會讀長報告，但會看關鍵訪談。企業學習可以把影音訊號轉成討論題與決策案例。",
      taiwanImpact:
        "台灣領導力課程可建立每週國際影音拆解，把全球訊號轉成台灣企業案例。",
      opportunity:
        "推出 CEO Global Briefing 影音導讀與決策討論課。",
      signals: ["國際財經媒體強化 YouTube 內容", "短影音降低高階主管接觸國際議題門檻", "影音互動可作為熱度弱訊號"],
      actions: ["每週追蹤 10 支高互動影音", "記錄觀看數與留言主題", "把影音轉成 15 分鐘高階會議引導題"],
    },
    {
      id: "economist-ai-economists",
      title: "AI 開始改寫經濟學與政策分析方法",
      category: "策略判讀能力",
      sourceType: "國際財經媒體",
      sourceName: "The Economist",
      sourceUrl: "https://www.economist.com/finance-and-economics/2026/06/15/meet-the-worlds-top-ai-pilled-economists",
      sourceDate: "2026-06-15",
      heat: 70,
      confidence: "B",
      summary:
        "AI 不只改變企業流程，也正在改變經濟學家研究、預測與政策分析方式。領導者的策略判讀能力需要跟著升級。",
      whyLeadersCare:
        "如果政策分析、風險預測與市場研究都被 AI 重塑，高階主管也需要學會用 AI 補強判斷，而不是只依靠舊式報告。",
      taiwanImpact:
        "企業策略部門與高階幕僚可以用 AI 提升情境分析、競品追蹤與風險雷達效率。",
      opportunity:
        "開設 AI for executive intelligence 課，教主管如何用 AI 建立趨勢雷達與決策備忘錄。",
      signals: ["主流財經媒體報導 AI 改變經濟研究", "AI 進入政策與市場分析", "高階幕僚工作被重新定義"],
      actions: ["建立主管自己的 AI research workflow", "讓幕僚用 AI 產出情境簡報初稿", "保留人類覆核與判斷責任"],
    },
    {
      id: "business-innovation-summits",
      title: "國際商業論壇主軸轉向 AI、韌性與創新",
      category: "國際議題雷達",
      sourceType: "國際財經活動",
      sourceName: "The Economist Events / Bloomberg Live / CNBC Events",
      sourceUrl: "https://events.bloomberglive.com/event/BloombergTechSanFrancisco2026/summary",
      sourceDate: "2026",
      heat: 73,
      confidence: "B",
      summary:
        "國際財經活動議程集中在 AI economy、科技創新、CEO 決策、供應鏈、董事會與商業韌性，顯示高階主管學習需求正在重組。",
      whyLeadersCare:
        "活動議程本身是弱訊號集合，可以判讀全球高階主管正在為哪些問題付費、聚集與尋找答案。",
      taiwanImpact:
        "台灣領導力學院可把國際論壇議題轉化成本地高階課程產品，避免只複製本地競品。",
      opportunity:
        "每季推出國際議題快譯課，把 Economist、Bloomberg、CNBC 議程轉成台灣 CEO 案例。",
      signals: ["國際活動主題高度重複 AI、董事會、韌性", "科技與 CEO 議題快速融合", "活動頁可作為課程產品靈感來源"],
      actions: ["每週抓取國際活動議程", "標記高頻關鍵字與講者背景", "比較台灣市場是否已有對應課程"],
    },
  ],
  sources: [
    {
      name: "The Economist",
      type: "國際財經媒體",
      use: "判讀全球經濟、企業策略、AI economy、董事會與商業創新主題。",
      url: "https://www.economist.com/",
    },
    {
      name: "Bloomberg / Bloomberg Live / Bloomberg Technology",
      type: "國際財經媒體與影音",
      use: "追蹤科技、資本市場、CEO 訪談、AI 投資與國際活動議程。",
      url: "https://www.bloomberg.com/",
    },
    {
      name: "CNBC / CNBC Events / CNBC YouTube",
      type: "國際財經媒體與影音",
      use: "追蹤 CEO 對談、科技與市場快訊、商業領袖觀點。",
      url: "https://www.cnbc.com/",
    },
    {
      name: "Reuters / Reuters Events",
      type: "國際新聞與產業活動",
      use: "供應鏈、能源、地緣政治、企業風險與產業活動訊號。",
      url: "https://www.reuters.com/",
    },
    {
      name: "IMF",
      type: "官方/經濟機構",
      use: "全球經濟展望、通膨、地緣政治與金融風險。",
      url: "https://www.imf.org/",
    },
    {
      name: "OECD",
      type: "官方/經濟機構",
      use: "主要經濟體展望、政策風險、能源與供應鏈影響。",
      url: "https://www.oecd.org/",
    },
    {
      name: "World Bank",
      type: "官方/經濟機構",
      use: "全球成長、開發中國家、貿易與金融條件。",
      url: "https://www.worldbank.org/",
    },
    {
      name: "BIS",
      type: "官方/金融機構",
      use: "金融穩定、銀行與非銀行金融、AI 投資與資本市場連動。",
      url: "https://www.bis.org/",
    },
    {
      name: "Stanford AI Index",
      type: "研究機構",
      use: "AI 投資、經濟、人才、政策與技術趨勢的一手數據。",
      url: "https://hai.stanford.edu/ai-index/",
    },
    {
      name: "PwC / Deloitte / McKinsey / DDI",
      type: "顧問/領導力研究",
      use: "CEO 調查、人力資本、AI 落地、領導力與組織變革趨勢。需優先找原始報告。",
      url: "https://www.pwc.com/",
    },
  ],
};

(() => {
  const data = window.LEADER_TREND_DATA;

  data.meta.scope =
    "追蹤全球領導者必看的經營趨勢，來源涵蓋國際財經媒體、官方經濟機構、董事會/CEO調查、供應鏈、AI 研究與歐洲 AI 治理/產業訊號，協助高階主管把外部變化轉成策略、人才與課程產品判斷。";
  data.meta.weekly_thesis =
    "本週雷達改採較大的決策類別，避免單一卡片類別造成篩選破碎。每個類別至少保留四張趨勢卡，並新增 BBC AI Decoded、Bloomberg AI、European Commission、Financial Times 與 Sifted 作為固定追蹤來源。";
  data.sourceStrategy.summary =
    "第一圈採用國際財經媒體與官方/研究機構，第二圈採用高信譽顧問公司、董事會調查與歐洲 AI 治理/產業來源，第三圈觀察 YouTube、社群互動與弱訊號。BBC AI Decoded 與 Bloomberg Technology 用於影音/高階訪談弱訊號，European Commission、Financial Times 與 Sifted 補足歐洲 AI 監管、產業政策與創業生態觀察。台灣學習機構可作為產品對標，不作為宏觀趨勢的一手來源。";

  const trendCategoryMap = {
    "ai-cost-discipline": "AI投資與資本市場",
    "ai-capex-financial-link": "AI投資與資本市場",
    "taiwan-ai-supply-chain": "AI投資與資本市場",
    "private-credit-ai-risk": "AI投資與資本市場",
    "ai-scale-gap": "AI落地與資料治理",
    "agentic-workflow": "AI落地與資料治理",
    "data-before-automation": "AI落地與資料治理",
    "economist-ai-economists": "AI落地與資料治理",
    "ai-trust-disinformation": "AI信任與科技治理",
    "cloud-sovereignty": "AI信任與科技治理",
    "board-ai-cyber": "AI信任與科技治理",
    "cyber-risk-ceo": "AI信任與科技治理",
    "customer-trust-ai": "AI信任與科技治理",
    "middle-east-energy-risk": "全球宏觀與地緣市場",
    "global-growth-downgrade": "全球宏觀與地緣市場",
    "tariff-cyber-pressure": "全球宏觀與地緣市場",
    "capital-to-india": "全球宏觀與地緣市場",
    "supply-chain-bend-not-break": "供應鏈韌性與產業佈局",
    "ai-infra-geopolitics": "供應鏈韌性與產業佈局",
    "human-x-machine": "組織人才與CEO學習",
    "continuous-reinvention": "組織人才與CEO學習",
    "ceo-confidence-down": "組織人才與CEO學習",
    "low-hire-low-fire": "組織人才與CEO學習",
    "value-over-efficiency": "組織人才與CEO學習",
    "leadership-pipeline-stress": "組織人才與CEO學習",
    "video-executive-learning": "組織人才與CEO學習",
    "business-innovation-summits": "組織人才與CEO學習",
  };

  data.trends.forEach((trend) => {
    if (trendCategoryMap[trend.id]) trend.category = trendCategoryMap[trend.id];
  });

  const extraTrends = [
    {
      id: "bbc-ai-decoded-workplace",
      title: "AI 對工作與判斷力的影響成為大眾高階議題",
      category: "AI落地與資料治理",
      sourceType: "國際影音媒體",
      sourceName: "BBC AI Decoded",
      sourceUrl: "https://www.youtube.com/playlist?list=PLS3XGZxi7cBW70Shs01zuQtbGmC2XEeDl",
      sourceDate: "2026",
      heat: 78,
      confidence: "B",
      summary:
        "BBC AI Decoded 以訪談與案例形式持續解釋 AI 對工作、社會、產業與人類判斷的影響，適合作為高階主管趨勢教育的影音弱訊號來源。",
      whyLeadersCare:
        "當 AI 議題從技術圈進入公共媒體，代表員工、客戶與社會期待也會跟著改變。領導者需要用非技術語言解釋 AI 對工作的影響。",
      taiwanImpact:
        "台灣企業推動 AI 時，不只要做工具訓練，也要處理員工對職務重設、能力淘汰與資料使用的焦慮。",
      opportunity:
        "開設 AI Decoded for Leaders 影音導讀課，把國際媒體議題轉成主管可討論的組織案例。",
      signals: ["BBC 將 AI 做成固定影音節目", "節目主題涵蓋工作、倫理、產業與人類判斷", "影音內容可追蹤觀看數與留言作為弱訊號"],
      actions: ["每週追蹤 AI Decoded 主題", "擷取主管可討論的三個問題", "把高互動影片轉成內部學習案例"],
    },
    {
      id: "bloomberg-ai-finance-workflows",
      title: "Bloomberg AI 顯示金融知識工作進入 agent 化",
      category: "AI投資ROI",
      sourceType: "國際財經媒體與產品訊號",
      sourceName: "Bloomberg AI / Bloomberg Technology",
      sourceUrl: "https://professional.bloomberg.com/products/bloomberg-terminal/ai/",
      sourceDate: "2026",
      heat: 83,
      confidence: "B",
      summary:
        "Bloomberg AI 與 Bloomberg Technology 的內容顯示，金融研究、新聞摘要、文件分析與投資流程正在被 AI agent 與可信資料庫重塑。",
      whyLeadersCare:
        "AI 對金融研究的改變，是所有知識工作者的預告。高階主管要理解 AI 如何把研究、判斷、簡報與投資決策流程重組。",
      taiwanImpact:
        "金融業、投資部門、策略幕僚與企業併購團隊都會面臨 AI 研究流程的重新設計。",
      opportunity:
        "開設 AI for Executive Intelligence 課，教主管與幕僚建立可信來源、文件分析與決策備忘錄流程。",
      signals: ["Bloomberg 將 AI 放進金融專業工作流", "AI agent 與資料可信度成為金融場景賣點", "Bloomberg Technology 持續追蹤 AI 對產業與工作影響"],
      actions: ["盤點高階幕僚最耗時的研究任務", "建立可信來源與引用標準", "設計 AI 輔助決策備忘錄模板"],
    },
    {
      id: "eu-ai-office-trustworthy-ai",
      title: "歐盟 AI Office 成為可信 AI 監管與治理觀察核心",
      category: "AI信任與科技治理",
      sourceType: "歐洲官方/監管",
      sourceName: "European AI Office",
      sourceUrl: "https://digital-strategy.ec.europa.eu/en/policies/ai-office",
      sourceDate: "2026",
      heat: 82,
      confidence: "A",
      summary:
        "European AI Office 負責支持可信 AI 發展、AI Act 實施與 GPAI 模型規則，代表歐洲正在把 AI 治理制度化。",
      whyLeadersCare:
        "跨境企業不能只看美國技術速度，也要看歐洲監管如何定義風險、透明度、模型責任與合規成本。",
      taiwanImpact:
        "台灣企業若服務歐洲客戶、出口 AI 相關產品或採用通用 AI 模型，需要更早建立 AI 合規與供應商審查能力。",
      opportunity:
        "開設 EU AI Act 與可信 AI 治理課，協助董事會、法遵、資安與產品主管理解歐洲規則。",
      signals: ["歐盟設立 AI Office", "GPAI 與高風險 AI 成為治理重點", "可信 AI 與商業創新被放在同一政策框架"],
      actions: ["盤點歐洲業務與 AI 使用場景", "建立 AI 供應商審查清單", "把透明度與問責列入 AI 專案審核"],
    },
    {
      id: "eu-ai-continent-industrial-policy",
      title: "歐洲 AI Continent 計畫把 AI 變成產業政策",
      category: "AI基礎建設與資料中心",
      sourceType: "歐洲官方/產業政策",
      sourceName: "European Commission AI Continent",
      sourceUrl: "https://commission.europa.eu/topics/competitiveness/ai-continent_en",
      sourceDate: "2026",
      heat: 84,
      confidence: "A",
      summary:
        "European Commission 的 AI Continent Action Plan 強調 AI factories、AI gigafactories、資料、技能、採用與監管簡化，顯示歐洲正以產業政策補強 AI 競爭力。",
      whyLeadersCare:
        "AI 基礎建設、資料與人才不只是科技投資，而是國家與區域競爭策略。企業全球佈局需看懂政策背後的供應鏈與市場機會。",
      taiwanImpact:
        "台灣 AI 伺服器、半導體、散熱、電力與資料中心供應鏈可能受益於歐洲 AI 基建投資，但也需理解歐盟合規與在地合作要求。",
      opportunity:
        "開設歐洲 AI 產業政策與台灣供應鏈機會課，服務科技製造、資料中心與跨境服務業主管。",
      signals: ["歐洲推動 AI factories 與 gigafactories", "政策同時談基礎建設、資料與技能", "歐洲把 AI 競爭力與自主性連結"],
      actions: ["追蹤歐洲 AI 基建投資地圖", "評估台灣供應鏈可切入環節", "建立歐盟合規與在地夥伴清單"],
    },
    {
      id: "ft-ai-power-dynamics",
      title: "FT AI 觀察強調 AI 正改變全球商業權力結構",
      category: "AI投資ROI",
      sourceType: "歐洲國際財經媒體",
      sourceName: "Financial Times Artificial Intelligence",
      sourceUrl: "https://www.ft.com/artificial-intelligence",
      sourceDate: "2026",
      heat: 80,
      confidence: "B",
      summary:
        "Financial Times 的 AI 專區持續追蹤 AI 如何影響商業、金融、科技平台、工作與全球權力結構，適合作為歐洲觀點的高階財經來源。",
      whyLeadersCare:
        "FT 的優勢是把 AI 放在金融市場、企業治理與全球權力變化中觀察，能補足純科技媒體容易忽略的資本與制度面。",
      taiwanImpact:
        "台灣企業若只看美國科技新聞，可能低估歐洲與全球資本市場對 AI 投資、風險與合規的評價差異。",
      opportunity:
        "設計 FT AI Briefing 讀書會式高階課，把 AI 新聞轉成董事會與投資決策討論題。",
      signals: ["FT 建立 AI 專題頁", "AI 被放進商業、金融與權力結構脈絡", "歐洲財經視角補足美國科技敘事"],
      actions: ["每週追蹤 FT AI 主題", "把 AI 新聞標記成資本、治理、人才、產業四類", "整理高階主管可用的三分鐘 briefing"],
    },
    {
      id: "sifted-europe-ai-startups",
      title: "歐洲 AI 新創生態成為產業轉型早期訊號",
      category: "AI基礎建設與資料中心",
      sourceType: "歐洲科技媒體",
      sourceName: "Sifted AI 100",
      sourceUrl: "https://sifted.eu/rankings/ai-100-2025",
      sourceDate: "2025",
      heat: 77,
      confidence: "B",
      summary:
        "Sifted AI 100 追蹤歐洲 AI 新創，涵蓋材料、機器人、生技、企業工具與防務，能作為歐洲 AI 應用與產業化方向的早期雷達。",
      whyLeadersCare:
        "新創生態比大型企業更早暴露新用例與資本流向。高階主管可以從新創題目判斷未來合作、投資與競爭方向。",
      taiwanImpact:
        "台灣企業可從歐洲 AI 新創觀察工業、材料、機器人、醫療與防務應用，尋找合作與供應鏈機會。",
      opportunity:
        "開設 Europe AI Startup Radar 課，協助高階主管看懂新創榜單背後的產業機會。",
      signals: ["Sifted 建立歐洲 AI 100 排名", "新創主題橫跨深科技與企業應用", "歐洲 AI 生態可補足美國平台視角"],
      actions: ["每季追蹤歐洲 AI 新創榜單", "標記與台灣供應鏈可合作的場景", "建立潛在合作/投資觀察名單"],
    },
  ];

  const existingTrendIds = new Set(data.trends.map((trend) => trend.id));
  extraTrends.forEach((trend) => {
    if (!existingTrendIds.has(trend.id)) data.trends.push(trend);
  });

  const recommendationCategoryMap = {
    "course-ai-capital-roi": "AI投資與資本市場",
    "course-geopolitics-energy": "全球宏觀與地緣市場",
    "course-supply-chain-resilience": "供應鏈韌性與產業佈局",
    "course-ai-board-trust": "AI信任與科技治理",
    "course-human-ai-work": "組織人才與CEO學習",
    "course-ceo-risk-radar": "組織人才與CEO學習",
  };

  const recommendationTrendAdditions = {
    "course-ai-capital-roi": ["bloomberg-ai-finance-workflows", "ft-ai-power-dynamics"],
    "course-supply-chain-resilience": ["eu-ai-continent-industrial-policy", "sifted-europe-ai-startups"],
    "course-ai-board-trust": ["eu-ai-office-trustworthy-ai"],
    "course-human-ai-work": ["bbc-ai-decoded-workplace"],
  };

  data.topRecommendations.forEach((course) => {
    if (recommendationCategoryMap[course.id]) course.category = recommendationCategoryMap[course.id];
    const additions = recommendationTrendAdditions[course.id] || [];
    course.trendIds = [...new Set([...(course.trendIds || []), ...additions])];
  });

  const extraSources = [
    {
      name: "BBC AI Decoded",
      type: "國際影音媒體",
      use: "追蹤 AI 對工作、社會、產業與人類判斷的主流敘事與高互動影音弱訊號。",
      url: "https://www.youtube.com/playlist?list=PLS3XGZxi7cBW70Shs01zuQtbGmC2XEeDl",
    },
    {
      name: "Bloomberg AI / Bloomberg Technology",
      type: "國際財經媒體與 AI 產品訊號",
      use: "追蹤金融知識工作、AI agent、研究流程、資本市場與科技產業對 AI 的採用方式。",
      url: "https://professional.bloomberg.com/products/bloomberg-terminal/ai/",
    },
    {
      name: "European Commission AI Office / AI Continent",
      type: "歐洲官方/監管與產業政策",
      use: "追蹤 EU AI Act、可信 AI、GPAI、AI factories、資料、技能與歐洲 AI 產業政策。",
      url: "https://digital-strategy.ec.europa.eu/en/policies/ai-office",
    },
    {
      name: "Financial Times Artificial Intelligence",
      type: "歐洲國際財經媒體",
      use: "從歐洲財經角度追蹤 AI 對商業、金融、全球權力結構、工作與科技平台的影響。",
      url: "https://www.ft.com/artificial-intelligence",
    },
    {
      name: "Sifted / Sifted AI 100",
      type: "歐洲科技媒體與新創雷達",
      use: "追蹤歐洲 AI 新創、投資、產業應用與早期創新訊號。",
      url: "https://sifted.eu/rankings/ai-100-2025",
    },
  ];

  const existingSourceNames = new Set(data.sources.map((source) => source.name));
  extraSources.forEach((source) => {
    if (!existingSourceNames.has(source.name)) data.sources.push(source);
  });
})();

(() => {
  const data = window.LEADER_TREND_DATA;
  const trendById = new Map(data.trends.map((trend) => [trend.id, trend]));

  data.meta.generated_at = "2026-06-27";
  data.meta.next_review = "2026-07-04 07:30 Asia/Taipei";
  data.meta.weekly_thesis =
    "本週全球領導者視野的重點，從『AI 是否有用』轉向『AI 會把資本、能源、人才、資安與供應鏈重新綁在一起』。Goldman Sachs、World Bank、OECD、European Commission、The Conference Board、Deloitte 與 Reuters/CNBC/Bloomberg/BBC 等訊號共同指向：CEO 要把 AI 當成實體經濟與治理議題，而不是單純數位工具。";
  data.meta.recommendation_note =
    "本週六個學習產品機會維持為下游輸出：先服務 Joyce 的全球領導者判讀，再把高熱度議題轉成高階主管可討論、可演練、可行動的課程。";

  const finalCategoryAdds = {
    "ai-physical-economy-buildout": ["AI投資ROI", "AI成本治理", "AI基礎建設與資料中心", "資本市場與金融風險", "AI供應鏈與半導體", "供應鏈韌性"],
    "ai-power-water-bottleneck": ["AI基礎建設與資料中心", "地緣政治與能源風險", "供應鏈韌性", "AI供應鏈與半導體", "歐洲AI產業政策"],
    "eu-gpai-compliance-deadline": ["AI信任與透明度", "董事會AI治理", "資安與數位韌性", "EU AI監管與合規", "歐洲AI產業政策"],
    "ceo-cyber-ai-risk-q2": ["董事會AI治理", "資安與數位韌性", "CEO經營節奏與風險雷達", "AI信任與透明度", "關稅貿易與區域布局"],
    "ai-white-collar-work-reshaping": ["未來工作與人機協作", "人才重配置與再學習", "領導力接班與心理安全", "高階學習產品與內容設計", "AI規模化落地"],
    "trade-supply-chain-enterprise-risk": ["供應鏈韌性", "關稅貿易與區域布局", "全球低成長與通膨", "CEO經營節奏與風險雷達", "高階學習產品與內容設計"],
  };
  Object.entries(finalCategoryAdds).forEach(([trendId, categories]) => {
    const trend = trendById.get(trendId);
    if (!trend) return;
    trend.categories = [...new Set([...(trend.categories || []), ...categories])];
  });

  data.weeklyMustReads = [
    {
      id: "must-ai-physical-economy",
      rank: 1,
      trendId: "ai-physical-economy-buildout",
      headline: "AI 正從數位工具變成實體經濟投資循環",
      globalSignal:
        "根據 Goldman Sachs 研究與 6 月 26 日 Axios 報導，AI 基礎建設投資已連動晶片、資料中心、電力與工業場域，下一波競爭會更貼近工廠、公用事業與能源系統。",
      whyLeadersCare:
        "管理意義是：CEO 不能只問公司有沒有導入 AI，而要問 AI 會改變哪一段資本配置、產能、供應鏈與營運模式。",
      taiwanMeaning:
        "台灣企業一方面可受惠於 AI 伺服器、散熱、電力與半導體需求，另一方面也要承擔客戶集中與投資週期波動。",
      joyceQuestion: "台灣企業在 AI 實體經濟中，應該只是接單者，還是能成為策略型供應與解決方案夥伴？",
      keepWatching: "Goldman AI capex、hyperscaler guidance、資料中心投資、電力/散熱供應鏈與工業 AI 案例。",
    },
    {
      id: "must-ai-resource-constraint",
      rank: 2,
      trendId: "ai-power-water-bottleneck",
      headline: "AI 基礎建設的瓶頸正在從晶片擴大到能源、水與社會接受度",
      globalSignal:
        "根據來源顯示，資料中心的用水、用電、冷卻、地方社群反應與專案許可正在成為 AI 擴張限制條件。",
      whyLeadersCare:
        "管理意義是：AI 投資案必須同時通過技術、財務、ESG、能源與地方治理檢驗。",
      taiwanMeaning:
        "台灣若要承接 AI 基建機會，電力韌性、水資源管理與地方溝通會直接影響投資與產業可信度。",
      joyceQuestion: "當 AI 成長需要大量能源與水，企業要如何把永續從形象議題變成基建治理能力？",
      keepWatching: "資料中心用電/用水揭露、電網瓶頸、冷卻技術、地方反對聲量與能源合作案。",
    },
    {
      id: "must-eu-gpai",
      rank: 3,
      trendId: "eu-gpai-compliance-deadline",
      headline: "歐盟 GPAI 合規將把 AI 供應商管理推上董事會議程",
      globalSignal:
        "European Commission AI Office 的 GPAI Code of Practice 將透明度、著作權、安全與系統性風險變成可落地的模型治理框架；AI Act 2026 年 8 月全面適用時點逼近。",
      whyLeadersCare:
        "管理意義是：企業採購 AI 模型與工具時，不能只看功能與價格，還要看文件、責任、資料來源、風險分類與跨境合規。",
      taiwanMeaning:
        "台灣企業若服務歐洲市場或在產品中嵌入 AI，需及早建立 AI 供應商問卷、模型文件與風險審查流程。",
      joyceQuestion: "可信 AI 對台灣企業是合規成本，還是進入歐洲客戶供應鏈的信任門票？",
      keepWatching: "GPAI Code 簽署者、EU AI Act 適用時程、模型文件要求、歐洲客戶的 AI 稽核條款。",
    },
    {
      id: "must-ceo-cyber-ai",
      rank: 4,
      trendId: "ceo-cyber-ai-risk-q2",
      headline: "CEO 信心下滑，資安、AI 與地緣風險開始同桌討論",
      globalSignal:
        "The Conference Board Q2 2026 CEO Confidence 降至 47；資安風險升溫，地緣政治與 AI/新科技仍是高階風險。",
      whyLeadersCare:
        "管理意義是：資安、AI 與地緣政治不再是三個部門議題，而是董事會與 CEO 需要共同治理的營運不中斷風險。",
      taiwanMeaning:
        "台灣關鍵供應鏈企業會面臨國際客戶更嚴格的資安、資料與 AI 治理要求。",
      joyceQuestion: "董事會現在問 AI，應該先問效率，還是先問責任、風險與可復原能力？",
      keepWatching: "CEO Confidence、資安預算、地緣衝突下的 cyber warning、AI governance 與供應鏈稽核。",
    },
    {
      id: "must-white-collar-redesign",
      rank: 5,
      trendId: "ai-white-collar-work-reshaping",
      headline: "白領工作進入重塑期，高階主管要設計新職務而非只買工具",
      globalSignal:
        "AWS CEO 訪談、Deloitte Human Capital Trends 與 BBC AI Decoded 共同指向：AI 將重寫工作期待、人才培育與人機互動，但企業多數尚未具備成熟設計能力。",
      whyLeadersCare:
        "管理意義是：AI 導入若沒有新職務、新流程與新能力標準，會讓員工焦慮、主管失焦，並產生低品質自動化。",
      taiwanMeaning:
        "台灣企業的人才短缺與接班壓力會讓 AI fluency、主管帶人與新人培育變成同一個問題。",
      joyceQuestion: "企業真正需要的 AI 課，是工具操作，還是重新設計工作與人才梯隊？",
      keepWatching: "白領職務重寫、初階人才招聘、AI fluency、Deloitte human-AI interaction、BBC AI 工作議題。",
    },
    {
      id: "must-supply-chain-risk",
      rank: 6,
      trendId: "trade-supply-chain-enterprise-risk",
      headline: "供應鏈從成本中心升級為企業風險與價值創造能力",
      globalSignal:
        "Reuters Events 與 Thomson Reuters 供應鏈/貿易研究顯示，關稅、貿易合規、資料、文件與跨部門協作正在重塑供應鏈主管的策略角色。",
      whyLeadersCare:
        "管理意義是：供應鏈可靠度會影響毛利、客戶信任、合規與現金流，高階主管需要把它放進企業風險雷達。",
      taiwanMeaning:
        "台灣製造與出口企業若能證明供應鏈透明、合規與韌性，會更容易成為國際客戶的策略夥伴。",
      joyceQuestion: "台灣企業如何把供應鏈可靠度，轉成客戶願意付費的高階價值主張？",
      keepWatching: "Reuters supply chain agenda、關稅文件要求、貿易合規成本、供應鏈資料治理與區域化布局。",
    },
  ];

  data.perspectiveNote = {
    title: "本週判讀：AI 正把公司治理拉回實體世界",
    summary:
      "本週最重要的管理意義是：AI 已不只是數位化或自動化，它正在要求領導者重新理解資本、能源、人才、風險與供應鏈。Joyce 本週可把觀點聚焦在『AI 如何改變 CEO 的實體經營假設』，而不是只談 AI 工具或課程設計。",
    notes: [
      "根據來源顯示，AI capex、資料中心、能源與水資源正在成為董事會層級議題；管理意義是 AI 投資必須有實體基礎建設視角。",
      "EU GPAI 與 AI Act 時程提醒企業：可信 AI 不是抽象價值，而會進入採購、產品上市、跨境銷售與供應商管理。",
      "CEO Confidence 下滑與資安風險升溫，表示高階團隊需要把 AI、cyber、地緣政治與供應鏈放進同一個風險節奏。",
      "AI 對白領工作的影響，重點不是取代多少人，而是企業有沒有能力重寫職務、流程、責任與新人培育方式。",
      "供應鏈韌性正在從成本控制轉為客戶信任與價值創造，這是台灣 B2B 企業可切入的高階敘事。",
    ],
    discussionPrompts: [
      "如果 AI 是實體經濟投資循環，台灣企業應該在哪個環節建立不可替代性？",
      "董事會是否已把 AI 模型供應商、資料中心能源、資安與地緣政治放進同一份風險報告？",
      "企業導入 AI 後，第一個需要重寫的是工具清單，還是職務設計、績效與人才培育？",
      "供應鏈可靠度如何從內部成本能力，轉成對客戶可銷售的策略價值？",
    ],
    writingAngles: [
      "AI 的下一戰，不在螢幕裡，而在電力、水、工廠與供應鏈裡",
      "可信 AI 會成為台灣企業進入歐洲市場的新門票",
      "CEO 不能再把 AI、資安與供應鏈分開管理",
      "白領工作不是被 AI 消滅，而是被迫重新定義價值",
    ],
  };
})();

(() => {
  const data = window.LEADER_TREND_DATA;

  data.meta.generated_at = "2026-06-27";
  data.meta.next_review = "2026-07-04 07:30 Asia/Taipei";
  data.meta.weekly_thesis =
    "本週全球領導者視野的重點，從『AI 是否有用』轉向『AI 會把資本、能源、人才、資安與供應鏈重新綁在一起』。Goldman Sachs、World Bank、OECD、European Commission、The Conference Board、Deloitte 與 Reuters/CNBC/Bloomberg/BBC 等訊號共同指向：CEO 要把 AI 當成實體經濟與治理議題，而不是單純數位工具。";
  data.meta.recommendation_note =
    "本週六個學習產品機會維持為下游輸出：先服務 Joyce 的全球領導者判讀，再把高熱度議題轉成高階主管可討論、可演練、可行動的課程。";

  const weeklyTrendUpdates = [
    {
      id: "ai-physical-economy-buildout",
      title: "AI 下一波競爭移向實體經濟與基礎建設",
      category: "AI投資ROI",
      sourceType: "投資研究/國際財經媒體",
      sourceName: "Goldman Sachs / Axios",
      sourceUrl: "https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out",
      sourceDate: "2026-06-26",
      heat: 97,
      confidence: "A",
      summary:
        "Goldman Sachs 的 AI build-out 研究估算，2026 至 2031 年 AI 基礎建設累計資本支出可達約 7.6 兆美元，投資範圍包含晶片、資料中心、電力與支援基礎建設。Axios 6 月 26 日進一步指出，AI 下一波機會正從純數位應用走向工廠、礦業、公用事業、油氣與其他實體經濟場景。",
      whyLeadersCare:
        "這代表 AI 不再只是 CIO 的工具導入題，而是 CEO、CFO、COO 與董事會共同面對的資本配置、產業重組與營運升級題。",
      taiwanImpact:
        "台灣半導體、伺服器、散熱、電力、工業自動化與製造服務業，都可能受惠於 AI 實體基建；但同時要管理客戶集中、產能週期、能源約束與投資回收風險。",
      opportunity:
        "推出『AI 實體經濟投資地圖』高階課，協助企業主判斷 AI 基建、工業 AI 與台灣供應鏈角色。",
      signals: ["Goldman Sachs 估算 2026-2031 AI build-out 累計 capex 約 7.6 兆美元", "AI 投資從模型與應用延伸到電力、資料中心與工業場域", "董事會開始需要理解 AI 的實體資本與供應鏈含義"],
      actions: ["建立 AI 實體基建曝險表", "檢查公司是否只是 AI 使用者，或也能成為 AI 實體經濟供應者", "把 AI 投資案分成數位流程、實體產能與基礎建設三類管理"],
    },
    {
      id: "ai-power-water-bottleneck",
      title: "資料中心的電力與水資源成為 AI 成長瓶頸",
      category: "AI基礎建設與資料中心",
      sourceType: "國際財經媒體/能源訊號",
      sourceName: "Axios / Reuters / Bloomberg Technology",
      sourceUrl: "https://www.axios.com/2026/06/25/water-energy-ai-flashpoint",
      sourceDate: "2026-06-25",
      heat: 92,
      confidence: "B",
      summary:
        "AI 資料中心擴張使電力、水資源、冷卻、電網與地方社群接受度成為新的限制條件。水資源已和能源一樣成為 AI 基礎建設的公共議題，資料中心專案也持續面臨電力、許可與社會接受度壓力。",
      whyLeadersCare:
        "AI 能否規模化，不只取決於模型與晶片，也取決於能源、水、土地、社群溝通與基礎建設治理。CEO 需要把 ESG、營運不中斷與 AI 投資放在同一張圖上看。",
      taiwanImpact:
        "台灣若要承接更多 AI 供應鏈與資料中心相關需求，電力穩定、用水、散熱與地方溝通會直接影響投資可行性。",
      opportunity:
        "開設『AI 基礎建設、能源與永續治理』課，服務科技製造、資料中心、電力與 ESG 決策者。",
      signals: ["AI 資料中心用水與用電受到國際媒體關注", "大型科技公司強調回收水、補水與冷卻效率", "地方社群對資料中心能源、水與噪音更敏感"],
      actions: ["把 AI 投資案加入能源與水資源壓力測試", "要求供應商揭露資料中心能源與用水策略", "把地方溝通納入大型基建專案時程"],
    },
    {
      id: "eu-gpai-compliance-deadline",
      title: "GPAI 合規從政策討論進入供應商管理",
      category: "EU AI監管與合規",
      sourceType: "歐洲官方/監管",
      sourceName: "European Commission AI Office",
      sourceUrl: "https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai",
      sourceDate: "2026-06-27",
      heat: 90,
      confidence: "A",
      summary:
        "European Commission 的 GPAI Code of Practice 已成為通用 AI 模型供應商履行 AI Act 透明度、著作權、安全與系統性風險義務的重要工具。AI Act 將於 2026 年 8 月 2 日全面適用，跨境企業需要把 AI 模型與供應商合規納入正式治理。",
      whyLeadersCare:
        "AI 合規不再只是法務閱讀政策，而會影響採購、產品設計、資料治理、模型選擇、客戶承諾與董事會問責。",
      taiwanImpact:
        "台灣企業若服務歐洲客戶、在產品中嵌入 AI，或採用國際模型供應商，需建立模型來源、文件、風險分類與供應商合規檢查。",
      opportunity:
        "推出『EU AI Act 與 GPAI 供應商治理』董事會/法遵/產品主管短課。",
      signals: ["GPAI Code of Practice 涵蓋透明度、著作權與安全章節", "多家國際模型與科技供應商已列入簽署名單", "AI Act 2026 年 8 月全面適用期限逼近"],
      actions: ["盤點目前使用的通用 AI 模型與供應商", "建立 AI 供應商問卷與文件保存制度", "把 AI 合規納入產品上市與跨境銷售檢查點"],
    },
    {
      id: "ceo-cyber-ai-risk-q2",
      title: "CEO 將資安、AI 與地緣風險視為同一組經營壓力",
      category: "董事會AI治理",
      sourceType: "CEO調查",
      sourceName: "The Conference Board",
      sourceUrl: "https://www.conference-board.org/topics/CEO-Confidence/",
      sourceDate: "2026-05-28",
      heat: 91,
      confidence: "A",
      summary:
        "The Conference Board Q2 2026 CEO Confidence 顯示，CEO 信心從 Q1 的 59 降至 Q2 的 47；資安風險相較 Q1 更受關注，地緣政治與 AI/新科技仍是企業高層主要風險。",
      whyLeadersCare:
        "AI 會擴大攻擊面、資料外洩與錯誤決策速度；地緣政治也可能提高資安攻擊與供應鏈中斷風險。CEO 不能把這三件事分給不同部門各自處理。",
      taiwanImpact:
        "台灣科技供應鏈、金融、醫療與上市櫃公司需要把資安成熟度、AI 治理與客戶稽核要求放進董事會節奏。",
      opportunity:
        "強化『AI 信任與董事會治理』課，加入 Q2 CEO 風險雷達、資安預算與危機桌上演練。",
      signals: ["CEO Confidence 跌破 50", "資安風險在 Q2 明顯升溫", "地緣政治與 AI/新科技仍列高階風險"],
      actions: ["將 AI、資安、地緣風險合併成董事會季度議題", "建立 CEO/CISO/CIO/法遵共同風險儀表板", "用情境演練檢查資料外洩、AI 錯誤與供應鏈攻擊的聯動"],
    },
    {
      id: "ai-white-collar-work-reshaping",
      title: "白領工作不是消失，而是角色期待被快速重寫",
      category: "未來工作與人機協作",
      sourceType: "企業領袖訪談/組織研究",
      sourceName: "AWS CEO interview / Deloitte Human Capital Trends / BBC AI Decoded",
      sourceUrl: "https://www.deloitte.com/us/en/insights/topics/talent/human-capital-trends/2026/human-ai-interaction-design.html",
      sourceDate: "2026-06-25",
      heat: 88,
      confidence: "B",
      summary:
        "AWS CEO 近期談到 AI 可能改變約半數白領工作，但不等於全面消滅職位；Deloitte 2026 Human Capital Trends 則指出，66% 領導者認為有意識地設計人機互動對成功重要，但只有 6% 認為自己正在領先。",
      whyLeadersCare:
        "真正的管理問題不是裁不裁員，而是如何重寫職務、晉升、學習、績效與新人培育。領導者若沒有新工作設計，AI 只會造成焦慮與低品質自動化。",
      taiwanImpact:
        "台灣企業的人才短缺、接班與新人訓練壓力會被 AI 放大；企業需要把 AI fluency 納入主管與新進人才共同能力。",
      opportunity:
        "把『人機協作的組織再設計』課加入職務重寫、初階人才培養與 AI fluency 評量工具。",
      signals: ["企業領袖開始用『工作重塑』而非『全面取代』描述 AI", "Deloitte 指出人機互動設計能力落差", "BBC AI Decoded 類影音持續把 AI 工作議題推向大眾"],
      actions: ["選三個白領流程重寫職務期待", "更新新人訓練與主管職能模型", "建立 AI 使用的品質、責任與學習標準"],
    },
    {
      id: "trade-supply-chain-enterprise-risk",
      title: "供應鏈可靠度重新升級為企業風險與策略夥伴議題",
      category: "供應鏈韌性",
      sourceType: "產業研究/活動訊號",
      sourceName: "Reuters Events / Thomson Reuters",
      sourceUrl: "https://events.reutersevents.com/supply-chain/usa",
      sourceDate: "2026-06-27",
      heat: 86,
      confidence: "B",
      summary:
        "Reuters Events Supply Chain USA 持續把供應鏈定位為由高階主管共同解題的韌性與價值創造議題；Thomson Reuters 2026 trade research 也指出，供應鏈管理已成為貿易專業人士最主要的策略優先事項，關稅與貿易複雜度使供應鏈從成本中心轉為企業風險與策略夥伴。",
      whyLeadersCare:
        "供應鏈不再只是採購與物流效率，而是影響毛利、合規、客戶承諾、現金流、地緣布局與企業信任的高階決策能力。",
      taiwanImpact:
        "台灣製造與出口企業若能提供更透明、更有韌性的供應鏈服務，會從代工供應商升級為客戶策略夥伴。",
      opportunity:
        "把『韌性供應鏈再設計』課加入關稅、貿易合規、文件治理與跨部門戰情會議模組。",
      signals: ["Reuters Events 主打 people and data before AI and automation", "貿易與供應鏈研究指向關稅、文件與合規壓力", "供應鏈可靠度被高階主管視為企業價值創造題"],
      actions: ["建立關稅與貿易合規儀表板", "把供應鏈可靠度納入客戶價值主張", "讓業務、財務、法務與供應鏈共同參與風險會議"],
    },
  ];

  const trendById = new Map(data.trends.map((trend) => [trend.id, trend]));
  weeklyTrendUpdates.forEach((trend) => {
    if (trendById.has(trend.id)) {
      Object.assign(trendById.get(trend.id), trend);
    } else {
      data.trends.push(trend);
      trendById.set(trend.id, trend);
    }
  });

  const existingUpdates = {
    "ai-cost-discipline": { heat: 97, sourceDate: "2026-06-26" },
    "ai-capex-financial-link": { heat: 96, sourceDate: "2026-06" },
    "middle-east-energy-risk": { heat: 94, sourceDate: "2026-06-27" },
    "global-growth-downgrade": { heat: 89, sourceDate: "2026-06-11" },
    "board-ai-cyber": { heat: 90, sourceDate: "2026-05-28" },
    "human-x-machine": { heat: 89, sourceDate: "2026-06-25" },
    "supply-chain-bend-not-break": { heat: 88, sourceDate: "2026-06-27" },
    "eu-ai-office-trustworthy-ai": { heat: 88, sourceDate: "2026-06-27" },
    "eu-ai-continent-industrial-policy": { heat: 87, sourceDate: "2026-06-27" },
  };
  Object.entries(existingUpdates).forEach(([id, update]) => {
    if (trendById.has(id)) Object.assign(trendById.get(id), update);
  });

  const sourceUpdates = [
    {
      name: "Goldman Sachs Research",
      type: "投資研究",
      use: "追蹤 AI 基礎建設 capex、資料中心、電力、私募信貸與實體經濟投資連動。",
      url: "https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out",
    },
    {
      name: "Axios AI and infrastructure signals",
      type: "國際商業媒體",
      use: "補捉 AI 實體經濟、資料中心電力/水資源與公共接受度的近期商業訊號。",
      url: "https://www.axios.com/technology/artificial-intelligence",
    },
    {
      name: "Thomson Reuters trade and supply chain research",
      type: "貿易/供應鏈研究",
      use: "追蹤關稅、貿易合規、供應鏈文件治理與企業風險升級。",
      url: "https://tax.thomsonreuters.com/blog/2026s-supply-chain-challenge-confronting-complexity-and-disruption-in-global-trade-tri/",
    },
  ];
  const existingSourceNames = new Set(data.sources.map((source) => source.name));
  sourceUpdates.forEach((source) => {
    if (!existingSourceNames.has(source.name)) data.sources.push(source);
  });

  const addCategories = (trendId, categories) => {
    const trend = trendById.get(trendId);
    if (!trend) return;
    trend.categories = [...new Set([...(trend.categories || []), ...categories])];
  };

  addCategories("ai-physical-economy-buildout", [
    "AI投資ROI",
    "AI成本治理",
    "AI基礎建設與資料中心",
    "資本市場與金融風險",
    "AI供應鏈與半導體",
    "供應鏈韌性",
  ]);
  addCategories("ai-power-water-bottleneck", [
    "AI基礎建設與資料中心",
    "地緣政治與能源風險",
    "供應鏈韌性",
    "AI供應鏈與半導體",
    "歐洲AI產業政策",
  ]);
  addCategories("eu-gpai-compliance-deadline", [
    "AI信任與透明度",
    "董事會AI治理",
    "資安與數位韌性",
    "EU AI監管與合規",
    "歐洲AI產業政策",
  ]);
  addCategories("ceo-cyber-ai-risk-q2", [
    "董事會AI治理",
    "資安與數位韌性",
    "CEO經營節奏與風險雷達",
    "AI信任與透明度",
    "關稅貿易與區域布局",
  ]);
  addCategories("ai-white-collar-work-reshaping", [
    "未來工作與人機協作",
    "人才重配置與再學習",
    "領導力接班與心理安全",
    "高階學習產品與內容設計",
    "AI規模化落地",
  ]);
  addCategories("trade-supply-chain-enterprise-risk", [
    "供應鏈韌性",
    "關稅貿易與區域布局",
    "全球低成長與通膨",
    "CEO經營節奏與風險雷達",
    "高階學習產品與內容設計",
  ]);

  data.weeklyMustReads = [
    {
      id: "must-ai-physical-economy",
      rank: 1,
      trendId: "ai-physical-economy-buildout",
      headline: "AI 正從數位工具變成實體經濟投資循環",
      globalSignal:
        "根據 Goldman Sachs 研究與 6 月 26 日 Axios 報導，AI 基礎建設投資已連動晶片、資料中心、電力與工業場域，下一波競爭會更貼近工廠、公用事業與能源系統。",
      whyLeadersCare:
        "管理意義是：CEO 不能只問公司有沒有導入 AI，而要問 AI 會改變哪一段資本配置、產能、供應鏈與營運模式。",
      taiwanMeaning:
        "台灣企業一方面可受惠於 AI 伺服器、散熱、電力與半導體需求，另一方面也要承擔客戶集中與投資週期波動。",
      joyceQuestion: "台灣企業在 AI 實體經濟中，應該只是接單者，還是能成為策略型供應與解決方案夥伴？",
      keepWatching: "Goldman AI capex、hyperscaler guidance、資料中心投資、電力/散熱供應鏈與工業 AI 案例。",
    },
    {
      id: "must-ai-resource-constraint",
      rank: 2,
      trendId: "ai-power-water-bottleneck",
      headline: "AI 基礎建設的瓶頸正在從晶片擴大到能源、水與社會接受度",
      globalSignal:
        "根據來源顯示，資料中心的用水、用電、冷卻、地方社群反應與專案許可正在成為 AI 擴張限制條件。",
      whyLeadersCare:
        "管理意義是：AI 投資案必須同時通過技術、財務、ESG、能源與地方治理檢驗。",
      taiwanMeaning:
        "台灣若要承接 AI 基建機會，電力韌性、水資源管理與地方溝通會直接影響投資與產業可信度。",
      joyceQuestion: "當 AI 成長需要大量能源與水，企業要如何把永續從形象議題變成基建治理能力？",
      keepWatching: "資料中心用電/用水揭露、電網瓶頸、冷卻技術、地方反對聲量與能源合作案。",
    },
    {
      id: "must-eu-gpai",
      rank: 3,
      trendId: "eu-gpai-compliance-deadline",
      headline: "歐盟 GPAI 合規將把 AI 供應商管理推上董事會議程",
      globalSignal:
        "European Commission AI Office 的 GPAI Code of Practice 將透明度、著作權、安全與系統性風險變成可落地的模型治理框架；AI Act 2026 年 8 月全面適用時點逼近。",
      whyLeadersCare:
        "管理意義是：企業採購 AI 模型與工具時，不能只看功能與價格，還要看文件、責任、資料來源、風險分類與跨境合規。",
      taiwanMeaning:
        "台灣企業若服務歐洲市場或在產品中嵌入 AI，需及早建立 AI 供應商問卷、模型文件與風險審查流程。",
      joyceQuestion: "可信 AI 對台灣企業是合規成本，還是進入歐洲客戶供應鏈的信任門票？",
      keepWatching: "GPAI Code 簽署者、EU AI Act 適用時程、模型文件要求、歐洲客戶的 AI 稽核條款。",
    },
    {
      id: "must-ceo-cyber-ai",
      rank: 4,
      trendId: "ceo-cyber-ai-risk-q2",
      headline: "CEO 信心下滑，資安、AI 與地緣風險開始同桌討論",
      globalSignal:
        "The Conference Board Q2 2026 CEO Confidence 降至 47；資安風險升溫，地緣政治與 AI/新科技仍是高階風險。",
      whyLeadersCare:
        "管理意義是：資安、AI 與地緣政治不再是三個部門議題，而是董事會與 CEO 需要共同治理的營運不中斷風險。",
      taiwanMeaning:
        "台灣關鍵供應鏈企業會面臨國際客戶更嚴格的資安、資料與 AI 治理要求。",
      joyceQuestion: "董事會現在問 AI，應該先問效率，還是先問責任、風險與可復原能力？",
      keepWatching: "CEO Confidence、資安預算、地緣衝突下的 cyber warning、AI governance 與供應鏈稽核。",
    },
    {
      id: "must-white-collar-redesign",
      rank: 5,
      trendId: "ai-white-collar-work-reshaping",
      headline: "白領工作進入重塑期，高階主管要設計新職務而非只買工具",
      globalSignal:
        "AWS CEO 訪談、Deloitte Human Capital Trends 與 BBC AI Decoded 共同指向：AI 將重寫工作期待、人才培育與人機互動，但企業多數尚未具備成熟設計能力。",
      whyLeadersCare:
        "管理意義是：AI 導入若沒有新職務、新流程與新能力標準，會讓員工焦慮、主管失焦，並產生低品質自動化。",
      taiwanMeaning:
        "台灣企業的人才短缺與接班壓力會讓 AI fluency、主管帶人與新人培育變成同一個問題。",
      joyceQuestion: "企業真正需要的 AI 課，是工具操作，還是重新設計工作與人才梯隊？",
      keepWatching: "白領職務重寫、初階人才招聘、AI fluency、Deloitte human-AI interaction、BBC AI 工作議題。",
    },
    {
      id: "must-supply-chain-risk",
      rank: 6,
      trendId: "trade-supply-chain-enterprise-risk",
      headline: "供應鏈從成本中心升級為企業風險與價值創造能力",
      globalSignal:
        "Reuters Events 與 Thomson Reuters 供應鏈/貿易研究顯示，關稅、貿易合規、資料、文件與跨部門協作正在重塑供應鏈主管的策略角色。",
      whyLeadersCare:
        "管理意義是：供應鏈可靠度會影響毛利、客戶信任、合規與現金流，高階主管需要把它放進企業風險雷達。",
      taiwanMeaning:
        "台灣製造與出口企業若能證明供應鏈透明、合規與韌性，會更容易成為國際客戶的策略夥伴。",
      joyceQuestion: "台灣企業如何把供應鏈可靠度，轉成客戶願意付費的高階價值主張？",
      keepWatching: "Reuters supply chain agenda、關稅文件要求、貿易合規成本、供應鏈資料治理與區域化布局。",
    },
  ];

  data.perspectiveNote = {
    title: "本週判讀：AI 正把公司治理拉回實體世界",
    summary:
      "本週最重要的管理意義是：AI 已不只是數位化或自動化，它正在要求領導者重新理解資本、能源、人才、風險與供應鏈。Joyce 本週可把觀點聚焦在『AI 如何改變 CEO 的實體經營假設』，而不是只談 AI 工具或課程設計。",
    notes: [
      "根據來源顯示，AI capex、資料中心、能源與水資源正在成為董事會層級議題；管理意義是 AI 投資必須有實體基礎建設視角。",
      "EU GPAI 與 AI Act 時程提醒企業：可信 AI 不是抽象價值，而會進入採購、產品上市、跨境銷售與供應商管理。",
      "CEO Confidence 下滑與資安風險升溫，表示高階團隊需要把 AI、cyber、地緣政治與供應鏈放進同一個風險節奏。",
      "AI 對白領工作的影響，重點不是取代多少人，而是企業有沒有能力重寫職務、流程、責任與新人培育方式。",
      "供應鏈韌性正在從成本控制轉為客戶信任與價值創造，這是台灣 B2B 企業可切入的高階敘事。",
    ],
    discussionPrompts: [
      "如果 AI 是實體經濟投資循環，台灣企業應該在哪個環節建立不可替代性？",
      "董事會是否已把 AI 模型供應商、資料中心能源、資安與地緣政治放進同一份風險報告？",
      "企業導入 AI 後，第一個需要重寫的是工具清單，還是職務設計、績效與人才培育？",
      "供應鏈可靠度如何從內部成本能力，轉成對客戶可銷售的策略價值？",
    ],
    writingAngles: [
      "AI 的下一戰，不在螢幕裡，而在電力、水、工廠與供應鏈裡",
      "可信 AI 會成為台灣企業進入歐洲市場的新門票",
      "CEO 不能再把 AI、資安與供應鏈分開管理",
      "白領工作不是被 AI 消滅，而是被迫重新定義價值",
    ],
  };

  const courseUpdates = {
    "course-ai-capital-roi": {
      priority: 1,
      heat: 97,
      title: "AI 投資與實體經濟 ROI：CEO/CFO 的資本配置課",
      whyNow:
        "Goldman Sachs 將 AI build-out 連結到晶片、資料中心、電力與實體基礎建設，AI 投資已從軟體工具擴大為資本、能源與供應鏈決策。",
      productStructure: [
        "AI 投資組合盤點：數位流程、實體基建與供應鏈機會分流",
        "ROI 與成本治理：token、雲端、資料中心、電力、水資源與人力成本",
        "董事會報告模板：用財務與營運語言呈現 AI 成果與風險",
        "台灣供應鏈工作坊：從 AI 接單到策略夥伴的投資地圖",
      ],
      sourceBasis: ["Goldman Sachs AI build-out", "Axios AI physical economy", "BIS Quarterly Review", "PwC CEO Survey"],
      trendIds: ["ai-physical-economy-buildout", "ai-cost-discipline", "ai-capex-financial-link", "taiwan-ai-supply-chain"],
    },
    "course-geopolitics-energy": {
      priority: 2,
      heat: 94,
      trendIds: ["middle-east-energy-risk", "global-growth-downgrade", "ai-power-water-bottleneck", "ceo-cyber-ai-risk-q2"],
    },
    "course-ai-board-trust": {
      priority: 3,
      heat: 92,
      title: "AI 信任、GPAI 合規與董事會治理",
      whyNow:
        "EU AI Act 全面適用時點逼近，GPAI Code of Practice 讓模型供應商治理、透明度、著作權與安全責任成為跨境企業必備能力。",
      sourceBasis: ["European Commission AI Office", "The Conference Board CEO Confidence", "McKinsey AI Trust", "Deloitte Human Capital Trends"],
      trendIds: ["eu-gpai-compliance-deadline", "eu-ai-office-trustworthy-ai", "ceo-cyber-ai-risk-q2", "board-ai-cyber"],
    },
    "course-supply-chain-resilience": {
      priority: 4,
      heat: 90,
      trendIds: ["trade-supply-chain-enterprise-risk", "supply-chain-bend-not-break", "data-before-automation", "ai-power-water-bottleneck"],
      whyNow:
        "Reuters Events 與貿易研究都指向供應鏈正從效率題升級為企業風險、合規、資料與價值創造題，台灣企業需要把可靠度產品化。",
    },
    "course-human-ai-work": {
      priority: 5,
      heat: 89,
      trendIds: ["ai-white-collar-work-reshaping", "human-x-machine", "continuous-reinvention", "leadership-pipeline-stress"],
      whyNow:
        "AWS CEO 訪談、Deloitte 與 BBC AI Decoded 都顯示 AI 正快速重寫白領工作與人機互動，但多數組織尚未具備工作設計能力。",
    },
    "course-ceo-risk-radar": {
      priority: 6,
      heat: 87,
      trendIds: ["ceo-cyber-ai-risk-q2", "ceo-confidence-down", "global-growth-downgrade", "trade-supply-chain-enterprise-risk"],
    },
  };
  data.topRecommendations.forEach((course) => {
    const update = courseUpdates[course.id];
    if (!update) return;
    Object.assign(course, update);
    if (update.trendIds) course.trendIds = [...new Set(update.trendIds)];
  });
  data.topRecommendations.sort((a, b) => a.priority - b.priority);
})();

(() => {
  const data = window.LEADER_TREND_DATA;

  data.meta.weekly_thesis =
    "本週雷達改採「6 個主方向＋25 個細分類別」的雙層模型。每張趨勢卡可以被多個細分類別收錄，讓主管可以從投資、治理、供應鏈、人才、地緣風險與學習產品等不同角度切入，同時維持每個類別至少 4 張可比較卡片。";

  data.categoryDefinitions = [
    {
      name: "AI投資ROI",
      parent: "AI投資與資本市場",
      decisionQuestion: "哪些 AI 投資值得加碼，哪些要停損？",
    },
    {
      name: "AI成本治理",
      parent: "AI投資與資本市場",
      decisionQuestion: "AI 的雲端、模型、資料與人力成本是否有共同管控機制？",
    },
    {
      name: "AI基礎建設與資料中心",
      parent: "AI投資與資本市場",
      decisionQuestion: "AI 基礎建設投資會如何影響客戶需求、供應鏈與電力/散熱配置？",
    },
    {
      name: "資本市場與金融風險",
      parent: "AI投資與資本市場",
      decisionQuestion: "AI capex、私募信貸與市場估值變化會如何回到企業現金流？",
    },
    {
      name: "Agentic AI與流程自動化",
      parent: "AI落地與資料治理",
      decisionQuestion: "哪些高價值流程適合讓 AI agent 參與，哪些仍需人工覆核？",
    },
    {
      name: "資料治理與AI-ready",
      parent: "AI落地與資料治理",
      decisionQuestion: "組織是否已有可支撐 AI 規模化的資料品質、owner 與流程責任？",
    },
    {
      name: "AI規模化落地",
      parent: "AI落地與資料治理",
      decisionQuestion: "哪些 AI 試點已具備從 POC 走向營運流程的條件？",
    },
    {
      name: "高階幕僚與決策智能",
      parent: "AI落地與資料治理",
      decisionQuestion: "策略、投資與幕僚工作能否用 AI 建立更快的可信決策流程？",
    },
    {
      name: "AI信任與透明度",
      parent: "AI信任與科技治理",
      decisionQuestion: "AI 對客戶、員工與社會的透明度與問責是否足夠？",
    },
    {
      name: "董事會AI治理",
      parent: "AI信任與科技治理",
      decisionQuestion: "董事會現在應該用哪些問題檢查 AI 投資、風險與問責？",
    },
    {
      name: "資安與數位韌性",
      parent: "AI信任與科技治理",
      decisionQuestion: "資安、AI 與營運不中斷是否已放在同一張風險雷達上？",
    },
    {
      name: "EU AI監管與合規",
      parent: "AI信任與科技治理",
      decisionQuestion: "歐洲 AI 規則會如何影響供應商、產品、資料與模型選擇？",
    },
    {
      name: "地緣政治與能源風險",
      parent: "全球宏觀與地緣市場",
      decisionQuestion: "哪些地緣與能源情境需要立刻重跑成本、價格與交期？",
    },
    {
      name: "全球低成長與通膨",
      parent: "全球宏觀與地緣市場",
      decisionQuestion: "低成長環境下，企業應該守住哪些現金、毛利與客戶選擇？",
    },
    {
      name: "關稅貿易與區域布局",
      parent: "全球宏觀與地緣市場",
      decisionQuestion: "關稅、貿易與區域政策會如何改變供應鏈與市場布局？",
    },
    {
      name: "印度與新興市場",
      parent: "全球宏觀與地緣市場",
      decisionQuestion: "印度與新興市場是新增長曲線、備援基地，還是新的管理複雜度？",
    },
    {
      name: "供應鏈韌性",
      parent: "供應鏈韌性與產業佈局",
      decisionQuestion: "供應鏈是否能在衝擊下彎曲但不中斷？",
    },
    {
      name: "AI供應鏈與半導體",
      parent: "供應鏈韌性與產業佈局",
      decisionQuestion: "台灣 AI 供應鏈應如何管理客戶集中、產能與景氣週期？",
    },
    {
      name: "歐洲AI產業政策",
      parent: "供應鏈韌性與產業佈局",
      decisionQuestion: "歐洲 AI 基建、監管與產業政策會創造哪些台灣企業機會？",
    },
    {
      name: "新創與生態系合作",
      parent: "供應鏈韌性與產業佈局",
      decisionQuestion: "哪些新創、研究機構與區域夥伴值得納入合作雷達？",
    },
    {
      name: "未來工作與人機協作",
      parent: "組織人才與CEO學習",
      decisionQuestion: "哪些工作應該重設為人機協作，而不是單純自動化？",
    },
    {
      name: "人才重配置與再學習",
      parent: "組織人才與CEO學習",
      decisionQuestion: "低招聘環境下，企業如何用再學習與內部流動補上新能力？",
    },
    {
      name: "CEO經營節奏與風險雷達",
      parent: "組織人才與CEO學習",
      decisionQuestion: "CEO 與高階團隊是否有足夠短週期的策略回顧與風險儀表板？",
    },
    {
      name: "領導力接班與心理安全",
      parent: "組織人才與CEO學習",
      decisionQuestion: "領導者壓力、接班梯隊與心理安全是否已成為轉型瓶頸？",
    },
    {
      name: "高階學習產品與內容設計",
      parent: "組織人才與CEO學習",
      decisionQuestion: "哪些國際議題可以轉成高階主管願意付費討論的課程產品？",
    },
  ];

  const categoryAssignments = {
    AI投資ROI: [
      "ai-cost-discipline",
      "ai-capex-financial-link",
      "ai-scale-gap",
      "bloomberg-ai-finance-workflows",
      "ft-ai-power-dynamics",
      "private-credit-ai-risk",
    ],
    AI成本治理: [
      "ai-cost-discipline",
      "ai-capex-financial-link",
      "agentic-workflow",
      "data-before-automation",
      "ft-ai-power-dynamics",
    ],
    AI基礎建設與資料中心: [
      "ai-capex-financial-link",
      "taiwan-ai-supply-chain",
      "ai-infra-geopolitics",
      "eu-ai-continent-industrial-policy",
      "private-credit-ai-risk",
    ],
    資本市場與金融風險: [
      "ai-capex-financial-link",
      "private-credit-ai-risk",
      "global-growth-downgrade",
      "ft-ai-power-dynamics",
      "bloomberg-ai-finance-workflows",
      "ceo-confidence-down",
    ],
    AgenticAI與流程自動化: [
      "agentic-workflow",
      "ai-scale-gap",
      "data-before-automation",
      "bloomberg-ai-finance-workflows",
      "human-x-machine",
      "economist-ai-economists",
    ],
    資料治理與AIready: [
      "data-before-automation",
      "ai-scale-gap",
      "agentic-workflow",
      "cloud-sovereignty",
      "eu-ai-office-trustworthy-ai",
    ],
    AI規模化落地: [
      "ai-scale-gap",
      "agentic-workflow",
      "human-x-machine",
      "value-over-efficiency",
      "bbc-ai-decoded-workplace",
      "bloomberg-ai-finance-workflows",
    ],
    高階幕僚與決策智能: [
      "economist-ai-economists",
      "bloomberg-ai-finance-workflows",
      "video-executive-learning",
      "business-innovation-summits",
      "ft-ai-power-dynamics",
      "ceo-confidence-down",
    ],
    AI信任與透明度: [
      "ai-trust-disinformation",
      "customer-trust-ai",
      "eu-ai-office-trustworthy-ai",
      "bbc-ai-decoded-workplace",
      "cloud-sovereignty",
    ],
    董事會AI治理: [
      "board-ai-cyber",
      "ai-trust-disinformation",
      "cyber-risk-ceo",
      "eu-ai-office-trustworthy-ai",
      "tariff-cyber-pressure",
    ],
    資安與數位韌性: [
      "cyber-risk-ceo",
      "board-ai-cyber",
      "cloud-sovereignty",
      "ai-trust-disinformation",
      "tariff-cyber-pressure",
    ],
    EUAI監管與合規: [
      "eu-ai-office-trustworthy-ai",
      "eu-ai-continent-industrial-policy",
      "cloud-sovereignty",
      "ft-ai-power-dynamics",
      "customer-trust-ai",
    ],
    地緣政治與能源風險: [
      "middle-east-energy-risk",
      "global-growth-downgrade",
      "tariff-cyber-pressure",
      "capital-to-india",
      "ai-infra-geopolitics",
    ],
    全球低成長與通膨: [
      "global-growth-downgrade",
      "ceo-confidence-down",
      "low-hire-low-fire",
      "value-over-efficiency",
      "middle-east-energy-risk",
    ],
    關稅貿易與區域布局: [
      "tariff-cyber-pressure",
      "capital-to-india",
      "middle-east-energy-risk",
      "supply-chain-bend-not-break",
      "cloud-sovereignty",
    ],
    印度與新興市場: [
      "capital-to-india",
      "global-growth-downgrade",
      "supply-chain-bend-not-break",
      "ai-infra-geopolitics",
      "taiwan-ai-supply-chain",
    ],
    供應鏈韌性: [
      "supply-chain-bend-not-break",
      "data-before-automation",
      "middle-east-energy-risk",
      "taiwan-ai-supply-chain",
      "eu-ai-continent-industrial-policy",
    ],
    AI供應鏈與半導體: [
      "taiwan-ai-supply-chain",
      "ai-infra-geopolitics",
      "ai-capex-financial-link",
      "eu-ai-continent-industrial-policy",
      "sifted-europe-ai-startups",
    ],
    歐洲AI產業政策: [
      "eu-ai-continent-industrial-policy",
      "eu-ai-office-trustworthy-ai",
      "sifted-europe-ai-startups",
      "ft-ai-power-dynamics",
      "cloud-sovereignty",
    ],
    新創與生態系合作: [
      "sifted-europe-ai-startups",
      "capital-to-india",
      "business-innovation-summits",
      "eu-ai-continent-industrial-policy",
      "taiwan-ai-supply-chain",
    ],
    未來工作與人機協作: [
      "human-x-machine",
      "bbc-ai-decoded-workplace",
      "low-hire-low-fire",
      "leadership-pipeline-stress",
      "value-over-efficiency",
    ],
    人才重配置與再學習: [
      "low-hire-low-fire",
      "human-x-machine",
      "leadership-pipeline-stress",
      "continuous-reinvention",
      "bbc-ai-decoded-workplace",
    ],
    CEO經營節奏與風險雷達: [
      "ceo-confidence-down",
      "continuous-reinvention",
      "global-growth-downgrade",
      "tariff-cyber-pressure",
      "business-innovation-summits",
    ],
    領導力接班與心理安全: [
      "leadership-pipeline-stress",
      "low-hire-low-fire",
      "human-x-machine",
      "continuous-reinvention",
      "value-over-efficiency",
    ],
    高階學習產品與內容設計: [
      "video-executive-learning",
      "business-innovation-summits",
      "economist-ai-economists",
      "bbc-ai-decoded-workplace",
      "ft-ai-power-dynamics",
    ],
  };

  const displayNameByKey = Object.fromEntries(
    data.categoryDefinitions.map((item) => [item.name.replace(/[^A-Za-z0-9\u4e00-\u9fff]/g, ""), item.name])
  );
  const trendById = new Map(data.trends.map((trend) => [trend.id, trend]));
  data.trends.forEach((trend) => {
    trend.categories = [];
  });

  Object.entries(categoryAssignments).forEach(([rawCategory, trendIds]) => {
    const category = displayNameByKey[rawCategory.replace(/[^A-Za-z0-9\u4e00-\u9fff]/g, "")] || rawCategory;
    trendIds.forEach((trendId) => {
      const trend = trendById.get(trendId);
      if (!trend) return;
      trend.categories = [...new Set([...(trend.categories || []), category])];
    });
  });

  data.trends.forEach((trend) => {
    if (!trend.categories?.length) trend.categories = [trend.category];
  });
})();

(() => {
  const data = window.LEADER_TREND_DATA;

  data.meta.scope =
    "追蹤全球領導者必看的經營趨勢，來源涵蓋國際財經媒體、官方經濟機構、董事會/CEO調查、供應鏈、AI 研究與歐洲 AI 治理/產業訊號，協助 Joyce 建立國際視野，理解全球領導者正在關心什麼，以及這些變化對台灣企業、組織管理與領導力學習的意義。";
  data.meta.weekly_thesis =
    "本週最值得放進領導者視野的，不是單一新聞，而是三個結構性變化：AI 正從工具導入變成資本配置與治理問題；地緣、能源與低成長讓 CEO 需要重新練習情境決策；人才與工作設計正在被 AI、低招聘與組織壓力一起改寫。";
  data.meta.recommendation_note =
    "以下議題不是網站的主目的，而是從全球趨勢延伸出的領導力學習產品機會。可作為未來課程、論壇、文章或高階主管圓桌的題目池。";

  data.weeklyMustReads = [
    {
      id: "must-ai-capital",
      rank: 1,
      trendId: "ai-cost-discipline",
      headline: "AI 投資開始進入 CEO/CFO 的資本配置桌",
      globalSignal:
        "國際財經媒體與金融機構同時關注 AI 成本、AI capex、資料中心投資與投資回報，代表 AI 已經離開單純創新部門。",
      whyLeadersCare:
        "領導者要判斷哪些 AI 專案值得加碼，哪些應該停損，並讓 CFO、CIO 與事業主管有共同的 ROI 語言。",
      taiwanMeaning:
        "台灣同時是 AI 供應鏈受益者與 AI 使用者，必須一邊掌握需求，一邊避免內部導入失控。",
      joyceQuestion: "我如何判斷一家企業是真的在投資 AI，還是只是在追逐 AI 話題？",
      keepWatching: "AI capex、資料中心投資、CFO 對 AI 預算的表態、供應鏈訂單變化。",
    },
    {
      id: "must-geopolitics",
      rank: 2,
      trendId: "middle-east-energy-risk",
      headline: "地緣政治與能源風險重新回到經營核心",
      globalSignal:
        "IMF、OECD、World Bank 均提示全球成長放緩與能源/地緣政治風險，企業不能再只用單一景氣假設做年度計畫。",
      whyLeadersCare:
        "CEO 必須把情境推演放回價格、庫存、供應商、現金流與客戶承諾，而不是等危機發生才處理。",
      taiwanMeaning:
        "台灣高度依賴能源進口與出口市場，能源、航運、匯率與關稅變化都會快速反映到毛利與交期。",
      joyceQuestion: "如果我今天是董事長，我會要求團隊重跑哪三個情境？",
      keepWatching: "油價、航運、關稅、主要經濟體成長預測、客戶庫存與採購節奏。",
    },
    {
      id: "must-europe-ai",
      rank: 3,
      trendId: "eu-ai-office-trustworthy-ai",
      headline: "歐洲正在把 AI 變成治理與產業政策議題",
      globalSignal:
        "European AI Office 與 AI Continent Action Plan 顯示，歐洲不只在管 AI 風險，也在用政策補強 AI 基礎建設、資料與產業能力。",
      whyLeadersCare:
        "全球 AI 競爭不是美國科技公司單線敘事，歐洲的信任、合規與產業政策會影響跨境企業的產品、供應商與市場進入策略。",
      taiwanMeaning:
        "台灣企業若服務歐洲市場或供應 AI 基建，需要更早理解 EU AI Act、資料治理與在地合作要求。",
      joyceQuestion: "台灣企業在 AI 時代只做供應鏈，還是能成為可信 AI 生態的一部分？",
      keepWatching: "EU AI Act、GPAI 規則、AI factories、AI gigafactories、歐洲 AI 新創與資料政策。",
    },
    {
      id: "must-supply-chain",
      rank: 4,
      trendId: "supply-chain-bend-not-break",
      headline: "供應鏈韌性從效率問題變成高階決策能力",
      globalSignal:
        "供應鏈討論正從效率最佳化轉向可視性、備援、資料與跨部門決策，AI 只是工具，真正的瓶頸是組織如何一起判斷。",
      whyLeadersCare:
        "供應鏈韌性需要 CEO、COO、CFO、採購與業務共同做取捨，不能只交給供應鏈部門。",
      taiwanMeaning:
        "台灣製造業若只靠交付能力競爭，會錯過成為客戶韌性夥伴的機會。",
      joyceQuestion: "台灣企業如何從『可靠供應商』升級成『韌性策略夥伴』？",
      keepWatching: "Reuters supply chain 議程、區域化投資、AI demand sensing、關鍵材料備援與客戶供應商要求。",
    },
    {
      id: "must-human-ai",
      rank: 5,
      trendId: "human-x-machine",
      headline: "AI 正在改寫工作的價值，而不是只取代工作",
      globalSignal:
        "Deloitte、BBC AI Decoded 與 CEO 調查都指向同一件事：AI 讓人機分工、技能重配、員工信任與主管領導方式成為核心議題。",
      whyLeadersCare:
        "如果領導者只把 AI 當降本工具，組織可能省下成本卻失去創新、信任與人才承諾。",
      taiwanMeaning:
        "台灣企業面臨人才短缺與接班壓力，更需要把 AI 導入和人才再學習放在一起設計。",
      joyceQuestion: "高階主管真正要學的 AI 能力，是操作工具，還是重新設計工作與判斷？",
      keepWatching: "低招聘、upskilling、AI fluency、主管壓力、員工對 AI 的信任與抗拒。",
    },
    {
      id: "must-ceo-rhythm",
      rank: 6,
      trendId: "ceo-confidence-down",
      headline: "低成長時代需要更短週期的 CEO 經營節奏",
      globalSignal:
        "CEO 信心、全球成長與多重風險指標都顯示，不確定性不會很快消失，高階團隊需要更高頻的策略回顧。",
      whyLeadersCare:
        "領導者的挑戰不是一次做出完美策略，而是在資訊變動中持續校準投資、人才、風險與現金。",
      taiwanMeaning:
        "台灣企業若仍以年度計畫為主，容易在 AI、地緣與供應鏈變化下反應過慢。",
      joyceQuestion: "一個好的 CEO 週期，應該多久檢視一次趨勢、風險與資源配置？",
      keepWatching: "CEO Confidence、企業招聘計畫、capex guidance、現金流壓力、季度策略調整。",
    },
  ];

  data.perspectiveNote = {
    title: "從課程設計升級為全球領導者視野養成",
    summary:
      "這個網站的核心價值，是幫助 Joyce 每週練習用全球領導者的眼光看世界：哪些訊號只是新聞，哪些正在改變企業經營的假設，哪些會成為台灣企業主與高階主管接下來要面對的問題。",
    notes: [
      "先看全球領導者正在把什麼問題放上桌，再回頭想台灣企業是否也會被影響。",
      "不要急著把每個趨勢變成課程，先問它是否改變了領導者的判斷框架。",
      "同一個 AI 議題，要同時從資本、治理、人才、供應鏈與信任五個角度看。",
      "每週只抓最值得追問的 5 到 7 件事，避免資料量變成視野噪音。",
    ],
    discussionPrompts: [
      "如果我是 CEO，這週哪一個外部訊號會改變我的資源配置？",
      "如果我是董事，我會要求管理團隊補哪一份風險或投資報告？",
      "如果我要和企業二代談未來三年，哪一個趨勢最能打開討論？",
    ],
    writingAngles: [
      "AI 不是工具題，而是資本配置題",
      "低成長時代，CEO 最缺的不是答案，而是經營節奏",
      "台灣企業如何從 AI 供應鏈受益者，變成可信 AI 生態參與者",
    ],
  };
})();

(() => {
  const data = window.LEADER_TREND_DATA;
  const trendById = new Map(data.trends.map((trend) => [trend.id, trend]));

  data.meta.generated_at = "2026-06-27";
  data.meta.next_review = "2026-07-04 07:30 Asia/Taipei";
  data.meta.weekly_thesis =
    "本週全球領導者視野的重點，從『AI 是否有用』轉向『AI 會把資本、能源、人才、資安與供應鏈重新綁在一起』。Goldman Sachs、World Bank、OECD、European Commission、The Conference Board、Deloitte 與 Reuters/CNBC/Bloomberg/BBC 等訊號共同指向：CEO 要把 AI 當成實體經濟與治理議題，而不是單純數位工具。";
  data.meta.recommendation_note =
    "本週六個學習產品機會維持為下游輸出：先服務 Joyce 的全球領導者判讀，再把高熱度議題轉成高階主管可討論、可演練、可行動的課程。";

  const finalCategoryAdds = {
    "ai-physical-economy-buildout": ["AI投資ROI", "AI成本治理", "AI基礎建設與資料中心", "資本市場與金融風險", "AI供應鏈與半導體", "供應鏈韌性"],
    "ai-power-water-bottleneck": ["AI基礎建設與資料中心", "地緣政治與能源風險", "供應鏈韌性", "AI供應鏈與半導體", "歐洲AI產業政策"],
    "eu-gpai-compliance-deadline": ["AI信任與透明度", "董事會AI治理", "資安與數位韌性", "EU AI監管與合規", "歐洲AI產業政策"],
    "ceo-cyber-ai-risk-q2": ["董事會AI治理", "資安與數位韌性", "CEO經營節奏與風險雷達", "AI信任與透明度", "關稅貿易與區域布局"],
    "ai-white-collar-work-reshaping": ["未來工作與人機協作", "人才重配置與再學習", "領導力接班與心理安全", "高階學習產品與內容設計", "AI規模化落地"],
    "trade-supply-chain-enterprise-risk": ["供應鏈韌性", "關稅貿易與區域布局", "全球低成長與通膨", "CEO經營節奏與風險雷達", "高階學習產品與內容設計"],
  };
  Object.entries(finalCategoryAdds).forEach(([trendId, categories]) => {
    const trend = trendById.get(trendId);
    if (!trend) return;
    trend.categories = [...new Set([...(trend.categories || []), ...categories])];
  });

  data.weeklyMustReads = [
    {
      id: "must-ai-physical-economy",
      rank: 1,
      trendId: "ai-physical-economy-buildout",
      headline: "AI 正從數位工具變成實體經濟投資循環",
      globalSignal:
        "根據 Goldman Sachs 研究與 6 月 26 日 Axios 報導，AI 基礎建設投資已連動晶片、資料中心、電力與工業場域，下一波競爭會更貼近工廠、公用事業與能源系統。",
      whyLeadersCare:
        "管理意義是：CEO 不能只問公司有沒有導入 AI，而要問 AI 會改變哪一段資本配置、產能、供應鏈與營運模式。",
      taiwanMeaning:
        "台灣企業一方面可受惠於 AI 伺服器、散熱、電力與半導體需求，另一方面也要承擔客戶集中與投資週期波動。",
      joyceQuestion: "台灣企業在 AI 實體經濟中，應該只是接單者，還是能成為策略型供應與解決方案夥伴？",
      keepWatching: "Goldman AI capex、hyperscaler guidance、資料中心投資、電力/散熱供應鏈與工業 AI 案例。",
    },
    {
      id: "must-ai-resource-constraint",
      rank: 2,
      trendId: "ai-power-water-bottleneck",
      headline: "AI 基礎建設的瓶頸正在從晶片擴大到能源、水與社會接受度",
      globalSignal:
        "根據來源顯示，資料中心的用水、用電、冷卻、地方社群反應與專案許可正在成為 AI 擴張限制條件。",
      whyLeadersCare:
        "管理意義是：AI 投資案必須同時通過技術、財務、ESG、能源與地方治理檢驗。",
      taiwanMeaning:
        "台灣若要承接 AI 基建機會，電力韌性、水資源管理與地方溝通會直接影響投資與產業可信度。",
      joyceQuestion: "當 AI 成長需要大量能源與水，企業要如何把永續從形象議題變成基建治理能力？",
      keepWatching: "資料中心用電/用水揭露、電網瓶頸、冷卻技術、地方反對聲量與能源合作案。",
    },
    {
      id: "must-eu-gpai",
      rank: 3,
      trendId: "eu-gpai-compliance-deadline",
      headline: "歐盟 GPAI 合規將把 AI 供應商管理推上董事會議程",
      globalSignal:
        "European Commission AI Office 的 GPAI Code of Practice 將透明度、著作權、安全與系統性風險變成可落地的模型治理框架；AI Act 2026 年 8 月全面適用時點逼近。",
      whyLeadersCare:
        "管理意義是：企業採購 AI 模型與工具時，不能只看功能與價格，還要看文件、責任、資料來源、風險分類與跨境合規。",
      taiwanMeaning:
        "台灣企業若服務歐洲市場或在產品中嵌入 AI，需及早建立 AI 供應商問卷、模型文件與風險審查流程。",
      joyceQuestion: "可信 AI 對台灣企業是合規成本，還是進入歐洲客戶供應鏈的信任門票？",
      keepWatching: "GPAI Code 簽署者、EU AI Act 適用時程、模型文件要求、歐洲客戶的 AI 稽核條款。",
    },
    {
      id: "must-ceo-cyber-ai",
      rank: 4,
      trendId: "ceo-cyber-ai-risk-q2",
      headline: "CEO 信心下滑，資安、AI 與地緣風險開始同桌討論",
      globalSignal:
        "The Conference Board Q2 2026 CEO Confidence 降至 47；資安風險升溫，地緣政治與 AI/新科技仍是高階風險。",
      whyLeadersCare:
        "管理意義是：資安、AI 與地緣政治不再是三個部門議題，而是董事會與 CEO 需要共同治理的營運不中斷風險。",
      taiwanMeaning:
        "台灣關鍵供應鏈企業會面臨國際客戶更嚴格的資安、資料與 AI 治理要求。",
      joyceQuestion: "董事會現在問 AI，應該先問效率，還是先問責任、風險與可復原能力？",
      keepWatching: "CEO Confidence、資安預算、地緣衝突下的 cyber warning、AI governance 與供應鏈稽核。",
    },
    {
      id: "must-white-collar-redesign",
      rank: 5,
      trendId: "ai-white-collar-work-reshaping",
      headline: "白領工作進入重塑期，高階主管要設計新職務而非只買工具",
      globalSignal:
        "AWS CEO 訪談、Deloitte Human Capital Trends 與 BBC AI Decoded 共同指向：AI 將重寫工作期待、人才培育與人機互動，但企業多數尚未具備成熟設計能力。",
      whyLeadersCare:
        "管理意義是：AI 導入若沒有新職務、新流程與新能力標準，會讓員工焦慮、主管失焦，並產生低品質自動化。",
      taiwanMeaning:
        "台灣企業的人才短缺與接班壓力會讓 AI fluency、主管帶人與新人培育變成同一個問題。",
      joyceQuestion: "企業真正需要的 AI 課，是工具操作，還是重新設計工作與人才梯隊？",
      keepWatching: "白領職務重寫、初階人才招聘、AI fluency、Deloitte human-AI interaction、BBC AI 工作議題。",
    },
    {
      id: "must-supply-chain-risk",
      rank: 6,
      trendId: "trade-supply-chain-enterprise-risk",
      headline: "供應鏈從成本中心升級為企業風險與價值創造能力",
      globalSignal:
        "Reuters Events 與 Thomson Reuters 供應鏈/貿易研究顯示，關稅、貿易合規、資料、文件與跨部門協作正在重塑供應鏈主管的策略角色。",
      whyLeadersCare:
        "管理意義是：供應鏈可靠度會影響毛利、客戶信任、合規與現金流，高階主管需要把它放進企業風險雷達。",
      taiwanMeaning:
        "台灣製造與出口企業若能證明供應鏈透明、合規與韌性，會更容易成為國際客戶的策略夥伴。",
      joyceQuestion: "台灣企業如何把供應鏈可靠度，轉成客戶願意付費的高階價值主張？",
      keepWatching: "Reuters supply chain agenda、關稅文件要求、貿易合規成本、供應鏈資料治理與區域化布局。",
    },
  ];

  data.perspectiveNote = {
    title: "本週判讀：AI 正把公司治理拉回實體世界",
    summary:
      "本週最重要的管理意義是：AI 已不只是數位化或自動化，它正在要求領導者重新理解資本、能源、人才、風險與供應鏈。Joyce 本週可把觀點聚焦在『AI 如何改變 CEO 的實體經營假設』，而不是只談 AI 工具或課程設計。",
    notes: [
      "根據來源顯示，AI capex、資料中心、能源與水資源正在成為董事會層級議題；管理意義是 AI 投資必須有實體基礎建設視角。",
      "EU GPAI 與 AI Act 時程提醒企業：可信 AI 不是抽象價值，而會進入採購、產品上市、跨境銷售與供應商管理。",
      "CEO Confidence 下滑與資安風險升溫，表示高階團隊需要把 AI、cyber、地緣政治與供應鏈放進同一個風險節奏。",
      "AI 對白領工作的影響，重點不是取代多少人，而是企業有沒有能力重寫職務、流程、責任與新人培育方式。",
      "供應鏈韌性正在從成本控制轉為客戶信任與價值創造，這是台灣 B2B 企業可切入的高階敘事。",
    ],
    discussionPrompts: [
      "如果 AI 是實體經濟投資循環，台灣企業應該在哪個環節建立不可替代性？",
      "董事會是否已把 AI 模型供應商、資料中心能源、資安與地緣政治放進同一份風險報告？",
      "企業導入 AI 後，第一個需要重寫的是工具清單，還是職務設計、績效與人才培育？",
      "供應鏈可靠度如何從內部成本能力，轉成對客戶可銷售的策略價值？",
    ],
    writingAngles: [
      "AI 的下一戰，不在螢幕裡，而在電力、水、工廠與供應鏈裡",
      "可信 AI 會成為台灣企業進入歐洲市場的新門票",
      "CEO 不能再把 AI、資安與供應鏈分開管理",
      "白領工作不是被 AI 消滅，而是被迫重新定義價值",
    ],
  };
})();
