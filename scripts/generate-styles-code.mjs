import { readdirSync, writeFileSync } from "fs"
import path from "path"

const names = readdirSync(path.join(process.cwd(), "assets", "styles-codes"))
  .filter((data) => data !== ".gitignore")
  .map((data) => data.split("_")[0])

writeFileSync(
  path.join(process.cwd(), "constants", "style-code.ts"),
  `export const STYLE_CODE: string[] = [${names.map((name) => `"${name}"`).join(", ")}]`
)
