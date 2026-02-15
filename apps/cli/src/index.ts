import { Command } from "@effect/cli";
import { BunContext, BunRuntime } from "@effect/platform-bun";
import { start } from "@repo/tui";
import { Effect } from "effect";

const command = Command.make("trading-tui", {}, () =>
	Effect.sync(() => start()),
);

const cli = Command.run(command, {
	name: "Trading TUI",
	version: "v0.0.0",
});

cli(process.argv).pipe(Effect.provide(BunContext.layer), BunRuntime.runMain);
