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
        <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
          {heading}
        </h3>
        <p className="text-base text-text-alternative md:text-md">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 -z-10 rounded-3xl">
        <img
          src={image.src}
          className="size-full object-contain rounded-3xl"
          alt={image.alt}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
};

export const Layout44Defaults: Layout44Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  image: {
    src: "/maintance.png",
    alt: "Placeholder image",
  },
};
