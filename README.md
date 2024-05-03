# React User Guide

[![NPM](https://img.shields.io/npm/v/react-user-guide.svg)](https://www.npmjs.com/package/react-user-guide) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-user-guide-mindfire
```

## Usage

```jsx
import React, { Component } from "react";
import UserGuide from "react-user-guide-mindfire";

const style = {
  width: "20vw",
  backgroundColor: "grey",
  marginTop: "20vh",
  marginLeft: "40vw",
  padding: 5,
};

const buttonConfig = {
  yesText: "Yes",
  noText: "No",
  nextText: "Next",
  skipText: "Skip",
  finishText: "Finish",
};

const guides = [
  {
    querySelector: ".unique-classname",
    position: "east",
    title: "First",
    message: "User guide position 'east'",
  },
  {
    querySelector: ".unique-classname",
    position: "west",
    title: "Second",
    message: "User guide position 'west'",
  },
  {
    querySelector: ".unique-classname",
    position: "north",
    title: "Third",
    message: "User guide position 'north'",
  },
  {
    querySelector: ".unique-classname",
    tooltipWidth: 500,
    position: "south",
    title: "Forth",
    message: "User guide position 'south', with custom width",
  },
];

export default class App extends Component {
  render() {
    return (
      <UserGuide buttonConfig={buttonConfig} guides={guides}>
        <div style={style} className="unique-classname">
          Target element
        </div>
      </UserGuide>
    );
  }
}
```

## Styling Guide

### Import pre-styled css

```css
@import "~react-user-guide/dist/custom-style.css";
```

### Use the following scss to style yourself

```scss
// Style modal
.userGuide--modal {
  h1 {
  }

  p {
  }

  button {
  }
}

// Style mask
.userGuide--mask {
}

// Style tooltip
.userGuide--message {
  h3 {
  }

  p {
  }

  button {
  }
}
```

## Configs

### &lt;HelpText&gt;

- guides _[Guide]_ - array of all guides/tooltip
- guideKey _[string]_ - unique key that will be used to store in localStorage (default = 'guideKey')
- title _[string]_ - Title used in Modal (default = 'Quick Guide')
- content _[string]_ - Content used in Modal (default = 'Would you like us to walk you through different features in this app?')
- buttonConfig _[ButtonConfig]_ - Text used by different buttons

### Guide

- querySelector _[string]_ - css selector of the target element
- title _[string]_ - title of tooltop
- message _[string]_ - message of tooltip
- position _[string]_ - _(east|west|north|south)_ - position of tooltip from target element (default = 'north')
- tooltipWidth _[int]_ - width of tooltip (default = 240)

### ButtonConfig

- yesText _[string]_ - Text for 'Yes' button
- noText _[string]_ - Text for 'No' button
- nextText _[string]_ - Text for 'Next' button
- skipText _[string]_ - Text for 'Skip' button
- finishText _[string]_ - Text for 'Finish' button

## DEMO

https://sandeshshrestha.github.io/react-user-guide/

## Screenshots

[Click here if images didn't load](https://github.com/sandeshshrestha/React-User-Guide#screenshots)
![Initial modal](https://github.com/sandeshshrestha/React-User-Guide/blob/master/screenshots/initial-modal.png)
![Guide East](https://github.com/sandeshshrestha/React-User-Guide/blob/master/screenshots/guide-east.png)
![Guide West](https://github.com/sandeshshrestha/React-User-Guide/blob/master/screenshots/guide-west.png)
![Guide North](https://github.com/sandeshshrestha/React-User-Guide/blob/master/screenshots/guide-north.png)
![Guide South](https://github.com/sandeshshrestha/React-User-Guide/blob/master/screenshots/guide-south.png)

## License

MIT © [sandeshshrestha](https://github.com/sandeshshrestha)
