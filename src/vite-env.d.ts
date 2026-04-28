declare module "*.md" {
  const content: string;
  export default content;
}

declare module "*.md" {
  const data: {
    projects: import("@/types").Project[];
  };
  export default data;
}
