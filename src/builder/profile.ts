import { config } from "@/../config";
import ejs from "ejs";
import fs from "fs";
import path from "path";

(async () => {
  const template = fs
    .readFileSync(path.join(__dirname, "profile.tmpl.md"))
    .toString();

  const readme = ejs.render(template, {
    config,
  });
  fs.writeFileSync("profile.md", readme);
})();
