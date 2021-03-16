import { CREATE_SCHOOLCHILD } from "./actionTypes";
import axios from "axios";
import createAction from "./actionCreators";

export function createSchoolchild() {
    return function(dispatch) {
        return axios.get("http://94.131.246.109:5555/v1/2/Schoolboy")
            .then(({ data }) => {
                console.log(data)
                 dispatch(createAction(CREATE_SCHOOLCHILD, data))
            });
    };
}