import { Note } from "@/model/note";
import fs from "fs";
import Parser from "rss-parser";

const feedUrl = "https://zenn.dev/kou_pg_0131/feed";
const out = "notes.json";

(async () => {
  const parser = new Parser();
  const feed = await parser.parseURL(feedUrl);

  const notes: Partial<Note>[] = feed.items.map((item) => ({
    title: item.title,
    url: item.link,
    publishedAt: item.pubDate,
  }));

  fs.writeFileSync(out, JSON.stringify(notes, null, 4));
})();
