// Action Constants
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

// Action Creators (:= functions that return action objects)
export function createIncrementAction() {
  return { type: INCREMENT };
}

export const createDecrementAction = () => ({ type: DECREMENT });

export const createResetAction = () => ({ type: RESET });
