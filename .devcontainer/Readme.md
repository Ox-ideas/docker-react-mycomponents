# Notes

## Enable live reload for React

React application uses chokidar to watch for changes and is not enabled by default. To enable, we need to set a special environment variable for our development container.

Create a .env file inside the .devcontainer folder and add the following:

```js
CHOKIDAR_USEPOLLING=true
```

## Getting some free styling

For free styling using semantic-ui, you can follow the build instructions on their site. 
The tutorial simply makes use of CDN. In my case, i downloaded the git source and 
copied both `semantic.min.css` and `themes` folder to *\public\semantic-ui*.

## Providing images for JSX

Fake data is useful when building and testing our application. `faker.js` can generate fake data for various areas, including address, commerce, company, date, finance, image, random, or name.