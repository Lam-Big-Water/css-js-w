# lesson - 0
- max-width: 300px
If the window is between 0px and 300px wide, 
    the CSS within will be applied.

- pseudo classes
```css
button:hover {
    color: blue;
}
button:focus {
    color: white;
}
input:checked {
    width: 24px;
}
```

- pseudo elements
```css
input::placeholder {
    color: gold;
}
p::before {
    content: "→";
    color: deeppink;
}
p::after {
    content: "←";
    color: deeppink;
}
```

- combinators
```css
nav a {
    color: red;
}
/* only want to target children */
.main-list > li {
    border: 2px dotted;
}
```

- color
```css
.third.box {
  background-color: hsl(340deg 100% 50% / 0.5);
}
.fourth.box {
  background-color: hsl(340deg 100% 50% / 0.25);
}
```

- units
```css
/* relative unit - em -- equal to the font size of the current element.*/
p {
    font-size: 18px;
    /* 2em = 18px x 2 = 36px */
    padding-bottom: 2em;
}

/* rem -- it's always relative to the root, the <html> */

html {
    font-size: 16px;
}
/* 2rem = 16px x 2 = 32px -- You shouldn't actually set a px font size on the html tag. */
h1 {
    font-size: 2rem;
}
```

- typography
```css
font-family: Arial;
font-weight: bold;
font-style: italic;
text-decoration: none;
text-align: center;
text-transform: uppercase;
letter-spacing: 3px;
line-height: 2;
```


# lesson - 1
- built-in declarations
These styles are part of the user-agent stylesheet.

- inheritance
```html
<style>
a {
  color: inherit;
}
</style>

<p style="color: red;">
  This is a red paragraph with <a href="#">another link</a>.
</p>

```

- the cascade
```css
p {
  font-weight: bold;
  color: hsl(0deg 0% 10%);
}
.introduction {
  color: violet;
}

/* This could be written in JS */
const tagStyles = {
  fontWeight: 'bold',
  color: 'hsl(0deg 0% 10%)',
};
const classStyles = {
  color: 'violet',
}
const appliedStyles = {
  ...tagStyles,
  ...classStyles,
}
```

- directions
```css
/* Logical properties - Why use these alternatives? Because not all languages are left-to-right, top-to-bottom.*/
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
```

- the box model
The four aspects that make up the box model are:
1. Content
2. Padding
3. Border
4. Margin

The box-sizing CSS property allows us to change the rules for size calculations. The default value (content-box) only takes the inner content into account, but it offers an alternative value: border-box.

```css
/* swap box-sizing on every layout element */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

- padding
Padding is that it's "inner space".


- border
There are three styles specific to border:
1. Border width (eg. 3px, 1em)
2. Border style (eg. solid, dotted)
3. Border color (eg. hotpink, black)
The only required field is border-style. Without it, no border will be shown!

currentColor is always a reference to the element's derived text color
```css
.box {
  color: hotpink;
  border: 1px solid currentColor;
  box-shadow: 2px 2px 2px currentColor;
}
```

border vs. outline
1. The core difference is that outline doesn't affect layout. 
2. Outlines are stacked outside border, and can sometimes be used as a "second border".
3. Outlines will follow the curve set with border-radius in all browsers except Safari. 
4. Outlines have a special outline-offset property. It allows you to add a bit of a gap between the element and its outline.


- margin
1. Margin increases the space around an element, giving it some breathing room.
2. A negative margin can pull an element outside its parent:
```css
.pink-box {
  margin-top: -24px;
}
```
3. negative margin can affect the position of all siblings.
```html
<main>
  <div class="box one"></div>
  <div class="box two"></div>
  <div class="box three"></div>
</main>
```
4. auto margins
they can be used to center a child in a container. The auto value seeks to fill the maximum available space.
4.1. This only works for horizontal margin
4.2. This only works on elements with an explicit width.


- flow layout
1. replaced elements -  they can affect block layout. You can give them explicit dimensions, or add some margin-top.
<img />
<video />
<canvas />

The second exception is the <button> tag. They aren't quite replaced elements, but they function the same way. They can be given a width/height.

2. block elements don't share - fill the entire available horizontal space.
```css
/* shrink down to the minimum size */
h1 {
  width: fit-content;
}
```

3. Inline elements have “magic space”
the browser treats inline elements as if they're typography.
```css
/* two ways to fix this */
img {
  display: block;
  /* Set the line-height on the wrapping div to 0: */
  line-height: 0;
}
```
4. Space between inline elements
there are gaps between the 3 images - This space is caused by the whitespace between elements.
```css
/* use flexbox or floats */
```

5. Inline elements can line-wrap
This paragraph features a multi-line <strong> tag:

6. tweaking this default behaviour
```html
<style>
  strong {
  padding-left: 8px;
  padding-right: 8px;
  background: peachpuff;
  /* takes two different values: slice(default) */
  box-decoration-break: clone;
}

p {
  max-width: 125px;
}
</style>
<p>
  <strong>
    These words are broken up across many lines.
  </strong>
</p>
```

7. the deal with inline-block
Essentially, inline-block allows you to drop a block element into an inline context. It's a block in inline's clothing.

8. inline-block doesn't line-wrap


- width algorithms - default width of 100%, but that wouldn't quite be right.
```css
/* When we enable width: 100%, we cause the heading to pop outside of our frame. This happens because of the margin. */
h1 {
  /* width: 100%; */
  margin: 0 16px;
  background-color: chartreuse;
}
```

1. min-content - become as small as it can, based on the child contents.

2. max-content - it never adds any line-breaks.

3. fit-content - it adds line-breaks as-needed to ensure it never exceeds the available space. It behaves just like width: auto.

4. replicate the effect without using fit-content
```css
h2 {
  max-width: max-content;
}

h2 {
  display: table;
}
```

5. figures and captions
It allows us to display any sort of “non-typical” content: images, videos, code snippets, widgets, etc. It also lets us caption that content with <figcaption>.


- height algorithms - default "height" behaviour is to be as small as possible while fitting all of the element's content; it's closer to width: min-content than width: auto!

1. Have you ever tried to use a percentage-based height, only to discover that it seems to have no effect?
1.1 Put height: 100% on every element before your main one (including html and body)
1.2 Put min-height: 100% on that wrapper
1.3 Don't try and use percentage-based heights within that wrapper
```css
html, body {
  height: 100%;
}
.wrapper {
  min-height: 100%;
  border: solid;
}
```

2. vh unit - 100vh will actually be quite a bit taller than the viewable area in mobile.

- margin collapse

1. Only vertical margins collapse - opposite in writing-mode: vertical-lr;

2. Margins only collapse in Flow layout

3. Only adjacent elements collapse

4. The bigger margin wins

5. Nesting doesn't prevent collapsing

6. Blocked by padding or border - You can think of padding/border as a sort of wall

7. Blocked by a gap - But what if we explicitly give our parent element a height? Well, that would create a gap underneath the child

8. Margins can collapse in the same direction 

9. More than two margins can collapse

10. Negative margins - negative margin will pull an element in the opposite direction.
10.1 What about when negative and positive margins are mixed? In this case, the numbers are added together. In this example, the -25px negative margin and the 25px positive margin cancel each other out and have no effect, since -25px + 25px is 0.

11. If there are more than 2 margins involved, the algorithm looks like this:

Find the largest positive margin
Find the largest* negative margin
Add those two numbers together

# lesson - 2
- relative positioning - we can break out of the box.
1. static positioning - If an element is currently using Positioned layout and you want to opt out, you can set position to either static or initial

2. position doesn't impact layout - are taken out-of-flow.

- absolute positioning
What if we want to break the rules, though? What if we want to take an element out of this orderly flow, and stick it wherever we want?

1. Default placement - it sits in its default in-flow position. 

2. Effect on layout - effectively “empty”.

3. Collapsing parents - absolute elements are like holograms, they don't really exist.

4. Centering Trick
```css
.box {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100px;
  height: 100px;
  margin: auto;
  background: deeppink;
}
```


- containing blocks
Unlike in Flow layout, absolutely-positioned elements aren't necessarily contained by their direct parent. 

If we add position: relative to the .parent class, it flips the child's containing block.

- stacking contexts
To summarize:

When all siblings are rendered in Flow layout, the DOM order controls how the background elements overlap, but the content will always float to the front.
If one sibling uses positioned layout, it will appear above its non-positioned sibling, no matter what the DOM order is.
If both siblings use positioned layout, the DOM order controls which element will be on top. Unlike in Flow layout, the content does not float to the front.

1. z-index - If we want the layered order to be different from the DOM order, we can use the z-index property to manually reorder them

2. z-index only works with positioned elements
The z in z-index refers to the z axis:

x is left/right
y is up/down
z is forward/backward

3. The default value of the z-index property is auto, which is equivalent to the number 0.

4. Negative z-indexes - z-index values must be integers, and they're allowed to be negative.

5. Creating new contexts
Setting opacity to a value less than 1
Setting position to fixed or sticky (No z-index needed for these values!)
Applying a mix-blend-mode other than normal
Adding a z-index to a child inside a display: flex or display: grid container
Using transform, filter, clip-path, or perspective
Explicitly creating a context with isolation: isolate (More on this soon!)

6. create an isolated stacking context
6.1 wrapper a position and z-index to all children components.
```css
.pricing {
  position: relative;
  z-index: 1;
}
```

6.2 The isolation property does precisely 1 thing: creates a stacking context.
```css
.pricing {
  isolation: isolate;
}
```


- fixed positioning - they're immune to scrolling.
it listens to the “initial containing block”, a box the size and position of the viewport

1. The transform exception
If a parent or grandparent uses the transform property, it becomes the containing block for the fixed element, essentially transforming it into an absolutely-positioned element


- overflow - overflow defaults to visible, which allows an element's content to extend beyond its bounds.

Technically speaking, overflow is a shorthand for 2 distinct properties

overflow-x
overflow-y

1. But when we constrain the height by setting a specific value, we create an impossible condition.

1.2  The browser solves for this by letting the content spill outside the bounds, but without accounting for it in flow computations.

2. scroll

3. auto - auto is a smart value that adds a scrollbar when one is required.

4. hidden


- Horizontal Overflow - How can we instruct the container to not line wrap
```css
.wrapper {
  overflow: auto;
  border: 3px solid;
  /* The secret ingredient: */
  white-space: nowrap;
}
```

- sticky positioning
An often-overlooked aspect of position: sticky is that the element will never follow the scroll outside of its parent container. Sticky elements only stick while their container is in view.

1. With sticky positioning, the value controls the minimum gap between the element and the edge of the viewport while the container is in-frame. - We can even use negative numbers if we want!


- Hidden Content

1. display: none - This property can be very useful when combined with media queries to toggle between mobile and desktop variants of an element

2. Visibility: hidden - the item can't be seen, but it's still there, taking up space.

3. Opacity -  We can flip it from 1 to 0 to fully hide an element
3.1 Unsurprisingly, hiding an element with opacity does not remove it from flow. In fact, items hidden with opacity aren't really hidden:

Buttons can still be clicked
Text is still selectable
Form elements can still be focused


# lesson - 3
