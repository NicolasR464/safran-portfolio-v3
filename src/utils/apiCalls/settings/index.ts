import axios, { AxiosInstance } from 'axios'

/**
 * Adds an Authorization header with a JWT token to the specified axios instance.
 *
 * This function sets the Authorization header of the provided axios instance
 * to include the given JWT token. This is typically used to authenticate
 * API requests.
 * @param {AxiosInstance} axiosInstance - The axios instance to which the Authorization header will be added.
 * @param {string} JWT - The JSON Web Token to be included in the Authorization header.
 * @returns {void}
 * @example
 * const jwtToken = 'your.jwt.token';
 * addAuthHeader(axiosInstance, jwtToken);
 * // Now all subsequent requests using the provided axiosInstance will include the Authorization header
 */
export const addAuthHeader = (
    axiosInstance: AxiosInstance,
    JWT: string
): void => {
    axiosInstance.defaults.headers.Authorization = `Bearer ${JWT}`
}

/**
 * Creates an Axios instance with the specified base URL.
 * @param {string} baseURL - The base URL for the Axios instance.
 * @returns {AxiosInstance} - The created Axios instance.
 */
export const createInstance = (baseURL: string): AxiosInstance => {
    const instance = axios.create({
        baseURL,
        timeout: 40_000,
    })
    return instance
}

/**
 * Creates an Axios instance for API requests.
 * @returns {AxiosInstance} - The created Axios instance.
 */
export const localApiInstance = createInstance(
    typeof window === 'undefined'
        ? process.env.LOCAL_API!
        : process.env.NEXT_PUBLIC_LOCAL_API!
)
