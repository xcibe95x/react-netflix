const MOVIE_ID = 338953;

const btnHover = document.querySelector(".card-more");
const dialogContainer = document.querySelector(".opacity-overlay");
const crossBtn = document.querySelector(".dialog__cross");

btnHover.addEventListener("click", (outerEvent) => {
  outerEvent.stopPropagation();
  dialogContainer.parentElement.style.overflow = "hidden";
  dialogContainer.style.display = "block";

  document.body.addEventListener("click", closeDialogOnClickOut);
});

// close dialog manually
crossBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dialogContainer.style.display = "none";
  dialogContainer.parentElement.style.overflow = "unset";
  document.body.removeEventListener("click", closeDialogOnClickOut);
});

/**
 * Fills dialog with data from {@linkcode data} object.
 * @param {object} data Movie data object
 */
async function fillDialog(data) {
  let logo = await fetchMovieLogo(data.id);
  // add img
  document.querySelector(".dialog__img").src = posterAPI + data.backdrop_path;
  // add logo
  document.querySelector(".dialog__logo").src = logo;
  // add runtime
  document.querySelector(".maturity-number").nextElementSibling.innerText = formatRuntime(data.runtime);
  document.querySelector(".description").innerText = data.overview;
  // cast
  let castContainer = document.querySelector(".right-section:first-child");
  castContainer.innerHTML = `<span class="grey">Cast: </span>`;
  let cast = await fetchCast(data.id);
  cast.cast.slice(0, 5).forEach((actor, i) => {
    castContainer.innerHTML += `<a href="">${actor.name}${i == 4 ? "" : ", "}</a>`;
  });
  // genres
  let genresContainer = document.querySelector(".right-section:last-child");
  genresContainer.innerHTML = "<span class='grey'>Genres: </span>";
  data.genres.forEach((genre, i) => {
    genresContainer.innerHTML += `<a href="">${genre.name}${i == data.genres.length - 1 ? "" : ", "}</a>`;
  });

  // similar movies
  const similarContainer = document.getElementById("similar-movies");
  similarContainer.innerHTML = "";
  let films = await fetchSimilarMovies(data.id);
  films.results.forEach((film) => appendSimilarFilm(similarContainer, film));
}

/**
 * Click event handler for the document's body element. It closes the previously opened dialog.
 * @param {Event} e Click event
 */
function closeDialogOnClickOut(e) {
  if (!dialogContainer.children[0].contains(e.target)) {
    dialogContainer.style.display = "none";
    dialogContainer.parentElement.style.overflow = "unset";
    document.body.removeEventListener("click", closeDialogOnClickOut);
  }
}

/**
 * Creates similar movie card generated using {@linkcode film} data and appends it to {@linkcode container}
 * @param {HTMLElement} container `HTMLElement` to append similar movie card
 * @param {object} film object containing film data
 */
function appendSimilarFilm(container, film) {
  fetchMovieLogo(film.id).then((logo) => {
    container.innerHTML += `
      <div class="card">
          <div class="card__img-wrapper">
              <img class="card__img" src="${posterAPI}${film.backdrop_path}" alt="backdrop img" />
              <img class="card__logo" src="${logo}" alt="" />
          </div>
          <div class="card__body">
              <div class="card__controls">
                  <span class="maturity-number">VM14</span>
                  <span class="thin">${film.release_date.substr(0, 4)}</span>
                  <button class="dialog__button button--round-dark">
                      <i class="far fa-plus"></i>
                  </button>
              </div>
              <p class="grey">
                  ${film.overview}
              </p>
          </div>
      </div>
  `;
  });
}
