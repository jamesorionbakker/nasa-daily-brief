import axios from "axios";

export async function get(url, page){
    console.log('querying...')
    let req = await axios.get(url)
    return req.data
}