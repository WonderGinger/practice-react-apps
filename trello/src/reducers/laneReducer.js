import { ADD_LANE, ADD_POST } from '../actions/types';

const initialState = [
            {
                name: "Planned tasks",
                posts: [{ body: "This is placeholder text" }],
            },
            {
                name: "Work in progress",
                posts: [{ body: "This is placeholder text" }],
            },
            {
                name: "Completed",
                posts: [{ body: "This is placeholder text" }],
            },
]

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_LANE:
            const newLane = {
                name: action.payload,
                posts: [],
            }
            return [...state, newLane];
        case ADD_POST:
            const { body, laneIndex } = action.payload;
            const newState = state.splice();
            newState[laneIndex].push(body);
            return newState;
        default: 
            return state;
    }
}