const initState = [
  {
    id: 0,
    name: "Learn react-redux",
    completed: false,
    priority: "Medium",
  },
  {
    id: 1,
    name: "Learn react Js",
    completed: true,
    priority: "Medium",
  },
];
const todoListReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((element) =>
        element.id === action.payload
          ? { ...element, completed: !element.completed }
          : element
      );
    default:
      return state;
  }
};

export default todoListReducer;
