import axios from 'axios';
import urljoin from 'url-join';

/**
 * POST to the server at the specified route.
 * @method POST
 */
export async function postAsync<T>(route: string, params: any): Promise<{ result?: T, error?: Error }> {
    try {
        const response = await axios.post(route, params);
        return { result: response?.data, error: undefined };
    } catch (error) {
        console.error(`Error during POST ${route}`, error);
        return { result: undefined, error };
    }
}

/**
 * GET from the server at the specified route.
 * @method GET
 */
export async function getAsync<T>(route: string, param?: any): Promise<{ result?: T, error?: Error }> {
    try {
        const url = param ? urljoin(route, String(param)) : route;
        const response = await axios.get(url);
        return { result: response?.data, error: undefined };
    } catch (error) {
        console.error(`Error during GET ${route}`, error);
        return { result: undefined, error };
    }
}
