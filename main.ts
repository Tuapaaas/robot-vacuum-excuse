// The Robot Vacuum's Best Excuse — make.fun entry.
// One line, written fresh: the excuse a robot vacuum gives for missing a spot.
// The program writes that line to <MAKEFUN_OUTPUT_DIR>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I did not miss that spot — I left it untouched as a control sample, so future vacuums can study dust in its natural habitat.";

// Gate: 1-140 UTF-8 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry out of gate: ${LINE.length} characters`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
