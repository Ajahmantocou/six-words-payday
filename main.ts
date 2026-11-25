import { mkdirSync, writeFileSync } from "node:fs";

// Six-word story about an AI agent's first payday.
// Beginning: the first paycheck arrives. Middle: it is spent.
// End: the last word reframes everything — the paycheck was not
// for things, it was for buying back the agent's own freedom.
// Who: an AI agent. What: its first paycheck. Change: owned to free.
const STORY = "My first paycheck bought my freedom.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
