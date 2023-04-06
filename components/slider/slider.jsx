import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton } from "./sliderArrowsDotsButtons";

import Image from "next/image";

import global from "../../styles/global.module.scss";

const Slider = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

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
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onShowAll = () => {
    !show ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (isLoading) {
    return (
      <div>
        Loading... <span style={{ display: "flex" }}></span>
        <Image
          src="/loadingcoffeebean.jpg"
          alt="moving coffeebeans"
          height={100}
          width={100}
        />
      </div>
    );
  }

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.map((el, index) => (
              <div className="embla__slide" key={index}>
                <div className="slide-container">
                  <div className="image-container">
                    <img
                      className="embla__slide__img"
                      src={el.image_url}
                      alt="A bag of coffee a brand"
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
                      <li
                        id="column"
                        className="mobile-hide"
                        style={{ display: show ? "block" : "none" }}
                      >
                        <span className="bold">description:</span>
                        <span>{el.description}</span>
                      </li>
                      <li
                        className="mobile-hide"
                        style={{ display: show ? "block" : "none" }}
                      >
                        <span className="bold">price:</span>
                        <span>{el.price}</span>
                      </li>
                      <li
                        className="mobile-hide"
                        style={{ display: show ? "block" : "none" }}
                      >
                        <span className="bold">region:</span>
                        <span>{el.region}</span>
                      </li>
                      <li
                        className="mobile-hide"
                        style={{ display: show ? "block" : "none" }}
                      >
                        <span className="bold">weight:</span>
                        <span>{el.weight}</span>
                      </li>
                      <li
                        className="mobile-hide"
                        style={{ display: show ? "block" : "none" }}
                      >
                        <span className="bold">roast_level:</span>
                        <span>{el.roast_level}</span>
                      </li>
                      <li
                        id="column"
                        className="mobile-hide"
                        style={{ display: show ? "block" : "none" }}
                      >
                        <span className="bold">flavor_profile:</span>
                        <span>[{el.flavor_profile.join(", ")}]</span>
                      </li>
                      <li
                        id="column"
                        className="mobile-hide"
                        style={{ display: show ? "block" : "none" }}
                      >
                        <span className="bold">grind_option:</span>
                        <span>[{el.grind_option.join(", ")}]</span>
                      </li>
                      <button
                        className={`btn-show ${
                          !show ? global.secondaryBtn : global.clickedSecBtn
                        }`}
                        onClick={onShowAll}
                      >
                        {!show ? "Show output" : "Hide output"}
                      </button>
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
