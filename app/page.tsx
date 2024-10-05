import { GetMakes } from "@/actions/GetMakes";
import { GetModels } from "@/actions/GetModels";
import { GetTypes } from "@/actions/GetTypes";

import { Contact } from "@/components/contact";
import { Faq } from "@/components/FAQ";
import { FinanceFeature } from "@/components/feature/finance";
import { Test } from "@/components/feature/test";

import { Hero } from "@/components/hero";

import { BodyFilter } from "./(routes)/browse/_components/body-filter";
export default async function Home() {
  const models = await GetModels();
  const makes = await GetMakes();
  const bodytypes = await GetTypes();

  return (
    <div className="  h-full relative w-full">
      <Hero models={models} makes={makes} bodyTypes={bodytypes} />
      <BodyFilter />
      <FinanceFeature />
      <Test />
      <Faq />
      <Contact />
    </div>
  );
}
