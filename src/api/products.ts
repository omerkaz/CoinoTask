import axios, { AxiosRequestConfig } from "axios";

// backendBaseUrl=https://dummyjson.com
export const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

const api = axios.create({
  baseURL: backendBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Back-end Communication Requests
 */

/**
 * GET
 * @param {*} url
 * @param {*} params
 * @returns response
 */

export const axios_get = (
  url: string,
  params?: AxiosRequestConfig["params"]
) => {
  return api.get(`${url}`, { params });
};
/**
 * POST
 * @param {*} url
 * @param {*} payload
 * @returns response
 */
export const axios_post = (url: string, payload: any) => {
  return api.post(`${url}`, payload, {});
};
/**
 * PATCH
 * @param {*} url
 * @param {*} payload
 * @returns response
 */
export const axios_patch = (url: string, payload: any) => {
  return api.patch(`${url}`, payload, {});
};
/**
 * DELETE
 * @param {*} url
 * @param {*} id
 * @returns response
 */
export const axios_delete = (url: string, id: any) => {
  return api.delete(`${url + id}`, {});
};
