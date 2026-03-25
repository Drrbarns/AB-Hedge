
import type { Metadata } from "next";
import CountryWidePage from "../page";

export const metadata: Metadata = {
  title: "Country Wide Solutions",
  description: "Expanded supply and procurement solutions from Country Wide.",
};

export default function SolutionsPage() {
  return <CountryWidePage />;
}
