import { createSlice } from "@reduxjs/toolkit";

 export const taskSlice = createSlice({

    name: "task",
    initialState: [],
    
    reducers: {
        addTask: (state,action) => {
            const newTask={
                
                title:action.payload.title,
                description:action.payload.description,
                line:action.payload.line,

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
