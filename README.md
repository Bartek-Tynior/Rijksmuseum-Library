# Rijksmuseum-Library

This project is a simple application to display data fetched from the Rijksmuseum API. 
It contains an index page to allow you to search and filter data returned from the API and a detail page, 
which shows in-depth informaion about the selected piece.

This application is built using React JS framework and Vite tooling. 
React JS is one of the most popular JavaScript framework for bulding simple, fast and scalable frontends of web applications.
The biggest advanatages of using React js are the speed, flexibiluty and usability. The React basically allows developers to utilize individual 
parts of their application on both client-side and the server-side, which ultimately boosts the speed of the development process.
React comes also with the reusable custom componetns, which can be build in JSX,  an optional syntax extension. 
For this project I've also used the vite tooling which is a build tool that aims to provide a faster and leaner development experience for modern web projects.
Vite’s ability to pre-bundle NPM dependencies and convert CommonJS/UMD modules to ESM using esbuild, 
means that Vite’s cold start times are significantly faster than any other JavaScript-based bundler.

The project also contains the React Query, axios and Fuse JS libraries. The Axios is a basic JavaScript library used to make to make HTTP 
requests from node. js or XMLHttpRequests from the browser. It is really popular and it became the standard over the years, but I choosed to combine it with React Query library.
The biggest advantage of the React Query is that it gives us caching of server data out of the box with cache invalidation and request deduping. 
Simple said: if the data is already there, React Query will simply return it, avoiding extra network requests!

I've also used the Fuse JS library for fuzzy search in my application. It provides a search in Object Array and is really easy to implement. 
It's also really lightweight, so it doesn't cost you any performence implemnting it in your application.

For the animations in my application I've used the framer motion, which is a really extensive animation library for React JS. It's one of the most common 
animation library for React JS and the community is big, so that's why I have choosed for this one.
