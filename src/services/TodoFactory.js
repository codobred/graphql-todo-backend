// @flow
import { Todo, TodoInput } from '../graphql/scheme/model';

export default class TodoFactory {
  static _counter = 1;
  static _todos: Array<Todo> = [];

  all(): Todo[] {
    return TodoFactory._todos;
  }

  addTodo(data: TodoInput): Todo {
    const todo = {
      id: TodoFactory._counter++,
      ...data,
    };

    TodoFactory._todos.push(todo);
    return todo;
  }
}
