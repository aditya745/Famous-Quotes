import { FETCH_POSTS } from "./types";
import axios from "axios";

export const fetchQuote = () => dispatch => {
  axios.get("https://talaikis.com/api/quotes/").then(res =>
    dispatch({
      type: FETCH_POSTS,
      payload: res.data
    })
  );
};
//if Adding quote was possible 
/*export const newPost = postData => dispatch => {
  axios.post("https://talaikis.com/api/quotes/", postData).then(res =>
    dispatch({
      type: ADD_POST,
      payload: res.data
    })
  );
};*/
