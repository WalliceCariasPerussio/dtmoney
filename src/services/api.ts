import axios from "axios";

export const api  =  axios.create({
    baseURL:'https://wallicecp.dev.br/api',
    headers: {
        'Authorization': `Bearer WxKhX1gQCcTlokjRZLG7fPFj0qjJBE8yU3Iuj6BW`
    }

})