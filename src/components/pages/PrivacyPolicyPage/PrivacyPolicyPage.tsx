import Section from "@/components/util/Section";
import { Anchor, Box, Divider, Text } from "@mantine/core";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <Box>
      <NextSeo title="プライバシーポリシー" />
      <Section title="免責事項">
        <Text>
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </Text>
      </Section>

      <Divider />

      <Section title="アクセス解析ツールについて">
        当サイトでは、 Google によるアクセス解析ツール「 Google
        アナリティクス」を利用しています。この Google
        アナリティクスはトラフィックデータの収集のために Cookie
        を使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能は
        Cookie
        を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは{" "}
        <Anchor
          href="https://marketingplatform.google.com/about/analytics/terms/jp/"
          target="_blank"
          rel="noopener noreferrer"
          underline
          c="blue"
        >
          Google アナリティクス利用規約
        </Anchor>
        を参照してください。
      </Section>

      <Divider />

      <Section title="プライバシーポリシーの変更について">
        当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
      </Section>
    </Box>
  );
};

export default PrivacyPolicyPage;
