import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "./sliderArrowsDotsButtons";
import imageByIndex from "./imageByIndex";

const Slider = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.map((el, index) => (
              <div className="embla__slide" key={index}>
                {/* <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div> */}
                <div className="slide-container">
                  <div className="image-container">
                    <img
                      className="embla__slide__img"
                      src={imageByIndex(index).src}
                      alt="Your alt text"
                    />
                  </div>
                  <div className="text-container">
                    <ul>
                      <li>
                        <span className="bold">id:</span>
                        <span>{el.id}</span>
                      </li>
                      <li>
                        <span className="bold">name:</span>
                        <span>{el.name}</span>
                      </li>
                      <li id="column">
                        <span className="bold">description:</span>
                        <span>{el.description}</span>
                      </li>
                      <li>
                        <span className="bold">price:</span>
                        <span>{el.price}</span>
                      </li>
                      <li>
                        <span className="bold">region:</span>
                        <span>{el.region}</span>
                      </li>
                      <li>
                        <span className="bold">weight:</span>
                        <span>{el.weight}</span>
                      </li>
                      <li>
                        <span className="bold">roast_level:</span>
                        <span>{el.roast_level}</span>
                      </li>
                      <li id="column">
                        <span className="bold">flavor_profile:</span>
                        <span>[{el.flavor_profile.join(", ")}]</span>
                      </li>
                      <li id="column">
                        <span className="bold">grind_option:</span>
                        <span>[{el.grind_option.join(", ")}]</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </>
  );
};

export default Slider;
