import axios from "axios"

export function getUser() {

    return axios.request({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users"
    });
    // return data;
};
// export const postUser=(payLoad)=>{
//     return axios.post("url",payLoad);
// }
