
import axios from "axios";


export const GET_REPOS = "GET_REPOS";
export const CLEAR_REPOS = "CLEAR_REPOS";



export const GetReposAction=(username)=>{
    return async (dispatch, getState)=>{
        try { 
            await axios.get(`https://api.github.com/users/${username}/repos`).then(res=>{
                dispatch({type:GET_REPOS,repos_arr:res.data});
            })
          } catch (e) {
            console.log(e);
          }
        
     }
}
export const ClearReposAction=()=>{
    return async (dispatch, getState)=>{
        try { 
            dispatch({type:CLEAR_REPOS});
          } catch (e) {
            console.log(e);
          }
        
     }
}
