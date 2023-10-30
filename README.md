# Getting Started with Create React App for SQL Frames

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Provided Components

1. SQLFrames - this loads the dependencies
1. SQLFramesContext - this stores the loaded SQLFrames library object (avoids storing in window object for example). Context is automatically set up by SQLFrames component.
1. SQLFramesComponent - this renders any object produced by **SQL Frames** library
1. SQLFramesApp - a sample app that renders a dataframe and a chart.
1. REPL - **SQL Frames** REPL App component.

## Key Modifications

1. [src/App.js](src/App.js) - added SQLFramesApp into this main app
1. [public/index.html](public/index.html) - style sheets and requirejs. Also data-theme for dark (light) mode.
1. [src/index.js](src/index.js) - Wrapped App component with SQLFrames to load the **SQL Frames** dependency. In addition to rendering the App it also renders **SQL Frames** REPL.
1. [src/index.css](src/index.css) - css for making the dark mode to work.
