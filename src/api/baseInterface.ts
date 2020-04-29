import { HttpStatusCode } from '../enums';

export interface BaseApiResponse {
    data?: any;
    message?: string;
    statusCode?: HttpStatusCode;
    status?: boolean;
}
