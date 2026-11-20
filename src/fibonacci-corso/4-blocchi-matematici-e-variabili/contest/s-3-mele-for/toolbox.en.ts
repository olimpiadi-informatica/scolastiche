import type { ToolboxInfo } from "@olinfo/quizms-mdx/blockly-types";

export const toolbox: ToolboxInfo = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Variables",
      categorystyle: "variable_category",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Math",
      categorystyle: "math_category",
      contents: [
        {
          kind: "block",
          type: "math_number",
          fields: { NUM: 123 },
        },
        {
          kind: "block",
          type: "math_arithmetic",
          fields: {
            OP: "ADD",
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Logic",
      categorystyle: "logic_category",
      contents: [
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "controls_if",
          extraState: {
            hasElse: "true",
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      categorystyle: "loop_category",
      contents: [
        {
          kind: "block",
          type: "controls_for",
          fields: {
            VAR: "i",
          },
          inputs: {
            FROM: {
              block: {
                type: "math_number",
                fields: { NUM: 1 },
              },
            },
            TO: {
              block: {
                type: "math_number",
                fields: { NUM: 10 },
              },
            },
            BY: {
              block: {
                type: "math_number",
                fields: { NUM: 1 },
              },
            },
          },
        },
      ],
    },
  ],
};

export const toolboxEn = toolbox;
