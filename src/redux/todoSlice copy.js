// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getTodosAsync = createAsyncThunk(
//   "todos/getTodosAsync",
//   async () => {
//     const resp = await fetch('http://localhost:7000/todos');
//     if (resp.ok) {
//       const todos = await resp.json();
//       return { todos };
//     }
//   }
// );

// export const addTodoAsync = createAsyncThunk(
//   "todos/addTodoAsync",
//   async (payload) => {
//     const resp = await fetch('http://localhost:7000/todos', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title: payload.title }),
//     });

//     if (resp.ok) {
//       const todo = await resp.json();
//       return { todo };
//     }
//   }
// );


// export const deleteTodoAsync = createAsyncThunk(
//     "todos/deleteTodoAsync",
//     async (payload) => {
//       const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
//         method: "DELETE",
//       });
//       if (resp.ok) {
//           // const todo = await resp.json();
//           // return { id: todo.id, completed: todo.completed };
//           return { id: payload.id };
//         }
//     }
//   );

// export const todoSlice = createSlice({
//   name: "todos",
//   initialState: [],
  
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: Date.now(),
//         title: action.payload.title,
//       };
//       state.push(todo);
//     },

//     deleteTodo: (state, action) => {
//       return state.filter((todo) => todo.id !== action.payload.id);
//     },
//   },
//   extraReducers: {
//     [getTodosAsync.fulfilled]: (state, action) => {
//       console.log("fetched data 성공");
//       return action.payload.todos;
//     },

//     [addTodoAsync.fulfilled]: (state, action) => {
//       state.push(action.payload.todo);
//     },

//     [deleteTodoAsync.fulfilled]: (state, action) => {
//         return state.filter((todo) => todo.id !== action.payload.id);
//       },
//   },
// });

// export const { addTodo, deleteTodo } = todoSlice.actions;

// export default todoSlice.reducer;
