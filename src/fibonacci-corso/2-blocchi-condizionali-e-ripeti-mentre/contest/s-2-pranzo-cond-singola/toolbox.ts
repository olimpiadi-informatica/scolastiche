import type { ToolboxInfo } from "@olinfo/quizms-mdx/blockly-types";

export const toolbox: ToolboxInfo = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logica",
      categorystyle: "logic_category",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
      ],
    },
    {
      kind: "category",
      name: "Cicli",
      categorystyle: "loop_category",
      contents: [
        {
          kind: "block",
          type: "controls_repeat_ext",
          inputs: {
            TIMES: {
              block: {
                type: "math_number",
                fields: { NUM: 10 },
              },
            },
          },
        },
      ],
    },
  ],
};
