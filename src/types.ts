export type DoAndDont = {
  kind: "do" | "dont";
  text: string;
};

export type Glossary = {
  title: string;
  description: string;
  sections: Array<{title: string; description: string}>;
};

export type Resource = {
  title: string;
  subtitle: string;
  href: string;
  category: string;
  description: string;
  tags: string[];
};
