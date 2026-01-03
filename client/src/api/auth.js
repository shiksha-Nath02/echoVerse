import axios from 'axios';
//import Signup from '../pages/Signup';

const API_URL='http://localhost:4444/api/auth';

//const api=axios.create({
//     baseURL: API_URL
// })

export const signup=(username, email, password)=>{
    return axios.post(
        `${API_URL}/signup`,
        {username, email, password},
        {withCredentials: true}//cookies bhi saath jayegi
    )
};
    //.then ka matlab wo promise hai
    //signup returns a promise 
    //promise ke aaage hi await lga skte hai
    //jab funtion bnate hai toh async use karte hai... aur await us funtion pe lgate hai jo promise ho

    export const login = ({ email, password }) => {
    return axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true }
    )
};

export const logout = () => {
  return axios.post(
    `${API_URL}/logout`,
    {},
    { withCredentials: true }
  );
};