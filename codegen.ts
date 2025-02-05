import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

import { URQLEndpoint } from "./src/config";

dotenv.config(); // Some scripts don't load env vars from .env files

const config: CodegenConfig = {
  schema: URQLEndpoint(),
  documents: ["src/**/*.gql.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
