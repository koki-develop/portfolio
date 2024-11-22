import type { FC } from "react";
import WorkCard from "./WorkCard";

export type WorkGroup = {
  name: string;
  works: Work[];
};

export type Work = {
  name: string;
  description: string;
} & (
  | { url: string; githubUrl: string }
  | { url: string; githubUrl: null }
  | { url: null; githubUrl: string }
);

// TODO: 追加
const workGroups: WorkGroup[] = [
  {
    name: "Web Application",
    works: [
      {
        name: "Koki Sato",
        description: "個人用のポートフォリオサイト。",
        url: "https://koki.me",
        githubUrl: "https://github.com/koki-develop/portfolio",
      },
      {
        name: "Thredot",
        description: "スレッド形式のメモサービス。",
        url: "https://thredot.org",
        githubUrl: null,
      },
      {
        name: "SAMARI",
        description: "技術ニュースの要約サービス。",
        url: "https://samari.news",
        githubUrl: null,
      },
      {
        name: "BBalloon",
        description: "Bluesky のフォロー / フォロワー管理サービス。",
        url: "https://bballoon.social",
        githubUrl: null,
      },
      {
        name: "Badge Generator",
        description: "バッジ生成サービス。",
        url: "https://badgen.org",
        githubUrl: "https://github.com/koki-develop/badge-generator",
      },
    ],
  },
  {
    name: "Command Line Tool",
    works: [
      {
        name: "cLive",
        description: "ターミナル操作を自動化するコマンドラインツール。",
        url: null,
        githubUrl: "https://github.com/koki-develop/clive",
      },
      {
        name: "gat",
        description: "Go 製の cat コマンド。",
        url: null,
        githubUrl: "https://github.com/koki-develop/gat",
      },
      {
        name: "sheep",
        description: "羊を眠らせる sleep コマンド。",
        url: null,
        githubUrl: "https://github.com/koki-develop/sheep",
      },
      {
        name: "slp",
        description: "プログレスバーつきの sleep コマンド。",
        url: null,
        githubUrl: "https://github.com/koki-develop/slp",
      },
    ],
  },
  {
    name: "GitHub Action",
    works: [
      {
        name: "Unmask Secret Action",
        description: "シークレットを表示する GitHub Action。",
        url: null,
        githubUrl: "https://github.com/koki-develop/unmask-secret-action",
      },
    ],
  },
  {
    name: "Chrome Extension",
    works: [
      {
        name: "AWS Masking",
        description:
          "AWS マネジメントコンソール上の秘匿情報を自動で隠す Chrome 拡張。",
        url: "https://chromewebstore.google.com/detail/aws-masking/nblpfncgdloilgeicnnlihegobmhjifb",
        githubUrl: "https://github.com/koki-develop/aws-masking",
      },
    ],
  },
  {
    name: "VSCode Extension",
    works: [
      {
        name: "VSCode Settings Sync",
        description: "VSCode の設定を同期する VSCode 拡張。",
        url: null,
        githubUrl: "https://github.com/koki-develop/vscode-settings-sync",
      },
    ],
  },
  {
    name: "IME",
    works: [
      {
        name: "Koto",
        description: "Mac 用の IME。",
        url: null,
        githubUrl: "https://github.com/koki-develop/koto",
      },
      {
        name: "NyaIME",
        description: "猫用の IME。",
        url: null,
        githubUrl: "https://github.com/koki-develop/NyaIME",
      },
    ],
  },
];

const Works: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        {workGroups.map((workGroup) => (
          <a
            key={workGroup.name}
            className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm"
            href={`#${workGroup.name}`}
          >
            {workGroup.name}
          </a>
        ))}
      </div>

      {workGroups.map((workGroup) => (
        <div key={workGroup.name}>
          <h2
            id={workGroup.name}
            className="mb-4 scroll-mt-20 font-bold text-2xl"
          >
            {workGroup.name}
          </h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {workGroup.works.map((work) => (
              <li key={work.name}>
                <WorkCard work={work} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Works;
