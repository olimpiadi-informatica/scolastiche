declare module "*.svg" {
  const image: {
    src: string;
    width: number;
    height: number;
  };
  export default image;
}

declare module "*.md" {
  import type { ComponentType } from "react";
  const content: ComponentType<any>;
  export default content;
}

declare module "*.mdx" {
  import type { ComponentType } from "react";
  const content: ComponentType<any>;
  export default content;
}
