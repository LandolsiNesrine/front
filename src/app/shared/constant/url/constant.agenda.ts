import { environment } from "src/environments/environment";

const url = environment.server.host;

export const CONSTANTE_AGENDA_URL = {
  AGENDA: `${url}/agenda`,
};