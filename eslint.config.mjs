import configs from "@olinfo/eslint";

export default [
    ...configs,
    {
        files: ["src/**/*.jsx"],
        ignores: ["src/asy_library/**/*"],
    }
];
