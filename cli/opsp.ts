import * as yargs from "yargs";
import { opsp } from "./core";

const argv = yargs(process.argv.slice(2))
  .usage("Usage: $0 -s <openapiFile> -o <outputDir>")
  .option("s", {
    alias: "spec",
    describe: "Path to the OpenAPI specification file",
    demandOption: true,
    type: "string",
  })
  .option("o", {
    alias: "output",
    describe: "Output directory for generated files",
    demandOption: true,
    type: "string",
  }).argv as unknown as { spec: string; output: string };

opsp.ApiCallGenerator(argv.spec, argv.output);
