# Tv Shows browser

The application allows to browse through few tv shows based on their genre. Since the api.tvmaze.com doesn’t provide a REST API endpoint to get only genres, it has been done after retrieving all the shows (only one page however the application can grow further). The user can look up a tv show by typing the name in the search bar. The results are filtered simultaneously.

## Structure
The code has been divided into reusable components to limit the repetition of the same functionalities. Data in the main component that displays all tv shows is retrieved from store and passed via props to its children. Same for the detailed view of a single tv show: first the parent computes the data and when the data is available passes it via props to its child. This solution allows for future implementations without the necessity of rewriting the existing components.

## Why store?
The task requirement "when the user clicks on a TV show then the details of that TV show should be displayed on another screen" caused me some confusion. At first, I assumed that the more detailed view of a tv show is rendered in a new tab. In that case the response from the API call (with all the tv shows) wouldn’t have to be stored in Vuex store as we would not refresh the page but open a new tab.
However, if the detailed information of a tv show is rendered within the same tab, but with a new path the store is needed to reduce the amount of API calls made.

## Vue Router
I have introduced Vue Router to redirect the user from the Home page to the view with more details of the tv show. After clicking on a certain show, as default the user remains on the same tab. The id of the chosen tv show is passed with router-link properties and retrieved in the component that is rendered on redirected path. If the user opens the tv show is a new tab by providing the exact matching path, a new API call is made to retrieve only that tv show. This way I make sure that data is still available for the user even if the store is empty.

## Styling
Introduced sass to have more control over the design of the page. Reusable variables like colors or mixins have been used.

## Testing
The basic configuration has been implemented; however not full coverage has been achieved.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
