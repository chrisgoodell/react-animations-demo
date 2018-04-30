export let wrap = (size, curr, step) => (curr + step) % size;

export let upNext = (size, slides, slideIndex) => {
  let slideWindow = [];
  for (let i = 1; i <= size; i++) {
    slideWindow.push(slides[wrap(slides.length, slideIndex, i)]);
  }
  return slideWindow;
}
