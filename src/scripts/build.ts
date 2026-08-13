import { $ } from "bun";

/**
 * Build the publishable SDK runtime: an ESM bundle in `build/`.
 *
 * Runtime dependencies (graphql, graphql-request, gql.tada) are kept external so
 * the consumer resolves them from `dependencies` rather than inlining a second
 * copy into the bundle.
 *
 * Types are published from the TypeScript source (`types` points at
 * `src/index.ts`), not emitted here: the generated client's gql.tada documents
 * carry inferred types too large for `tsc` to serialize into `.d.ts`
 * (TS7056), which is why a gql.tada package ships its source for types and a
 * compiled bundle for runtime.
 */
const EXTERNAL = ["graphql", "graphql-request", "gql.tada"];

const build = async () => {
	await $`rm -rf build`;

	console.log("Bundling...");
	const result = await Bun.build({
		entrypoints: ["src/index.ts"],
		outdir: "build",
		target: "node",
		external: EXTERNAL,
	});
	if (!result.success) {
		for (const log of result.logs) console.error(log);
		throw new Error("bundle failed");
	}
	console.log("Bundling complete.");
};

build().catch((err) => {
	console.error(err);
	process.exit(1);
});
