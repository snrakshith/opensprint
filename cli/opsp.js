"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var core_1 = require("./core");
var argv = yargs(process.argv.slice(2))
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
}).argv;
core_1.opsp.ApiCallGenerator(argv.spec, argv.output);
