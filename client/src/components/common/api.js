import axios from "axios";

export async function get(url, page){
    let req = await axios.get(url)
    return req.data
}