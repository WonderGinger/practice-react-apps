import { ADD_LANE, ADD_POST } from './types';

export const addLane = (name) => {
    return dispatch => {
        dispatch({
            type: ADD_LANE,
            payload: {name}
        })
    }
}

export const addPost = (body, laneIndex) => {
    return dispatch => {
        dispatch({
            type: ADD_POST,
            payload: {
                body,
                laneIndex
            }
        })
    }
}