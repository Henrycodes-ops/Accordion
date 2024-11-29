# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Screenshot%202024-11-29%20203850.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned
During the FAQ challenge, i enhanced my problem-solving skills by effectively addressing common queries. I sharpened my research abilities and communication skills, ensuring clear and concise responses. Additionally, I improved my customer service approach, managing my time efficiently while expanding your technical knowledge. Overall, you embraced continuous learning and improvement throughout the challenge.


```
```css
.contents .answers {
font-family: myFont;
font-size: 14px;
font-weight: 600;
color: var(--grayish-purple);
width: 100%;
text-align: start;
margin-top: 1em;
line-height: 1.5;
width: 100%;
height: 0px;
overflow: hidden;
}

```
```js
for (let i = 0; i < accordion.length; i++) {
accordion[i].addEventListener("click", function () {
this.classList.toggle("active");
// icons.innerHTML.childNodes = showAnsMinus
});
}

```




### Useful resources

- [Javascript Dom Manipulation](https://www.youtube.com/watch?v=5fb2aPlgoys&list=PPSV) - This helped me to develop good DOM Manimpulation skills. I really liked this pattern and will use it going forward.


## Author

- Frontend Mentor - [@Henrycodes-ops](https://github.com/Henrycodes-ops)
- Twitter - [@FaloluH77473](https://x.com/FaloluH77473)


