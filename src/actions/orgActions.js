import axios from "axios";


export const GET_ORGS = "GET_ORGS";
export const CLEAR_ORGS = "CLEAR_ORGS";



export const GetOrgsAction=(username)=>{
    return async (dispatch, getState)=>{
        try { 
            await axios.get(`https://api.github.com/users/${username}/orgs`).then(res=>{
                dispatch({type:GET_ORGS,orgs_arr:res.data});
            })
          } catch (e) {
            console.log(e);
          }
        
     }
}

export const ClearOrgsAction=()=>{
  return async (dispatch, getState)=>{
      try { 
          dispatch({type:CLEAR_ORGS});
        } catch (e) {
          console.log(e);
        }
      
   }
}
