"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";

type ImageProps = {
  url: string;
  id: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery15Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const CarGallery = (props: Gallery15Props) => {
  const { heading, description, images } = {
    ...Gallery15Defaults,
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section>
      <div className="px-[5%] py-6 relative">
        <div className="">
          <div className="mb-3 text-center md:mb-5">
            {/* <h2 className=" h3 lg:h2">{heading}</h2> */}
          </div>
          {/* for all available options: https://www.embla-carousel.com/api/options/ */}
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            className="overflow-hidden"
          >
            <div className="relative">
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="px-0 md:px-16 lg:px-28">
                    <div className="relative w-full pt-[66.66%]">
                      <img
                        src={image.url}
                        alt={image.url}
                        className="absolute inset-0 size-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious className="hidden bg-white md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden bg-white md:flex md:size-12 lg:size-14" /> */}
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx(
                    "relative mx-[3px] inline-block size-2 rounded-full",
                    {
                      "bg-white": current === index + 1,
                      "bg-black-2": current !== index + 1,
                    }
                  )}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export const Gallery15Defaults: Gallery15Props = {
  heading: " Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
