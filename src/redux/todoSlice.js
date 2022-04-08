import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const resp = await fetch('http://localhost:8080/api/calendar');
    if (resp.ok) {
      const todos = await resp.json();
      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const resp = await fetch('http://localhost:8080/api/calendar', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title, date: payload.date }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);


export const deleteTodoAsync = createAsyncThunk(
    "todos/deleteTodoAsync",
    async (payload) => {
      const resp = await fetch(`http://localhost:8080/api/calendar/${payload.id}`, {
        method: "DELETE",
      });
      if (resp.ok) {
          // const todo = await resp.json();
          // return { id: todo.id, completed: todo.completed };
          return { id: payload.id };
          // return { todo };
        }
    }
  );

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Date.now(),
        title: action.payload.title,
        date: action.payload.date
      };
      state.push(todo);
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {

    [getTodosAsync.fulfilled]: (state, action) => {
      console.log("일정추가 버튼클릭 성공");
      return action.payload.todos;
    },

    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },

    [deleteTodoAsync.fulfilled]: (state, action) => {
      console.log("삭제 버튼클릭 성공");
      return state.filter((todo) => todo.id !== action.payload.id);
      },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
