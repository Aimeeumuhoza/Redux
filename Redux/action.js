import { createSlice } from "@reduxjs/toolkit";

 export const taskSlice = createSlice({

    name: "task",
    initialState: [],
    
    reducers: {
        addTask: (state,action) => {
            const newTask={
                id:action.payload.task,
                name:action.payload.task
            }
            state.push(newTask)
        },
        DeleteTask:(state,action)=>{
            return state.filter((item)=>item.id !==action.payload.id)
        }

    }

});
export  const {addTask,DeleteTask} = taskSlice.actions;

export default taskSlice.reducer
