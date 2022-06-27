# Netflix clone made with React (typescript)

Collaborative project in which we wanted to reproduce the Netflix user selection and main pages.
We used React (v. 18.1.0) and plain CSS Modules for the styling.

## Team

### Team Leader

- **[Mauro Leoci][cibe]**

### Team members

- [Valerio Pescatori][vale]
- [Davide L'Abbate][god-davide]
- [Leony Manalili][leony]

## Live Version

Live version is available [HERE][godflex-live]

## Run project locally

To run the project locally simply clone the repo and then run

```bat
C:\path\to\repo> npm install
```

In order to make GET requests to the TMDB Api you'll need to generate your api key from the [TMDB Api Documentation][tmdb-api].<br>
Once you've retrieved your api key you need to paste it in the `.env` file in the root folder.

You're all set up! Simply run:

```bat
C:\path\to\repo> npm start
```

You're preferite browser should open up automatically, if it doesn't then you can access the website at [localhost:3000](http://localhost:3000).

### Tech Stack

- React (v. 18.1.0)
- Typescript (v. 4.7.3)
- CSS Modules

### Tools used

- React Intersection Observer (v. 9.3.3)
- Fetch API
- The Movie Database API

## Design choices

We encountered a few challenges while working on this project, I'm going to describe the main ones and walk though the solution we developed.

### Initial page load was too slow due to too many GET requests

Depending on the user's connection the website could potentially take too long to initially render all the movie cards in the main page, this was due to the high number of fetch requests.
We decided to go for a lazy loading approach: we delayed the fetch request of each row at the moment in which it first enters the viewport, so when the page loads initially, only the first 1 to 3 rows are making their fetch request (depending on your device++ screen size). This made the initial load way faster and improved the website performances.

### Context for currently displayed movie

When the user hovers over a movie card a Modal appears after a slight 750ms delay, then if the user clicks on the "More info" button (furthes to the right inside the modal) a Dialog appears with more details about the movie and a "Similar Movies" section.
To track which movie had to be shown in those two component we created a `MovieContext` that stores information about the movie, the Modal position, and setters and getters to open and close both the Modal and the Dialog.
This approach avoided a very annoying prop drilling, serving its purpose efficiently.

[//]: # "Reference links for the body"
[vale]: https://github.com/valerio-pescatori/
[godflex-live]: https://valerio-pescatori.github.io/react-netflix/
[cibe]: https://github.com/xcibe95x/
[god-davide]: https://github.com/DavideLAbbate/
[leony]: https://github.com/LeonyMalasanManalili/
[tmdb-api]: https://www.themoviedb.org/documentation/api/
