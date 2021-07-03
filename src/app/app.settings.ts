import {environment} from '../environments/environment';
// Since we're only serving on one port, we don't need to specify a URL.
export class AppSettings {
    public static BASE_URL                  =  environment.serverUrl;
    public static LOGIN_URL                 =  environment.serverUrl;
}
