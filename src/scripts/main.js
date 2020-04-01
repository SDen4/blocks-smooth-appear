const blocks = document.querySelectorAll('.block');

//detection of element visibility 
function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();
  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;
  return (top + height >= 0) && (height + window.innerHeight >= bottom); 
};

addEventListener('scroll', function() {
  for (let block of blocks) {
    if ( isPartiallyVisible(block) ) {
      block.classList.add("block__active");
    };
  };
});