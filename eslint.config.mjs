import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    },
  },
  {
    files: ["scripts/**/*.js"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  globalIgnores([".next/**", "node_modules/**", "next-env.d.ts"]),
]);
