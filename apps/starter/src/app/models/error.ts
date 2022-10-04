import { HttpErrorResponse } from '@angular/common/http';

export type ErrorType = Error | HttpErrorResponse | string | null;
