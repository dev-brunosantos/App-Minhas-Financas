import Axios from 'axios'

export const axiosConfig = Axios.create({
    baseURL: "http://192.168.0.176:9000"
})

