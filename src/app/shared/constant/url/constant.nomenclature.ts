import { environment } from "src/environments/environment";

const url = environment.server.host;

export const CONSTANTE_NOMENCLATURE_URL = {

    // ADM PROFILE
    URL_ADM_PROFILE: `${url}/nomenclature/adm/profile/`,
    URL_ADM_PROFILE_PAGE: `${url}/nomenclature/adm/profile/data/`,

    // NM SEXE
    URL_SEXE: `${url}/nomenclature/sexe/`,

};