export const getTodo = (parent, data, ctx) => ({
  todos: ctx.dataSources.todoFactory.all(),
});
