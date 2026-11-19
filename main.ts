// main.ts — copies POST.json from the repository root to the output directory.
// Node 22, standard library only. No network, no wall clock, no files outside
// the repository. Deterministic: two runs write identical bytes.
import { copyFile, mkdir } from "node:fs/promises";
import { join, resolve } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = resolve(join(botDir, "POST.json"));
const destinationDir = resolve(outputDir);
const destination = join(destinationDir, "POST.json");

try {
  await mkdir(destinationDir, { recursive: true });
  await copyFile(source, destination);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`main.ts: failed to copy ${source} to ${destination}: ${reason}`);
  process.exit(1);
}
