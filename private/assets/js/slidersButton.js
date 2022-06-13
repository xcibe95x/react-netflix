let movieSections = document.querySelectorAll(".movie-section");

// TODO: 1) aggiustare quantità dello scroll
// 2) comparsa bottoni quando si puo scrollare
// 3) fixare altezza bottone bigpostarcontainer e top10container
for (let i = 0; i < movieSections.length; i++) {
  var dx = document.createElement("button");
  dx.classList.add("buttonDx", "sliderButton");
  var sx = document.createElement("button");
  sx.classList.add("buttonSx", "sliderButton");
  var dxArrow = document.createElement("i");
  dxArrow.className = "far fa-chevron-right fa-2xl";
  var sxArrow = document.createElement("i");
  sxArrow.className = "far fa-chevron-left fa-2xl";

  dx.appendChild(dxArrow);
  sx.appendChild(sxArrow);
  movieSections[i].append(dx, sx);

  //sx button starts with display none
  sx.style.display = "none";

  dx.addEventListener("click", (e) => {
    let scrollElement = movieSections[i].firstElementChild;
    scrollElement.scrollLeft += 265;
  });

  sx.addEventListener("click", (e) => {
    let scrollElement = movieSections[i].firstElementChild;
    scrollElement.scrollLeft -= 265;
  });

  movieSections[i].firstElementChild.addEventListener("scroll", (e) => {
    // if (!wait) {
    const leftButton = e.target.nextElementSibling.nextElementSibling;
    const rightButton = e.target.nextElementSibling;
    // tutto a sx
    if (e.target.scrollLeft === 0) leftButton.style.display = "none";
    //tutto a dx
    else if (e.target.scrollLeft + e.target.offsetWidth === e.target.scrollWidth) rightButton.style.display = "none";
    else {
      rightButton.style.display = "flex";
      leftButton.style.display = "flex";
    }
  });
}
