import Splide from "@splidejs/splide";

const slider = () => {
  const slider1 = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    gap: 30,
    breakpoints: {
      992: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  }).mount();
};

export default slider;
