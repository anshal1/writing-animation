### This package let's you create a Typewritter effect with just few lines of code.

# Example

<video src="./screen-capture (online-video-cutter.com).mp4" autoplay loop controls width="600"></video>

```js

npm install "typing-animation-anshal"

import TypeAnim from "typing-animation-anshal";

```

# **Required Paramaters**

```js
new TypeAnim({
  // list of the words you wanna show
  wordslist: ["Word1", "Word2"],
  // the element where to show the typing animation
  element: HTMLElement,
});
```

# **Optional Paramaters**

```js
new TypeAnim({
  // list of the words you wanna show
  wordslist: ["Word1", "Word2"],
  // the element where to show the typing animation
  element: HTMLElement,
  // speed of the typing of words
  // higher the speed = higher wait time between         individual characters
  typing_speed: Number, // Default is 100ms,
  // do you want to show the cursor
  show_cursor: boolean, // Default is true
  // how long should we wait after we finish writing one word
  wait_time: Number, // Default is 1000ms
});
```
