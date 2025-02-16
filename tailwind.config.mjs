import olinfoPresets from "@olinfo/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [olinfoPresets],
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}",
    "./node_modules/@olinfo/quizms/dist/**/*.js",
    "./node_modules/@olinfo/quizms-mdx/dist/src/**/*.js",
    "./node_modules/@olinfo/quizms-mdx/dist/*.js",
    "./node_modules/@olinfo/quizms/node_modules/@olinfo/react-components/dist/**/*.js",
    "./node_modules/@olinfo/react-components/dist/**/*.js",
  ],
};
