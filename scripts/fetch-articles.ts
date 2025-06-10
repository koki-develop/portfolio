import fs from "node:fs";
import path from "node:path";

const url = "https://zenn.dev/api/articles?username=kou_pg_0131&count=20&order=latest";

async function fetchArticles() {
  try {
    console.log("Fetching articles from Zenn...");
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // srcディレクトリ内にdataディレクトリを作成
    const dataDir = path.join(import.meta.dir, "..", "src", "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // JSONファイルとして書き出し
    const outputPath = path.join(dataDir, "articles.json");
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    
    console.log(`Articles data saved to ${outputPath}`);
    console.log(`Total articles: ${data.articles.length}`);
  } catch (error) {
    console.error("Error fetching articles:", error);
    process.exit(1);
  }
}

fetchArticles();