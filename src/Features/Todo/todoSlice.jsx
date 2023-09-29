import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{id:1,text:'hello'}]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState, // Corrected the typo here
  reducers: {
    addTodo: (state, action) => {
        const todo = {
          id: nanoid(),
          text: action.payload.text,
        }
        state.todos.push(todo); // Push the entire 'todo' object
      },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
