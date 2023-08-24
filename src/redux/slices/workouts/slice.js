import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
 workouts:[]
};

const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    setWorkouts: (state, action) => {
        let temp=[...state.workouts]
         temp.push(action.payload)
         state.workouts=temp
         console.log(temp);
    },
    setAllWorkout: (state, action) => {
       state.workouts=action.payload
    },
   
   
  },
});

export default workoutSlice;