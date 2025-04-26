import axios from 'axios';

const createApi = (baseURL) => {
  if (!baseURL) {
    console.error('Missing API base URL!');
  }
  return axios.create({ baseURL });
};

export const apiAuth = createApi(import.meta.env.VITE_API_AUTH);
export const apiUser = createApi(import.meta.env.VITE_API_USER);
export const apiVote = createApi(import.meta.env.VITE_API_VOTE);
export const apiResult = createApi(import.meta.env.VITE_API_RESULT);
