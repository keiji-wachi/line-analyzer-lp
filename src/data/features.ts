export const features = [
  {
    number: "01",
    eyebrow: "FEATURE_01",
    title: "直感的な異常データ蓄積",
    description:
      "現場で発生した異常情報を簡単に登録し、原因や対応内容をデータとして蓄積します。",
    bulletPoints: [
      "工程・異常種別を選択",
      "原因・対応内容を記録",
      "入力バリデーション",
      "登録前の内容確認",
    ],
    image: "/images/features/incident-entry.png",
    imageAlt: "LineAnalyzerの異常対応入力画面",
    reverse: false,
  },
  {
    number: "02",
    eyebrow: "FEATURE_02",
    title: "多角的な分析ダッシュボード",
    description:
      "蓄積された異常データをグラフ・KPI・一覧から可視化し、現場の傾向を多角的に分析できます。",
    bulletPoints: [
      "異常種別別の集計",
      "工程別の発生件数",
      "日別トレンド分析",
      "条件指定による絞り込み",
    ],
    image: "/images/features/incident-analysis.png",
    imageAlt: "LineAnalyzerの異常データ分析画面",
    reverse: true,
  },
  {
    number: "03",
    eyebrow: "FEATURE_03",
    title: "ロールベースのアクセス制御",
    description:
      "利用者の役割に応じて操作可能な範囲を制御し、安全な業務システム運用を実現します。",
    bulletPoints: [
      "4段階の権限管理",
      "Spring Securityによる認可",
      "操作権限の制御",
      "403 Forbiddenによるアクセス制御",
    ],
    image: "/images/features/rbac.png",
    imageAlt: "LineAnalyzerのロールベースアクセス制御イメージ",
    reverse: false,
  },
] as const;