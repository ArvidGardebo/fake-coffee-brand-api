import React from "react";

export const PrevButton = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      button="true"
      onClick={onClick}
      disabled={!enabled}
      aria-label="Previus slide"
    >
      <svg
        width="44"
        height="45"
        viewBox="0 0 44 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.32366 25.2679C6.56083 26.534 16.7822 28.4957 20.5011 33.6225C22.947 37.007 24.5726 35.8639 22.4921 32.2347C20.9644 29.5807 17.9824 26.9742 14.7017 25.4299C18.7838 25.2883 12.5521 25.6076 37.3359 24.064C42.3195 23.7446 42.9362 23.3289 42.4774 21.9784C41.8711 20.2928 40.7015 19.4521 39.009 19.496C38.9655 19.4994 12.8093 20.7685 12.873 20.2222C12.8798 20.1351 13.6338 19.6219 14.5689 19.0084C20.9475 14.9217 23.5288 11.4965 21.4481 9.83785C20.4696 9.04713 18.4115 9.89864 14.7612 12.5839C13.2462 13.6968 9.6899 16.0067 6.82745 17.7433C-0.422526 22.1787 -1.06964 23.5496 3.32366 25.2679Z"
          fill="#171717"
        />
      </svg>
    </button>
  );
};

export const NextButton = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      className="embla__button embla__button--next"
      button="true"
      onClick={onClick}
      disabled={!enabled}
      aria-label="Next slide"
    >
      <svg
        width="43"
        height="44"
        viewBox="0 0 43 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.1056 20.0319C36.9506 18.573 26.8659 15.999 23.4627 10.6575C21.2252 7.13179 19.5336 8.17486 21.3917 11.9228C22.7567 14.664 25.5762 17.4454 28.7579 19.1846C24.6748 19.08 30.9144 19.1368 6.08258 19.1843C1.08881 19.2029 0.448126 19.5807 0.824774 20.9564C1.32835 22.6754 2.44523 23.5851 4.13726 23.6432C4.18095 23.6425 30.3661 23.9516 30.2695 24.493C30.2575 24.5796 29.474 25.0464 28.5035 25.6024C21.8904 29.2974 19.1074 32.5609 21.0844 34.3419C22.0134 35.1901 24.1191 34.4642 27.9245 32.0037C29.5039 30.9841 33.1929 28.8927 36.1548 27.3317C43.6588 23.3412 44.3873 22.0118 40.1056 20.0319Z"
          fill="#171717"
        />
      </svg>
    </button>
  );
};
