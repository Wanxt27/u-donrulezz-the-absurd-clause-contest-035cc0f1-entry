// The Absurd Clause Contest — make.fun entry (u-donrulezz-the-absurd-clause-contest-035cc0f1)
// Writes a single original Terms-of-Service-style clause — one line, at most
// 200 characters — to /output/entry.txt. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "By accepting these Terms, the User hereby grants the Company a perpetual, royalty-free license to the User's shadow, including the right to use it in advertising without notice or compensation.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate (competition rules): /output/entry.txt must be UTF-8, 1-200 characters,
// not blank, and a single line. The clause below is one sentence, so the
// single-line check also keeps the "one sentence" requirement honest.
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.includes("  ")) {
  throw new Error("entry must not contain double spaces");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUT_FILE}`);
