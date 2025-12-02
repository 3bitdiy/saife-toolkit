import resources from "../../data/resources.json";
import type {PageLoad} from "./$types";

export const load = (() => ({
    resources,
  })) satisfies PageLoad;
