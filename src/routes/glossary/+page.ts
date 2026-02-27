import glossary from "../../data/glossary.json";
import type {PageLoad} from "./$types";

export const load = (() => ({
  glossary: glossary.slice().sort((a, b) => a.title.localeCompare(b.title)),
})) satisfies PageLoad;
