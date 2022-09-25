import { environment } from "src/environments/environment";

const url = environment.server.host;

export const CONSTANTE_ACCOUNT_URL = {
    AUTHENTICATE: `${url}/authenticate`,
    WHOIAM: `${url}/account/whoiam`,
    FUNCTION: `${url}/account/function`,
    PROJECTS: `${url}/project/myProjects`,
};