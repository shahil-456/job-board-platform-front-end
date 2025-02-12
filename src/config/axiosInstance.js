import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `https://job-board-platform-server.vercel.app/api`,
    withCredentials: true,
});