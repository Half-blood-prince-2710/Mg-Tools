import { create } from "zustand";

export const useHabitStore = create(
  (set,get) => ({
    habits: [],
    id: 1,
    
    addHabit: (newHabit) => {
      const habitWitId = { ...newHabit, id: get().id }
      set(
        (state) => (
          {
            habits: [...state.habits, habitWitId],
            id:state.id +1,
          }
        )
      )
    },
    
    removeHabit: (id) =>
      set((state) => ({
        habits: state.habits.filter(
          (habit) => habit.id !== id
        ),
      })),
        changeStatus: (id) => set((state) => ({
          habits: state.habits.map((habit) =>  habit.id === id ? { ...habit, status: habit.status === 'Not Completed' ? 'Completed' : 'Not Completed' } :habit)
    }))
  })
);
