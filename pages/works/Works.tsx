import type { ReactNode } from "react";
import { FaChrome, FaGlobe, FaKeyboard, FaTerminal } from "react-icons/fa6";
import { SiGithubactions, SiTerraform } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import WorkCard from "./WorkCard";

export type WorkGroup = {
  name: string;
  icon: ReactNode;
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

const workGroups: WorkGroup[] = [
  {
    name: "Web Application",
    icon: <FaGlobe />,
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
        githubUrl: "https://github.com/koki-develop/samari",
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
      {
        name: "Gallery",
        description:
          "バックエンド・フロントエンド・インフラを Terraform でつくったサンプルアプリ。",
        url: "https://tftftf.gallery",
        githubUrl: "https://github.com/koki-develop/gallery",
      },
    ],
  },
  {
    name: "Tools",
    icon: <FaTerminal />,
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
        name: "ghats",
        description:
          "TypeScript で GitHub Actions Workflow 定義を記述するツール。",
        url: "https://www.npmjs.com/package/ghats",
        githubUrl: "https://github.com/koki-develop/ghats",
      },
      {
        name: "pinpm",
        description:
          "package.json の依存関係バージョンを Pin するコマンドラインツール。",
        url: "https://www.npmjs.com/package/pinpm",
        githubUrl: "https://github.com/koki-develop/pinpm",
      },
    ],
  },
  {
    name: "GitHub Action",
    icon: <SiGithubactions />,
    works: [
      {
        name: "GitHub Actions Lint",
        description: "GitHub Actions の Linter を実行する Action。",
        url: "https://github.com/koki-develop/github-actions-lint",
        githubUrl: "https://github.com/koki-develop/github-actions-lint",
      },
      {
        name: "Major Version Sync",
        description: "メジャーバージョンを同期する Action。",
        url: "https://github.com/marketplace/actions/major-version-sync",
        githubUrl: "https://github.com/koki-develop/major-version-sync",
      },
      {
        name: "Unmask Secret Action",
        description: "シークレットをログ出力する Action。",
        url: "https://github.com/marketplace/actions/unmask-secret-action",
        githubUrl: "https://github.com/koki-develop/unmask-secret-action",
      },
    ],
  },
  {
    name: "Terraform Provider",
    icon: <SiTerraform />,
    works: [
      {
        name: "JS.tf",
        description: "次世代の AltJS。",
        url: "https://registry.terraform.io/providers/koki-develop/js/latest/docs",
        githubUrl: "https://github.com/koki-develop/terraform-provider-js",
      },
      {
        name: "HTML.tf",
        description: "次世代の HTML ビルダー。",
        url: "https://registry.terraform.io/providers/koki-develop/html/latest/docs",
        githubUrl: "https://github.com/koki-develop/terraform-provider-html",
      },
    ],
  },
  {
    name: "Chrome Extension",
    icon: <FaChrome />,
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
    icon: <VscVscode />,
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
    icon: <FaKeyboard />,
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

export default function Works() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        {workGroups.map((workGroup) => (
          <a
            key={workGroup.name}
            className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1"
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
            className="mb-4 flex scroll-mt-20 items-center gap-2 font-bold text-2xl"
          >
            {workGroup.icon}
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
}
