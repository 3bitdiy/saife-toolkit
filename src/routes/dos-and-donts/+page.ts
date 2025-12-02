import dosAndDonts from "../../data/dosAndDonts.json";
import type {PageLoad} from "./$types";

/** @type {import('./$types').PageLoad} */
export const load = (() => {
  const dos = dosAndDonts.filter(({kind}) => kind === "Do");
  const donts = dosAndDonts.filter(({kind}) => kind === "Don't");

  return {
    dos,
    donts,
  };
}) satisfies PageLoad;
