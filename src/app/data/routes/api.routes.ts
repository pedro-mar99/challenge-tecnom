import { environment as ENV } from "src/environments/environment"

export const API_ROUTES = {
    PLACES: {
        WORKSHOPS: `${ENV.apiUrl}/places/workshops`
    },
    BOXES:{
        CONFIG: {
            ENCUESTAS:`${ENV.apiUrl}/boxes/config/encuestas`
        }
    }
}