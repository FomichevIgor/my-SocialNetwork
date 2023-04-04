import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "86396951-1ef9-4c53-a0af-09ef01759401" },
});

export const usersAPI = {
    getUsers  (currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }

}
