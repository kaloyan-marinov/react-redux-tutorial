source: https://daveceddia.com/redux-tutorial/

# Introduction

---

If you’ve used React for more than a few minutes, you probably know about props and one-way data flow. Data is passed _down_ the **component tree** via props.

For data to come back _up_ the tree, it needs to flow through a callback function, so that callback function must first be passed _down_ to any components that want to call it to pass data up.

[This process is] known as “prop-drilling”.

Sooner or later you run into a situation where a top-level container has some data, and a child 4+ levels down needs that data... _it’s a pain_.

More importantly, it’s not very good software design. Intermediate components are forced to accept and pass along props that they don’t care about. This means refactoring and reusing those components will be harder than it needs to be.

Wouldn’t it be nice if the components that didn’t need the data didn’t have to see it at all?

Redux is one way to solve this problem.

# The Benefits of Redux

---

If you have components that are siblings and need to share data, the way to do that in React is to pull that data up into a parent component and pass it down with props.

Redux can help by giving you **one global “parent”** where you can store the data, and then you can `connect` the sibling components to the data with React-Redux.

Using the `connect` function that comes with `react-redux`, you can plug any component into Redux’s **store** and pull out the data it needs.

# Built-in Redux Alternatives

---

1. Redux Alternative: The React Context API

Under the hood, React-Redux uses React’s built-in Context API to pass data around... you can ... use Context directly. ... if your app is simple and you want an easy way to pass data around, Context might be perfect.

2. Another Alternative: Use the children Prop
