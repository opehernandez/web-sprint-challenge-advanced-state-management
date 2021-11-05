import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const START_FETCH = 'START_FETCH'
export const SET_ERROR = 'SET_ERROR'
export const ADD_SMURF = 'ADD_SMURF'
export const FAILED_FETCH = 'FAILED_FETCH'
export const SUCCESFUL_FETCH = 'SUCCESFUL_FETCH'


export const getSmurf = () => {
   return (dispatch) => {
        dispatch(fetchStart())
       axios.get(`http://localhost:3333/smurfs`)
       .then(resp => {
           dispatch(fetchSuccess(resp.data[0]))
           dispatch(fetchSuccess(resp.data[1]))
       })
       .catch(err => {
           dispatch(fetchFailed(err))
       })
   }
}

export const fetchStart = () => {
    return({type: START_FETCH})
}

export const fetchSuccess = (smurf) => {
    return({type: SUCCESFUL_FETCH, payload: smurf})
}

export const fetchFailed = (error) => {
    return({type: FAILED_FETCH, payload: error})
}

export const addSmurf = (smurf) => {
    return({type: ADD_SMURF, payload: smurf})
}

export const setError = (error) => {
    return({type: SET_ERROR, payload: error})
}
