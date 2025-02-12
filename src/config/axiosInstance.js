import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `https://job-board-platform-server.vercel.app`,
    withCredentials: true,
});
