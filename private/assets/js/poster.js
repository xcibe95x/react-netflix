const mediaPlayer = document.querySelector(".media-player");
const dialog = document.querySelectorAll(".dialog");
let runtime = document.querySelector(".compatible > span:last-child");

function paintPlayer() {
  let apiTimer;
  let mediaPlayerShowTimer;
  let moviePoster = document.querySelectorAll(".movie-poster");
  for (let i = 0; i < moviePoster.length; i++) {
    if (window.innerWidth < 480) {
      moviePoster[i].addEventListener("click", async (e) => {
        const id = e.target.getAttribute("movie");
        const data = await fetchMovieData(id);
        fillDialog(data);
        openDialog(e);
      });
      continue;
    }

    moviePoster[i].addEventListener("mouseenter", (e) => {
      const id = e.target.getAttribute("movie");

      // fetch movie data after 500ms
      apiTimer = setTimeout(() => {
        // fetch movie data then fills the card
        fetchMovieData(id).then((data) => {
          // fill media player with data
          fillMediaPlayer(data);
          // fill dialog with data
          fillDialog(data);
        });
      }, 700);

      // show media player after 650ms
      mediaPlayerShowTimer = setTimeout(() => {
        let rect = moviePoster[i].getBoundingClientRect();
        mediaPlayer.style.top = cumulativeOffset(moviePoster[i]) + "px";
        mediaPlayer.style.left = rect.x + "px";
        mediaPlayer.style.display = "block";
      }, 1000);
    });

    // if the card has not appeared yet and the user mouseleaves the movieposter,
    // then the intervals must be cleared
    moviePoster[i].addEventListener("mouseleave", () => {
      // check if timer is set, then clears it
      if (apiTimer != undefined) {
        clearTimeout(apiTimer);
        clearTimeout(mediaPlayerShowTimer);
      }
    });
  }

  mediaPlayer.addEventListener("mouseleave", (e) => {
    // hide card
    mediaPlayer.style.display = "none";
    mediaPlayer.children[3].innerHTML = "";
    runtime.innerText = "";
  });
}

/**
 * Fills media player with data coming from {@linkcode fetchMovieData} previous call.
 * @param {object} data
 */
function fillMediaPlayer(data) {
  mediaPlayer.children[0].src = posterAPI + data.backdrop_path;
  mediaPlayer.children[3].innerHTML = "";
  data.genres.forEach((genre) => {
    mediaPlayer.children[3].innerHTML += `
            <span>${genre.name}</span>
            `;
  });
  runtime.innerText = formatRuntime(data.runtime);
}

/**
 * Calculate and returns the cumulative `offsetTop` of the provided `element` from the top of the document.
 * @param {HTMLElement} element
 * @returns Total `offsteTop` of the element from the top of the document.
 */
function cumulativeOffset(element) {
  var top = 0;
  do {
    top += element.offsetTop || 0;
    element = element.offsetParent;
  } while (element);

  return top;
}

/**
 * Convert number of minutes to a formattet string of type "xxHyyM" that represents the movie runtime.
 * @param {number} minutes number of minutes
 * @return {string} formatted string
 */
function formatRuntime(minutes) {
  return "" + Math.floor(minutes / 60) + "h " + (minutes % 60) + "min";
}
