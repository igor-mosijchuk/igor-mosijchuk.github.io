const container = document.getElementById("myCarousel");
const options = { Dots: false };

new Carousel(container, options, { Thumbs });

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
