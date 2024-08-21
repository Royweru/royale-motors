import { Button } from "@/components/ui/button";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout44Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const WarrantyOption = (props: Layout44Props) => {
  const { heading, description, image } = {
    ...Layout44Defaults,
    ...props,
  } as Props;
  return (
    <section className="relative px-[5%] py-12 xl:py-16 rounded-3xl mb-4">
      <div className=" max-w-xl grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <h3 className="mb-5 h3 md:h2">{heading}</h3>
        <p className="text-base font-light  text-white-dark lg:text-white">
          {description}
        </p>
      </div>
      <div className=" w-full flex justify-center items-center">
        <Button variant={"outline"} className="  font-semibold">
          <Link href={"/feature"}>Learn more...</Link>
        </Button>
      </div>
      <div className="absolute inset-0 -z-10 rounded-3xl">
        <img
          src={image.src}
          className="size-full object-contain rounded-3xl"
          alt={image.alt}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
    </section>
  );
};

export const Layout44Defaults: Layout44Props = {
  heading: "Warranty Options & Maintenance Package",
  description:
    "we offer a range of warranty options designed to suit your needs, from basic coverage to comprehensive plans that cover all major components of your vehicle.In addition to our warranty options, we offer flexible maintenance packages to keep your vehicle running smoothly. Our maintenance plans cover essential services like oil changes, tire rotations, brake inspections, and more.",
  image: {
    src: "/maintance.png",
    alt: "Placeholder image",
  },
};
