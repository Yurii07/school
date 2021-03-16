import { CREATE_SCHOOLCHILD } from "../actions/actionTypes";

const initialState = {

}

export const getSchoolboys = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SCHOOLCHILD:
            return {...state, children:  action.payload }
        default:  return state
    }

}