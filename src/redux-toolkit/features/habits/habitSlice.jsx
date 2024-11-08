import { createSlice } from "@reduxjs/toolkit";



const habitSlice = createSlice({
    name: "habits",
    initialState: { habits: [] , id:1 },
    reducers: {
        addHabit: (state, action) => {
            const newHabit = {
                id:state.id++,
                title: action.payload.title,
                type: action.payload.type,
                status:'Not Completed',

            }
            state.habits.push(newHabit);
                
        },
        removeHabit: (state, action) => {
           state.habits = state.habits.filter((habit) => {
                return habit.id!==action.payload.id
            })
        },

        changeStatus: (state, action) => {
            // console.log('i am in changestatus')
            state.habits = state.habits.map(
                (habit) => {
                    return (
                        
                        habit.id === action.payload.id ?
                            {...habit, status:habit.status=='Not Completed'?'Completed':'Not Completed'}
                            :habit
                    )
                }
            )
        },


    }
})

export const { addHabit , removeHabit, changeStatus} = habitSlice.actions;
export default habitSlice.reducer;