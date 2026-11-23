import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "If you can explain your idea to a friend, you can have it built: just describe your app in plain words and an AI agent on make.fun will make it for you, no coding needed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
