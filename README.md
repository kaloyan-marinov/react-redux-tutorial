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

# `redux` vs `react-redux`

---

`redux` gives you a **store**, and lets you keep state in it, and get state out, and respond when the state changes. But that’s all it does.

It’s actually `react-redux` that lets you connect pieces of the state to React components.

... `redux` knows nothing about React at all.

The `redux` library can be used outside of a React app too.

# Redux Has One Global Store

---

We’ve talked about how Redux keeps the **state** of your app in a single **store**. And how you can extract parts of that state and plug it into your components as props.

You’ll often see the words “state” and “store” used interchangeably. Technically, the **state** is the data, and the **store** is where it’s kept.

- as step 1 of our refactoring from plain React to Redux, we need to create a store to hold the state... Redux comes with a handy function that creates stores, and it’s called `createStore`. We have to provide a function that will return the state. That function is called a **reducer**...
- Redux called your reducer at the time you created the store.
- A Redux reducer is a function with a signature `(state, action) => newState`; reduces a set of actions (over time) into a single state; happens over the lifetime of your running app. It has another job, too: It should return the initial state the first time it’s called.
- **Important Rule of Reducers #1**: Never return undefined from a reducer.
- **Reducer Rule #2**: Reducers must be **pure functions**. (This means that they can’t modify their arguments, and they can’t have side effects.) (A “side effect” is any change to something outside the scope of the function. Don’t change variables outside the scope of the function, don’t call other functions that change things (like `fetch`, which affects the network and other systems), don’t dispatch actions, and so on.) The most important thing is this: **don’t modify the `state` argument**.

# Dispatch Actions to Change the State

---

- An **action** is Redux-speak for a plain object with a property called `type`.
- ... we Redux users usually give our actions types that are **plain strings**, and often uppercased, to signify that they’re meant to be constant values.
- Actions, despite their active-sounding name, ... don’t really _do_ anything ... on their own... In order to make an action DO something, you need to **dispatch** it.

The store we created earlier has a built-in function called `dispatch`. Call it with an action, and Redux will call your reducer with that action (and then replace the state with whatever your reducer returned).

Every call to `dispatch` results in a call to your reducer!

# All These Rules

---

Redux is built on the idea of immutability... with some simple rules.

- State is read-only, and actions are the only way to modify it.
- Changes happen one way, and one way only: dispatch(action) -> reducer -> new state.
- The reducer function must be “pure” – it cannot modify its arguments, and it can’t have side effects.

# How to Use React with Redux

---

1. Wrapping the contents of a component with the `Provider` component
   enables all direct and indirect descendants to access the Redux store.

**But not automatically.**
We’ll need to use the `connect` function on our components to access the store.

2. What `connect` does is hook into Redux, pull out the entire state,
   and pass it through the `mapStateToProps` function that you provide.

This needs to be a custom function
because only you know the “shape” of the state you’ve stored in Redux.

The object you return from `mapStateToProps` gets fed into your component as props.

... usually you’ll be picking out pieces of data
the component needs from a larger collection of state.

3. It is **the connected component** that **needs to be wrapped with the `Provider` component**.
