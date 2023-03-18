import { WorkGroup } from "@/model/work";

export const workGroups: WorkGroup[] = [
  {
    name: "Web Application",
    works: [
      {
        name: "Koki Sato",
        description: "個人用のポートフォリオサイト。",
        url: "https://koki.me",
        repository: "koki-develop.github.io",
      },
      {
        name: "LGTM Generator",
        description: "LGTM 画像生成サービス。",
        url: "https://lgtmgen.org",
        repository: "lgtm-generator",
      },
      {
        name: "Badge Generator",
        description: "バッジ生成サービス。",
        url: "https://badgen.org",
        repository: "badge-generator",
      },
      {
        name: "GoGoGo",
        description:
          "バックエンド・フロントエンド・インフラ・ CI/CD を Go で書いた Web アプリケーション。",
        url: "https://go55.dev",
        repository: "gogogo",
      },
    ],
  },
  {
    name: "CLI / Tool",
    works: [
      {
        name: "cLive",
        description: "ターミナル操作を自動化するコマンドラインツール。",
        repository: "clive",
      },
      {
        name: "Typingo",
        description: "Go 製のタイピングゲーム。",
        repository: "typingo",
      },
      {
        name: "docker-tags",
        description:
          "Docker イメージのタグ一覧を取得するコマンドラインツール。",
        repository: "docker-tags",
      },
      {
        name: "gat",
        description: "cat コマンドを代替する Go 製コマンドラインツール。",
        repository: "gat",
      },
      {
        name: "Qiita LGTM Ranking",
        description: "Qiita のいいねランキングを自動更新するシステム。",
        url: "https://qiita.com/items/b6cfc81906990b3a3e72",
        repository: "qiita-lgtm-ranking",
      },
      {
        name: "Hub Purge Action",
        description: "GitHub の画像キャッシュをクリアする GitHub Action 。",
        url: "https://github.com/marketplace/actions/hub-purge",
        repository: "hub-purge-action",
      },
      {
        name: "CheckIP",
        description: "クライアントの IP アドレスを返す API 。",
        repository: "checkip",
        url: "https://checkip.dev",
      },
    ],
  },
];
