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
