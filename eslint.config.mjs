import configs from "@olinfo/eslint";

export default [
    ...configs,
    {
        files: ["src/**/*.{jsx,tsx}"],
        ignores: ["src/asy_library/**/*"],
        rules: {
            "no-var": "error",
        }
    }
];
