import workoutSlice from './slice';
export const workoutSliceReducer = workoutSlice.reducer;
export const {setWorkouts,setAllWorkout} = workoutSlice.actions;
export const selectWorkout = (state) => state.workout.workouts;
