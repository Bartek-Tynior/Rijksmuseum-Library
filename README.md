# Rijksmuseum-Library

This project is a simple application to display data fetched from the Rijksmuseum API. It contains an index page to allow you to search and filter data returned from the API and a detail page, which shows in-depth informaion about the selected art piece.

This application is built using React JS framework and Vite tooling.
React JS is one of the most popular JavaScript framework for bulding simple, fast and scalable frontends of web applications and it comes with some advantages. The React basically allows developers to utilize individual parts of their application on both client-side and the server-side, which ultimately boosts the speed of the development process. React comes also with the reusable custom componetns, which can be build in JSX, an optional syntax extension.
For this project I've also used the vite tooling which is a build tool that aims to provide a faster and leaner development experience for modern web projects.
Vite’s ability to pre-bundle NPM dependencies and convert CommonJS/UMD modules to ESM using esbuild, means that Vite’s cold start times are significantly faster than any other JavaScript-based bundler.

The project also contains the React Query, axios and Fuse JS libraries. The Axios is a basic JavaScript library used to make HTTP
requests from node js or XMLHttpRequests from the browser. It is really popular and it became the standard over the years, but I choosed to combine it with React Query library. The biggest advantage of the React Query is that it gives us caching of server data out of the box with cache invalidation and request deduping.
Simple said: if the data is already there, React Query will simply return it, avoiding extra network requests!

I've also used the Fuse JS library for fuzzy search in my application. It provides a search in Object Array and is really easy to implement.
It's also a lightweight library, so it doesn't cost you any performence implemnting it in your application.

For the animations in my application I've used the framer motion library, which is a really extensive animation library for React JS. It's one of the most common
animation libraries for React JS and the community is big, so that's why I have choosed for this one.

# Anagrams

In the project files you can also find the anagrams.js-file, which basically find the anagrams adn group them. This is done using the for-loop with temporary array of items. First of all we destrcuture the words en sort the characters in the correct orderd. Next we create a temporary array with the anagrams and we fill it up with the anagrams and then push it into anagrams list, which holds all arrays with anagrams. Last step is to return the anagrams list with all arrays with anagrams in it.