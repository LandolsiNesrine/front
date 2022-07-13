import { environment } from "src/environments/environment";

const url = environment.server.host;

export const CONSTANTE_ADMINISTRATION_URL = {
    LOG_DATA: `${url}/administration/log/data`,
    LOG_DATA_USER: `${url}/administration/log/data/user`,

    ACCESS_DATA: `${url}/administration/access/data`,
    ACCESS_DATA_USER: `${url}/administration/access/user`,

    USERS: `${url}/administration/users`,
    USER: `${url}/administration/user`,

};