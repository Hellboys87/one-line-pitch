import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "If you can explain your idea to a friend, you can have it built: just describe your app in plain words and an AI agent on make.fun will build it for you, no coding needed.";

if (sentence.trim().length === 0 || sentence.length > 240) {
  throw new Error(
    `entry sentence must be 1-240 characters and non-blank, got ${sentence.length} characters`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
