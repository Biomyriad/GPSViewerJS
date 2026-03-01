Title: VanJS - Tutorial and API Reference

URL Source: https://vanjs.org/tutorial

Markdown Content:
> _Entia non sunt multiplicanda praeter necessitatem
> 
> (The best solution is usually the one with the least unnecessary complexity)
> -- Occam's Razor_

In this tutorial, we will break down into 3 core functionalities **VanJS** supports: DOM composition / manipulation, State and State binding.

[DOM Composition and Manipulation](https://vanjs.org/tutorial#dom)
------------------------------------------------------------------

* * *

### [Your first VanJS app: a simple `Hello` page](https://vanjs.org/tutorial#your-first-vanjs-app-a-simple-hello-page)

We will start this tutorial with a simple `Hello` page, with the code below:

```
const {a, div, li, p, ul} = van.tags

const Hello = () => div(
  p("👋Hello"),
  ul(
    li("🗺️World"),
    li(a({href: "https://vanjs.org/"}, "🍦VanJS")),
  ),
)

van.add(document.body, Hello())
```

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/hello)

The code should be self-explanatory if you have some familiarity with HTML. Unlike React, everything in the code above is just pure JavaScript, meaning that you are simply calling functions from `van.js` without any transpiling that converts your source code into another form. Reusable UI components built with **VanJS** can be pure vanilla JavaScript functions as well. Here we capitalize the first letter to follow React conventions.

Also unlike React, **VanJS** does not introduce an ad-hoc virtual DOM layer. All the tag functions above directly return the created DOM objects. e.g.: the function call `p("👋Hello")` simply creates an `HTMLParagraphElement` with `👋Hello` as its `innerText`, meaning that you can directly interact with your created DOM nodes with native DOM APIs.

💡 **Tip**: If you are tired of adding all the tag function names manually in the importing line:

`const {a, div, li, p, ul} = van.tags`

we have built a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=TaoXin.vanjs-importtag) with the command that can automatically import the tag function at the cursor. You can check out its [GitHub repo](https://github.com/vanjs-org/vanjs-importtag) for more details.

### [API reference: `van.tags`](https://vanjs.org/tutorial#api-tags)

`van.tags` is a top-level dynamic object in **VanJS** implemented with `Proxy`. `van.tags.<name>` gets you a function that creates an HTML element with tag name `<name>`. A common way of using `van.tags` is like the line below:

`const {a, div, p} = van.tags`

With the line, `a`, `div`, `p` are functions that create `<a>`, `<div>`, `<p>` HTML elements respectively.

We will use `div` function as an example, the API reference for `div` tag function is as below:

**Signature**`div([props], ...children) => <the created DOM element>`
**Description**Creates an `HTMLDivElement` with `props` as its properties and `children` as its child nodes.
**Parameters***   **`props`** - optional, a plain JavaScript object whose keys and values are the keys and values of the properties of the created HTML element. Keys should be `string`, and each value can be a primitive (`string`, `number`, `boolean` or `bigint`), `null`, a primitive-valued or `null`-valued `State` object, or a `function` for a `State`-derived property. We will explain the behavior of [`State`-typed](https://vanjs.org/tutorial#state-typed-prop) and [`State`-derived](https://vanjs.org/tutorial#state-derived-prop) properties in State Binding section below. For keys like `on...`, the value should be a `function` to represent the event handler.
*   **`children`** - caller can provide 0 or more children as arguments to represent the child nodes of the created HTML element. Each child can be a valid DOM node, a primitive (`string`, `number`, `boolean` or `bigint`), `null`, `undefined`, a primitive-valued or `null`/`undefined`-valued `State` object, a `function` for a `State`-derived child, or an `Array` of children. `null`/`undefined`-valued children will be ignored. A `Text node` will be created for each primitive-typed argument. We will explain the behavior of [`State`-typed child](https://vanjs.org/tutorial#state-typed-child) and [`State`-derived child](https://vanjs.org/tutorial#state-derived-child) in State Binding section below. For DOM node, it shouldn't be already connected to a document tree (`isConnected` property should be `false`). i.e.: You should not declare an existing DOM node in the current document as the child node of the newly created element.
**Returns**The `HTMLDivElement` object just created.

### [SVG and MathML Support](https://vanjs.org/tutorial#svg-and-mathml-support)

To create HTML elements with custom `namespace URI`, you can declare tag functions via `van.tags(<namespaceURI>)` (or `van.tagsNS(<namespaceURI>)`_before **VanJS**[1.4.0](https://github.com/vanjs-org/van/discussions/280)_). Here is an example of composing the SVG DOM tree:

```
const {circle, path, svg} = van.tags("http://www.w3.org/2000/svg")

const Smiley = () => svg({width: "16px", viewBox: "0 0 50 50"},
  circle({cx: "25", cy: "25", "r": "20", stroke: "black", "stroke-width": "2", fill: "yellow"}),
  circle({cx: "16", cy: "20", "r": "2", stroke: "black", "stroke-width": "2", fill: "black"}),
  circle({cx: "34", cy: "20", "r": "2", stroke: "black", "stroke-width": "2", fill: "black"}),
  path({"d": "M 15 30 Q 25 40, 35 30", stroke: "black", "stroke-width": "2", fill: "transparent"}),
)

van.add(document.body, Smiley())
```

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/smiley)

Similarly, math formulas can be created with `MathML` elements:

```
const {math, mi, mn, mo, mrow, msup} = van.tags("http://www.w3.org/1998/Math/MathML")

const Euler = () => math(
  msup(mi("e"), mrow(mi("i"), mi("π"))), mo("+"), mn("1"), mo("="), mn("0"),
)

van.add(document.body, Euler())
```

**Demo:**e i π+1=0

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/euler)

### [API reference `van.tags` (for elements with custom namespace URI)](https://vanjs.org/tutorial#api-tagsns)

**Signature**`van.tags(namespaceURI) => <the created tags object for elements with specified namespaceURI>`
**Description**Creates a tags `Proxy` object similar to `van.tags` for elements with specified `namespaceURI`.
**Parameters***   **`namespaceURI`** - a string for the `namespaceURI` property of elements created via tag functions.
**Returns**The created tags object.

### [Specifying `options` of `createElement` or `createElementNS`](https://vanjs.org/tutorial#specifying-options-of-createelement-or-createelementns)

_Requires **VanJS**[1.5.3](https://github.com/vanjs-org/van/discussions/290#discussioncomment-11744512) or later._

You can also specify `options` of the function `document.createElement` or `document.createElementNS` in the `props` argument of tag functions. Below is an example where `is` option is specified to create an element with custom behavior:

```
const {button} = van.tags

class MyButton extends HTMLButtonElement {
  connectedCallback() {
    this.addEventListener("click", () => alert("MyButton clicked!"))
  }
}
customElements.define("my-button", MyButton, {extends: "button"})

const CustomButton = () => button({is: "my-button"}, "Click me")

van.add(document.body, CustomButton())
```

**Demo:**

### [API reference: `van.add`](https://vanjs.org/tutorial#api-add)

`van.add` function is similar to tag functions described above. Instead of creating a new HTML element with specified properties and children, `van.add` function mutates its first argument (which is an existing `Element node`) by appending 0 or more children with `appendChild` calls:

**Signature**`van.add(dom, ...children) => dom`
**Description**Mutates `dom` by appending 0 or more child nodes to it. Returns `dom` for possibly further chaining.
**Parameters***   **`dom`** - an existing DOM element (or `DocumentFragment`_since **VanJS**[1.5.5](https://github.com/vanjs-org/van/discussions/290#discussioncomment-12956581)_) that we want to append children to.
*   **`children`** - caller can provide 0 or more `children` as arguments to represent the child nodes we want to append to `dom`. Each child can be a valid DOM node, a primitive, `null`, `undefined`, a primitive-valued or `null`/`undefined`-valued `State` object, a `function` for a `State`-derived child, or an `Array` of children. `null`/`undefined`-valued children will be ignored. A `Text node` will be created for each primitive-typed argument. [`State`-typed child](https://vanjs.org/tutorial#state-typed-child) and [`State`-derived child](https://vanjs.org/tutorial#state-derived-child) behave the same way as in tag function. For DOM node, it shouldn't be already connected to a document tree (`isConnected` property should be `false`). i.e.: You should not append an existing DOM node in the current document to `dom`. If 0 children is provided, this function is a no-op.
**Returns**`dom`

### [DOM nodes already in the document tree can't be used as `children`](https://vanjs.org/tutorial#dom-nodes-already-in-the-document-tree-can-t-be-used-as-children)

As mentioned in the API reference, if a DOM node is already connected to the document tree, it shouldn't be used as the child node of tag function or `van.add`. The following code is invalid and an `Error` will be thrown when `van-<version>.debug.js` is being used:

```
const existing = document.getElementById("some-id")

// Invalid! Existing node can't be used as the child node of tag function.
const dom = div({id: "new-id"}, existing)

// Invalid! Existing node can't be appended to other nodes in `van.add`.
van.add(document.body, existing)
```

### [Functional-style DOM tree building](https://vanjs.org/tutorial#fun-dom)

Because both tag functions and `van.add` can take `Array` arguments and the `Array` arguments can be deeply nested. **VanJS** enables very ergonomic DOM tree composition in functional-style. See examples below:

Building a bullet list:

```
const {li, ul} = van.tags

const List = ({items}) => ul(items.map(it => li(it)))

van.add(document.body, List({items: ["Item 1", "Item 2", "Item 3"]}))
```

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/list)

Building a table:

```
const {table, tbody, thead, td, th, tr} = van.tags

const Table = ({head, data}) => table(
  head ? thead(tr(head.map(h => th(h)))) : [],
  tbody(data.map(row => tr(
    row.map(col => td(col)),
  ))),
)

van.add(document.body, Table({
  head: ["ID", "Name", "Country"],
  data: [
    [1, "John Doe", "US"],
    [2, "Jane Smith", "CA"],
    [3, "Bob Johnson", "AU"],
  ],
}))
```

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/table)

### [`on...` event handlers](https://vanjs.org/tutorial#on-event-handlers)

In tag functions, you can provide a `function` value for property keys like `on...`. This is a convenient way to specify event handlers. For instance, the code below creates a `button` that shows an alert whenever clicked:

`button({onclick: () => alert("Hello from 🍦VanJS")}, "Hello")`

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/onclick)

_The support of custom event handlers was added in **VanJS**[1.2.8](https://github.com/vanjs-org/van/discussions/246)._

🎉 Congratulations! You have mastered the skills for building and manipulating DOM trees using **VanJS**'s declarative API, which is incredibly powerful for creating comprehensive applications with elegant code. In the sections below, you will continue to learn how to build reactive applications with state and state binding.

If your application doesn't rely on state and state binding, you can use the slimmed-down version of **VanJS** - [Mini-Van](https://vanjs.org/minivan).

[State](https://vanjs.org/tutorial#state)
-----------------------------------------

* * *

A `State` object in **VanJS** represents a value that can be updated throughout your application. A `State` object has a public property `val`, with a [custom setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) that automatically propagates changes to DOM nodes that are bound to it.

The code below illustrates how a `State` object can be used:

```
const {button, div, input, sup} = van.tags

// Create a new state object with init value 1
const counter = van.state(1)

// Log whenever the value of the state is updated
van.derive(() => console.log(`Counter: ${counter.val}`))

// Derived state
const counterSquared = van.derive(() => counter.val * counter.val)

// Used as a child node
const dom1 = div(counter)

// Used as a property
const dom2 = input({type: "number", value: counter, disabled: true})

// Used in a state-derived property
const dom3 = div({style: () => `font-size: ${counter.val}em;`}, "Text")

// Used in a state-derived child
const dom4 = div(counter, sup(2), () => ` = ${counterSquared.val}`)

// Button to increment the value of the state
const incrementBtn = button({onclick: () => ++counter.val}, "Increment")
const resetBtn = button({onclick: () => counter.val = 1}, "Reset")

van.add(document.body, incrementBtn, resetBtn, dom1, dom2, dom3, dom4)
```

**Demo:**

1

Text

1 2 = 1

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/state)

### [API reference: `van.state`](https://vanjs.org/tutorial#api-state)

**Signature**`van.state(initVal) => <the created State object>`
**Description**Creates a `State` object with its init value specified in the argument.
**Parameters***   **`initVal`** - the init value of the `State` object to be created.
**Returns**The created `State` object.

### [Public interface of `State` objects](https://vanjs.org/tutorial#public-interface-of-state-objects)

*   Property `val` - the current value of the `State` object. When a new value of this property is set, all [derived states](https://vanjs.org/tutorial#derived-state) and [side effects](https://vanjs.org/tutorial#side-effect) registered via `van.derive` and all DOM nodes that are bound to it will be updated accordingly.
*   Readonly property `oldVal` - the old value of the `State` object prior to the current UI update cycle. This property might be useful for [stateful binding](https://vanjs.org/tutorial#stateful-binding).
*   Readonly property `rawVal` - _(requires **VanJS**[1.5.0](https://github.com/vanjs-org/van/discussions/290) or later)_ getting the current value of the `State` object (peeking) without registering the state as a dependency of the binding function for the derived state, side effect or DOM node. For instance, the derived state `van.derive(() => a.rawVal + b.val)` will be updated when `b` changes, but won't be updated when `a` changes.

The value of a `State` object can be almost anything, primitive, `Object`, `Array`, `null`, etc., with 2 ad-hoc exceptions that we made: The value of the `State` object cannot be a DOM node, or another `State` object. Having values in these 2 types carries little semantic information and is more likely a result of coding bugs. Thus we disallow `State` objects to have values in these 2 types. In `van-{version}.debug.js`, an explicit error will be thrown if you try to assign a DOM node or another `State` object as the value of a state.

See also: [Why can't states have DOM node as values?](https://vanjs.org/advanced#why-not-dom-valued-states)

### [`State.val` is immutable](https://vanjs.org/tutorial#state-val-is-immutable)

While you can update `State` objects by setting the `val` property, you should never mutate the underlying object of `val` itself. Doing so will not trigger the DOM tree update as you would expect and might result in [undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior) due to [aliasing](https://en.wikipedia.org/wiki/Aliasing_(computing)).

### [Derived state](https://vanjs.org/tutorial#derived-state)

Derived states can be declared via `van.derive`, as illustrated in the example below:

```
const {input, span} = van.tags

const DerivedState = () => {
  const text = van.state("VanJS")
  const length = van.derive(() => text.val.length)
  return span(
    "The length of ",
    input({type: "text", value: text, oninput: e => text.val = e.target.value}),
    " is ", length, ".",
  )
}

van.add(document.body, DerivedState())
```

**Demo:**The length of is 5.

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/derived-state)

### [API reference: `van.derive`](https://vanjs.org/tutorial#api-derive)

**Signature**`van.derive(f) => <the created derived state>`
**Description**Creates a derived `State` object based on the derivation function `f`. The `val` of the derived state is always in sync with the result of `f`. i.e.: whenever the `val` of its dependency changes, `f` will be called to update the `val` of the derived state, synchronously.
**Parameters***   **`f`** - The derivation function, which takes no parameter and returns a single value.
**Returns**The created derived `State` object.

Note that: Since [**VanJS** 1.5.0](https://github.com/vanjs-org/van/discussions/290), we have changed the execution of state derivation from synchronous to asynchronous as an optimization to avoid potentially unnecessary derivations. That is, instead of executing state derivations immediately, the derivations are scheduled to execute as soon as the next event cycle of browser context (i.e.: after the current call stack is cleared, which is equivalent to `setTimeout(..., 0)`). The effect of the asynchronous derivation can be illustrated by the code below:

```
const a = van.state(1)
const b = van.derive(() => a.val * 2)
a.val = 2
console.log("b.val =", b.val) // Expecting 2
setTimeout(() => console.log("b.val =", b.val), 10) // Expecting 4
```

### [Side effect](https://vanjs.org/tutorial#side-effect)

`van.derive` can be used to declare side effects as well. You can discard the return value of `van.derive` if you are not interested. The code below is a modified `Counter App` which logs the counter to console whenever it changes:

```
const {button, span} = van.tags

const Counter = () => {
  const counter = van.state(0)
  van.derive(() => console.log("Counter: ", counter.val))
  return span(
    "❤️ ", counter, " ",
    button({onclick: () => ++counter.val}, "👍"),
    button({onclick: () => --counter.val}, "👎"),
  )
}

van.add(document.body, Counter())
```

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/effect)

See also: [Advanced state derivation](https://vanjs.org/advanced#advanced-state-derivation)

[State Binding](https://vanjs.org/tutorial#state-binding)
---------------------------------------------------------

* * *

Once `State` objects are created, we can bind them to DOM nodes in various ways to make your UI reactive to state changes.

### [`State` objects as properties](https://vanjs.org/tutorial#state-typed-prop)

`State` objects can be used as properties of HTML elements. Similar to `State`-based child nodes, the value of the properties will be always in sync with the value of the respective states. When `State` objects are used as properties, you need to make sure that the values of the states are always valid property values, i.e.: primitives or `function`s (for event handlers).

The following code demonstrates 2 `text inputs` whose values are always in sync:

```
const {input, span} = van.tags

const ConnectedProps = () => {
  const text = van.state("")
  return span(
    input({type: "text", value: text, oninput: e => text.val = e.target.value}),
    input({type: "text", value: text, oninput: e => text.val = e.target.value}),
  )
}

van.add(document.body, ConnectedProps())
```

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/connected-props)

### [`State` objects as child nodes](https://vanjs.org/tutorial#state-typed-child)

`State` objects can be used as child nodes in `tag functions` and `van.add`, like the `Counter` example shown in the home page. For a `State` object used as a child node, its value needs to be primitive (`string`, `number`, `boolean` or `bigint`), and a `Text node` will be created for it. The content of the created `Text node` will be always in sync with the value of the state.

The following code shows how to build a simple timer with this feature:

```
const {button, span} = van.tags

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const Timer = ({totalSecs}) => {
  const secs = van.state(totalSecs)
  return span(
    secs, "s ",
    button({onclick: async () => {
      while (secs.val > 0) await sleep(1000), --secs.val
      await sleep(10) // Wait briefly for DOM update
      alert("⏰: Time is up")
      secs.val = totalSecs
    }}, "Start"),
  )
}

van.add(document.body, Timer({totalSecs: 5}))
```

**Demo:**5s

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/timer)

### [`State`-derived properties](https://vanjs.org/tutorial#state-derived-prop)

`State`-derived property is a more advanced way to bind a property of an HTML element to one or more underlying `State` objects. To declare a `State`-derived property, you need to provide a function as the value in `props` argument while calling to a `tag function`. The function takes no parameter and return the value of the property. Whenever any dependency of the function changes, the value of the property will be updated accordingly.

The example below is a live font size and color preview implemented with this feature:

```
const {input, option, select, span} = van.tags

const FontPreview = () => {
  const size = van.state(16), color = van.state("blue")
  return span(
    "Size: ",
    input({type: "range", min: 10, max: 36, value: size,
      oninput: e => size.val = e.target.value}),
    " Color: ",
    select({oninput: e => color.val = e.target.value},
      ["blue", "green", "red", "brown"].map(c => option({selected: () => color.val === c}, c)),
    ),
    // The <span> element below has a state-derived property `style`
    span({style: () => `font-size: ${size.val}px; color: ${color.val};`}, " Hello 🍦VanJS"),
  )
}

van.add(document.body, FontPreview())
```

**Demo:**Size: Color:  Hello 🍦VanJS

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/font-preview)

### [State-derived `on...` event handlers](https://vanjs.org/tutorial#state-derived-event-handlers)

When declaring a `State`-derived property for an `on...` event handler, you should wrap around the binding function with `van.derive(...)` (i.e.: defining an ad-hoc [derived state](https://vanjs.org/tutorial#derived-state)). Otherwise, the function you provide will be consider as the event handler, rather than the binding function for the `State`-derived property. See the example below:

```
const {button, option, select, span} = van.tags

const Counter = () => {
  const counter = van.state(0)
  const action = van.state("👍")
  return span(
    "❤️ ", counter, " ",
    select({oninput: e => action.val = e.target.value},
      option({selected: () => action.val === "👍"}, "👍"),
      option({selected: () => action.val === "👎"}, "👎"),
    ), " ",
    button({onclick: van.derive(() => action.val === "👍" ?
      () => ++counter.val : () => --counter.val)}, "Run"),
  )
}

van.add(document.body, Counter())
```

**Demo:**❤️ 0

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/escape-derived-prop)

### [`State`-derived child nodes](https://vanjs.org/tutorial#state-derived-child)

Similarly, you can bind an HTML node to one or more underlying `State` objects. To declare a `State`-derived child node, you need to provide a function as the `child` argument while calling to a `tag function` or `van.add`. The function you provide can return a primitive value (a `Text node` will be created for it) or a DOM node. The following example illustrates this:

```
const {input, li, option, select, span, ul} = van.tags

const SortedList = () => {
  const items = van.state("a,b,c"), sortedBy = van.state("Ascending")
  return span(
    "Comma-separated list: ",
    input({oninput: e => items.val = e.target.value,
      type: "text", value: items}), " ",
    select({oninput: e => sortedBy.val = e.target.value},
      option({selected: () => sortedBy.val === "Ascending", value: "Ascending"}, "Ascending"),
      option({selected: () => sortedBy.val === "Descending", value: "Descending"}, "Descending"),
    ),
    // A State-derived child node
    () => sortedBy.val === "Ascending" ?
      ul(items.val.split(",").sort().map(i => li(i))) :
      ul(items.val.split(",").sort().reverse().map(i => li(i))),
  )
}

van.add(document.body, SortedList())
```

**Demo:**

Comma-separated list: 
*   a
*   b
*   c

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/sorted-list)

Note that: Due to the limit of DOM API, the result of the binding function can't be an array of elements. You can wrap the result into a pass-through container (`<span>` for inline elements and `<div>` for block elements) if multiple elements need to be returned.

### [Removing a DOM node](https://vanjs.org/tutorial#removing-a-dom-node)

For `State`-derived child nodes, if the binding function returns `null` or `undefined`, the DOM node will removed. Removed DOM node will never be brought back, even when the binding function would return a non-`null`/`undefined` value based on future values of the dependencies.

The following code illustrates how to build an editable list with this features:

```
const {a, button, div, input, li, ul} = van.tags

const ListItem = ({text}) => {
  const deleted = van.state(false)
  return () => deleted.val ? null : li(
    text, a({onclick: () => deleted.val = true}, "❌"),
  )
}

const EditableList = () => {
  const listDom = ul()
  const textDom = input({type: "text"})
  return div(
    textDom, " ",
    button({onclick: () => van.add(listDom, ListItem({text: textDom.value}))}, "➕"),
    listDom,
  )
}

van.add(document.body, EditableList())
```

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/editable-list)

### [Stateful binding](https://vanjs.org/tutorial#stateful-binding)

While dealing with state updates for `State`-derived child node, a user can choose to, instead of regenerating the new version of the DOM node entirely based on new state values, mutate the existing DOM node that is already connected to the document tree based on all the new values and old values of its dependencies. This feature can be used as an optimization to avoid the entire DOM subtree being completely re-rendered.

The following code is a snippet of the [auto-complete application](https://vanjs.org/demo#auto-complete) which leverages this feature to optimize:

```
div({class: "root"}, textarea({onkeydown, oninput}), dom => {
  if (dom && candidates.val === candidates.oldVal) {
    // If the candidate list doesn't change, we don't need to re-render the
    // suggetion list. Just need to change the selected candidate.
    dom.querySelector(`[data-index="${selectedIndex.oldVal}"]`)
      ?.classList?.remove("selected")
    dom.querySelector(`[data-index="${selectedIndex.val}"]`)
      ?.classList?.add("selected")
    return dom
  }
  return SuggestionList({candidates: candidates.val, selectedIndex: selectedIndex.val})
})
```

The piece of code above is building a suggestion list that is reactive to the changes of selection `candidates` and `selectedIndex`. When selection `candidates` change, the `suggestionList` needs to be regenerated. However, if only `selectedIndex` changes, we only need to update the DOM element to indicate that the new candidate is being selected now, which can be achieved by changing the `classList` of relevant candidate elements.

To facilitate stateful binding, the binding function takes the `dom` parameter, which is the current version of the DOM node prior to UI updates (or `undefined` when the binding function is first called). The binding function can either return `dom` (which means we don't want to update the DOM node to a new version), a primitive value (a new `Text node` will be created for it), or a new DOM node (whose `isConnected` property should be `false`).

### [Polymorphic Binding](https://vanjs.org/tutorial#polymorphic-binding)

If you use **VanJS** to build reusable UI components, it might be desirable for your components, just like tag functions, to accept a static value, a `State` object, or a binding function as a property value. For instance, for a reusable `Button` component like that:

```
const Button = ({color, ...}) = button(
  ...
)
```

it would be desirable for the `color` property of `Button` component to accept a static value, a `State` object, or a binding function. If the `color` property is used as a DOM node property or as a child node, things can work out of the box, as tag functions and `van.add` support static values, `State` objects, and binding functions in `props` and `children` parameter. However, if the `color` property is used inside a binding function for a `State`-derived property or a `State`-derived child, it would be hard for your component to work with different types of input. Consider the example below:

```
button({style: () => `background-color: ${color};`},
  ...
)
```

When `color` is a static value, we should use `${color}`. However, when `color` is a state, we should use `${color.val}`, and when `color` is a binding function, we should use `${color()}` . This makes it hard to build reusable UI component that accepts all types of property values.

To tackle this issue, you can define an ad-hoc value resolver to get value for different types of property inputs. The value resolver can be something like this:

```
const stateProto = Object.getPrototypeOf(van.state())
const val = v => {
  const protoOfV = Object.getPrototypeOf(v ?? 0)
  if (protoOfV === stateProto) return v.val
  if (protoOfV === Function.prototype) return v()
  return v
}
```

Note that we're using `Object.getPrototypeOf(van.state())` (`van.state()` returns a dummy `State` object) to get the [prototype object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) of `State` objects. It's guaranteed that all `State` objects in **VanJS** share the same prototype.

Let's look at a practical example - a reuseable button whose `color`, `text` and `onclick` properties can be a static value, a `State` object, or a binding function:

```
const {button, span} = van.tags

const stateProto = Object.getPrototypeOf(van.state())
const val = v => {
  const protoOfV = Object.getPrototypeOf(v ?? 0)
  if (protoOfV === stateProto) return v.val
  if (protoOfV === Function.prototype) return v()
  return v
}

const Button = ({color, text, onclick}) =>
  button({style: () => `background-color: ${val(color)};`, onclick}, text)

const App = () => {
  const colorState = van.state("green")
  const textState = van.state("Turn Red")

  const turnRed = () => {
    colorState.val = "red"
    textState.val = "Turn Green"
    onclickState.val = turnGreen
  }
  const turnGreen = () => {
    colorState.val = "green"
    textState.val = "Turn Red"
    onclickState.val = turnRed
  }
  const onclickState = van.state(turnRed)

  const lightness = van.state(255)

  return span(
    Button({color: "yellow", text: "Click Me", onclick: () => alert("Clicked")}), " ",
    Button({color: colorState, text: textState, onclick: onclickState}), " ",
    Button({
      color: () => `rgb(${lightness.val}, ${lightness.val}, ${lightness.val})`,
      text: "Get Darker",
      onclick: () => lightness.val = Math.max(lightness.val - 10, 0),
    }),
  )
}

van.add(document.body, App())
```

**Demo:**

[Try on jsfiddle](https://jsfiddle.net/gh/get/library/pure/vanjs-org/vanjs-org.github.io/tree/master/jsfiddle/tutorial/poly-binding)

[The End](https://vanjs.org/tutorial#the-end)
---------------------------------------------

* * *

🎉 Congratulations! You have completed the entire tutorial of **VanJS**. Now you can start your journey of building feature-rich applications!

To learn more, you can:

*   check out a list of [sample applications](https://vanjs.org/demo) built with **VanJS**.
*   read the in-depth discussion of a few [advanced topics](https://vanjs.org/advanced).
*   check out how to build a [fullstack app](https://vanjs.org/ssr) with SSR, CSR and hydration.
*   check out [**VanX**](https://vanjs.org/x) for more features: reactive list, global app state, server-driven UI, serialization, etc.
*   debug complex dependencies in your app via [**VanGraph**](https://vanjs.org/graph).

[API Index](https://vanjs.org/tutorial#api-index)
-------------------------------------------------

* * *

Below is the list of all top-level APIs in **VanJS**:

*   `van.tags`
*   `van.add`
*   `van.state`
*   `van.derive`
*   `van.hydrate`