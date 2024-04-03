import {
  aws,
  bubbletea,
  cobra,
  firebase,
  githubActions,
  go,
  googleCloud,
  mantine,
  nextjs,
  react,
  tailwindcss,
  terraform,
  typescript,
  vercel,
} from "@/model/skill";
import { WorkGroup } from "@/model/work";

export const workGroups: WorkGroup[] = [
  {
    name: "Web Application",
    works: [
      {
        name: "Koki Sato",
        description: "個人用のポートフォリオサイト。",
        url: "https://koki.me",
        repository: "portfolio",
        skills: [
          // language
          typescript,
          // framework/library
          nextjs,
          react,
          mantine,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "Thredot",
        description: "スレッド形式のメモサービス。",
        url: "https://thredot.org",
        skills: [
          // language
          typescript,
          // framework/library
          nextjs,
          react,
          mantine,
          // cloud
          googleCloud,
          firebase,
          vercel,
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "BBalloon",
        description: "Bluesky のフォロー/フォロワー管理サービス。",
        url: "https://bballoon.social",
        skills: [
          // language
          typescript,
          // framework/library
          react,
          mantine,
          // cloud
          aws,
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "Badge Generator",
        description: "バッジ生成サービス。",
        url: "https://badgen.org",
        repository: "badge-generator",
        skills: [
          // language
          typescript,
          // framework/library
          nextjs,
          tailwindcss,
          // cloud
          googleCloud,
          // ci/cd
          githubActions,
          // other
          terraform,
        ],
      },
    ],
  },
  {
    name: "CLI / Tool",
    works: [
      {
        name: "cLive",
        description: "ターミナル操作を自動化するコマンドラインツール。",
        imageSrc: "/images/work/clive.svg",
        repository: "clive",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "gat",
        description: "cat コマンド代替の Go 製コマンドラインツール。",
        imageSrc: "/images/work/gat.svg",
        repository: "gat",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "kansAI",
        description: "AI による関西弁翻訳コマンドラインツール。",
        imageSrc: "/images/work/kansai.svg",
        repository: "kansai",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "gh-grass",
        description: "GitHub の草を出力する GitHub CLI 拡張機能。",
        imageSrc: "/images/work/gh-grass.svg",
        repository: "gh-grass",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "go-fzf",
        description: "Fuzzy Finder CLI & ライブラリ。",
        repository: "go-fzf",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "sheep",
        description: "羊を眠らせる sleep コマンド。",
        repository: "sheep",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
      {
        name: "Typingo",
        description: "Go 製のタイピングゲーム。",
        repository: "typingo",
        skills: [
          // language
          go,
          // framework/library
          cobra,
          bubbletea,
          // cloud
          // ci/cd
          githubActions,
          // other
        ],
      },
    ],
  },
];
