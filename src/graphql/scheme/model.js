// @flow

export type TodoInput = {
  title: string,
  done: Boolean,
};

export type Todo = {
  id: number,
  ...TodoInput,
};
