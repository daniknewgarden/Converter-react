# Currency converter

## Hi! This is the most cozy converter ever 😊.

[**See demo**]() <br/>

**Here you can read how to run it, and how to use all components. Lets start 👇**<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run? 🏃‍♂️

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. 🛠<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. 🧪<br />
But right now this feature isn't available. 🌚

### `npm build`

Builds the app for production to the `build` folder. 🏗<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project structure

Loading...

## Components guide 🧩

### ControlBtn

![Screenshot](https://i.imgur.com/hdLIXFU.png) <br/>
**Button allows you to toggle change something.** <br/>

| Props    | Type     | Description                               |
| -------- | -------- | ----------------------------------------- |
| label    | string   | Text in button.                           |
| onClick  | function | Callback function.                        |
| icon     | string   | Way to your icon.                         |
| reversed | boolean  | Change padding side (default side: left). |
| big      | boolean  | Change font size to more bigger.          |
| active   | boolean  | If you need to has focus button state.    |

### AddBtn

![Screenshot](https://i.imgur.com/aNv2ieH.png) <br/>
**Button allows you to call something on click.**

| Props   | Type     | Description        |
| ------- | -------- | ------------------ |
| onClick | function | Callback function. |

### Dropdown

![Screenshot](https://i.imgur.com/Jri3TyE.png) <br/>
**Allows you to choose some option.** <br/>

| Props              | Type     | Description                          |
| ------------------ | -------- | ------------------------------------ |
| list               | array    | Array of options to select.          |
| defaultOptionIndex | number   | Selected option be default.          |
| onChoose           | function | Function receiving selected element. |

### Currency

![Screenshot](https://i.imgur.com/JycOghD.png) <br/>
**Currency card.** <br/>

| Props     | Type     | Description                                          |
| --------- | -------- | ---------------------------------------------------- |
| canRemove | boolean  | Can it be deleted?                                   |
| remove    | function | Function for card removing (on click remove button). |

### Header

![Screenshot](https://i.imgur.com/G3yYkRe.png) <br/>
**Header of the App. Here you can change screen mode and theme**

## Hooks guide ⚓

### useClickOutside 👆

**Allows you to tracks clicks outside the item to do something.**
Argument | Type | Description
---------|----------|----------------------
ref | useRef() | React link for your item.
callback | function | Callback function.

**Example**

```JSX
import React, { useRef } from "react";
import { useClickOutside } from "way to useClickOutside";

//Component
export const Dropdown = () => {
 const [opened, setOpened] = useState(false);

 const toggleOpened = () => {
  setOpened(!opened)
 }

 //Click outside track
 const menuRef = useRef();
 useClickOutside(menuRef, toggleOpened);

 return(
  <button>{opened ? 'Close' : 'Open'} menu </button>
  {opened && <div ref={menuRef}>Menu</div>}
 )
}
```
