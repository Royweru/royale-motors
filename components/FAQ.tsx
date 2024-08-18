import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";

import type { ButtonProps } from "@relume_io/relume-ui";
import { Button } from "./ui/button";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  footerHeading: string;
  footerDescription: string;
  button: ButtonProps;
  questions: QuestionsProps[];
};

export type Faq1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Faq = (props: Faq1Props) => {
  const {
    heading,
    description,
    questions,
    footerHeading,
    footerDescription,
    button,
  } = {
    ...Faq1Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-12">
      <div className="container mx-auto max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 h1 text-red-primary">{heading}</h2>
          <p className="md:text-md font-light">{description}</p>
        </div>
        <Accordion type="multiple">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5  h5 text-white">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6 text-md text-white-grey">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3  md:text-3xl font-semibold text-xl  text-white-dark ">
            {footerHeading}
          </h4>
          <p className="md:text-md">{footerDescription}</p>
          <div className="mt-2 md:mt-4">
            <p className=" relative w-full font-light text-white-grey text-md">
              Contact us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq1Defaults: Faq1Props = {
  heading: "FAQs",
  description: "Get an answer to all those questions you have",
  questions: [
    {
      title: "What documents do I need to bring when purchasing a car ?",
      answer:
        "When purchasing a car, you'll need to bring a valid driver’s license, proof of insurance, and, if applicable, any trade-in documents. If you’re financing the vehicle, please also bring proof of income, residency, and a method of payment for the down payment.",
    },
    {
      title: " Do you offer financing options ?",
      answer:
        "Yes, we offer a variety of financing options to suit different credit profiles. Our finance team works with multiple lenders to secure the best possible terms for you. We’ll guide you through the process to make it as smooth as possible.",
    },
    {
      title: "Can I trade in my current vehicle ?",
      answer:
        "Absolutely! We accept trade-ins and offer competitive trade-in values. Bring your current vehicle, and we’ll conduct a quick appraisal to provide you with a fair offer that can be applied toward your new purchase.",
    },
    {
      title: "Do you offer warranties on your vehicles ?",
      answer:
        "Yes, most of our vehicles come with manufacturer warranties, and we also offer extended warranty options for added peace of mind. Our sales team can provide more details based on the specific vehicle you’re interested in.",
    },
    {
      title: "What is the process for scheduling a test drive ?",
      answer:
        "Scheduling a test drive is easy! You can book an appointment online through our website, or simply give us a call. We recommend scheduling ahead of time to ensure the vehicle you're interested in is available when you arrive.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "Make sure to reach out to us",
  button: {
    title: "Contact",
    variant: "secondary",
  },
};
