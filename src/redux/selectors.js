import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((element) => {
      if (status === "All") {
        return priorities && priorities.length
          ? element.name.includes(searchText) &&
              priorities.includes(element.priority)
          : element.name.includes(searchText);
      } else {
      }

      return (
        element.name.includes(searchText) &&
        (status === "Completed" ? element.completed : !element.completed) &&
        (priorities && priorities.length
          ? priorities.includes(element.priority)
          : true)
      );
    });
  }
);
