import { IInfoObject } from '~/store/modules/info';
import { AcademyError, AcademyErrorCode } from "academy-abr";

export function errorHandle(err: AcademyErrorCode): IInfoObject {
    if (process.env.ENV === 'dev' || !process.env.ENV) {
        // tslint:disable-next-line: no-console
        console.error(err);
    }
    return {
        type: 'ERROR',
        errCode: err.academyErrorCode as AcademyError,
        message: err.getMessage(),
    };
}
