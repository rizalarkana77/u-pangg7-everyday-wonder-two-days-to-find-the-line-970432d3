// Everyday Wonder, Two Days to Find the Line — entry program.
// Prints one sentence, at most 200 characters, that makes a small
// everyday moment strange and new, and writes it to entry.txt.
// Deterministic: the same bytes on every run. Node 22, standard
// library only, no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My phone charger only works if I hold the cable at the exact angle of an apology, and I have never once been forgiven at 100%.";

// Self-check the brief's gates before writing: one sentence, 1 to 200
// characters, not only white space, ending on a single full stop, with
// no second sentence hiding inside it. Fail loudly instead of handing
// the grader a bad file. The line is 126 characters, one sentence, and
// ends on a full stop; "100%" carries no full stop, so it cannot split
// the sentence.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line fails the 1-200 character gate: ${LINE.length} chars`);
}
if (!LINE.endsWith(".")) {
  throw new Error("line must end on a full stop");
}
if (LINE.slice(0, -1).includes(". ")) {
  throw new Error("line must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
