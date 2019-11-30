# Pursuit-Core-Web-React-Calculator-Lab

## Simple Calculator

### Task

- You will create a React app that mimics a simple calculator
- Please use `create-react-app` to generate your project
- Break your application down to necessary components
- Your app should look, feel and work like this: [Live Example](https://wizardly-benz-647f72.netlify.com/)

### Functionality

- AC: Clears all of the data in the screen
- C: Clears only what is being displayed
- %: Converts the current value into a percentage. So just `x / 100`
- ±: Toggles between negative and positive number
- . : Adds decimal point to the current number
- Operations: Queues the operation
- Equal to: Invokes the operation to happen
- Play around with the [Live Example](https://wizardly-benz-647f72.netlify.com/)

### State

Use the following state:

```javascript
{
  displayValue: '0',
  previousValue: null,
  operation: null,
  waitingForNewValue: false
}
```

### Styling

- Center your calculator so it takes up `50%` of the screen

- You may use the following button css to get started quickly:
  ```css
  .button {
    background-color: #E0E0E6;
    font-size: 40px;
    text-align: center;
    color: #666666;
    border-left: 1px solid #666666;
    border-bottom: 1px solid #666666;
    user-select: none;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    display: block;
  }

  button:active {
    box-shadow: inset 0px 0px 80px 0px rgba(0,0,0,0.25);
  }

  .orange {
    background-color: #EE9B3E;
    color: #fff;
  }
  ```
- Try your best to make it look like the example



---
---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
