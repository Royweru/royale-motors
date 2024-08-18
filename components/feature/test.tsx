import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { Button } from "../ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Test = (props: Layout1Props) => {
  const { tagline, heading, description, buttons, image } = {
    ...Layout1Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-8 bg-txt-primary">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 h1 text-red-primary">{heading}</h2>
            <p className="md:text-md text-xl text-black">{description}</p>
            <div className="mt-4 flex items-center font-semibold gap-x-4 md:mt-6">
              <Button className=" w-full font-semibold" variant={"secondary"}>
                Contact
              </Button>
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout1Defaults: Layout1Props = {
  tagline: "Tagline",
  heading: "Go for a test drive today !",
  description:
    "Experience the thrill of driving your dream car. Schedule a test drive or contact us for more information.",
  buttons: [
    { title: "Schedule", variant: "secondary" },
    {
      title: "Contact",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: "/test2.png",
    alt: "Placeholder image",
  },
};
