import glossary from "../../data/glossary.json";
import type {PageLoad} from "./$types";

export const load = (() => ({
    glossary,
  })) satisfies PageLoad;
