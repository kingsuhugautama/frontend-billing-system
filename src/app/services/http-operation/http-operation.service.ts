import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from 'src/app/model/http-operation/http-operation.model';
import Swal from 'sweetalert2';
import { UtilityService } from '../utility/utility.service';

@Injectable({
    providedIn: 'root'
})
export class HttpOperationService {

    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private utilityService: UtilityService,
    ) { }

    defaultGetRequest(url: string, params?: any, showErrorAlert?: boolean): Observable<any> {

        return this.httpClient.get<any>(
            url,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                params: params
            }
        ).pipe(
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    // Menampilkan SweetAlert Error
                    if (showErrorAlert) {
                        this.handlingErrorWithStatusCode200(result);
                    } else {
                        return result;
                    }
                }
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error, params);
            }),
        );
    }

    defaultGetRequestWithLoading(url: string, params?: any): Observable<any> {
        this.utilityService.onShowLoadingBeforeSend();

        return this.httpClient.get<any>(
            url,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                params: params
            }
        ).pipe(
            map((result: HttpResponseModel) => {
                Swal.close();

                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error, params);
            }),
        );
    }

    defaultPostRequest(url: string, req: any): Observable<any> {
        this.utilityService.onShowLoadingBeforeSend();

        return this.httpClient.post<any>(
            url, req,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            map((result: HttpResponseModel) => {
                Swal.close();

                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error, req);
            }),
        );
    }

    defaultPostRequestWithoutLoading(url: string, req: any): Observable<any> {
        return this.httpClient.post<any>(
            url, req,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error, req);
            }),
        );
    }

    defaultPostRequestByDynamicFilter(url: string, req: PostRequestByDynamicFiterModel[]): Observable<any> {
        this.utilityService.onShowLoadingBeforeSend();

        return this.httpClient.post<any>(
            url, req,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            map((result: HttpResponseModel) => {
                Swal.close();

                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error, req);
            }),
        );
    }

    defaultPutRequest(url: string, req: any): Observable<any> {
        this.utilityService.onShowLoadingBeforeSend();

        return this.httpClient.put<any>(
            url, req,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            map((result: HttpResponseModel) => {
                Swal.close();

                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error, req);
            }),
        );
    }

    defaultPutRequestWithoutParams(url: string): Observable<any> {
        return this.httpClient.put<any>(
            url, null,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            tap((result) => {
                this.utilityService.onShowLoading();
            }),
            delay(2100),
            map((result: HttpResponseModel) => {
                if (result.responseResult === false) {
                    console.log('Goes Here!');
                    this.handlingErrorWithStatusCode200(result);
                } else {
                    return result;
                }
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error);
            }),
        );
    }

    defaultDeleteRequest(url: string): Observable<any> {
        return this.httpClient.delete<any>(
            url,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error);
            }),
        )
    }

    defaultDeleteRequestWithBody(url: string, req: any): Observable<any> {
        const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            body: req
        };

        return this.httpClient.delete<any>(
            url, options
        ).pipe(
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    // Menampilkan SweetAlert Error
                    this.handlingErrorWithStatusCode200(result);
                }
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error, req);
            }),
        )
    }

    defaultUploadFileRequest(url: string, req: FormData): Observable<any> {
        this.utilityService.onShowLoadingBeforeSend();

        return this.httpClient.post<any>(url, req)
            .pipe(
                map((result: HttpResponseModel) => {
                    Swal.close();

                    if (result.responseResult) {
                        return result;
                    } else {
                        this.handlingErrorWithStatusCode200(result);
                    }
                }),
                catchError((error: HttpErrorResponse): any => {
                    return this.handlingError(error, req);
                }),
            );
    }

    defaultGetPrintRequest(url: string, params: any, filename?: string): void {
        let base64encodedData = btoa('jasperadmin:jasperadmin');

        this.httpClient.get(
            `${url}.pdf`,
            {
                headers: new HttpHeaders()
                    .set('Accept', 'application/pdf')
                    .set('Content-Type', 'application/pdf')
                    .set('Authorization', `Basic ${base64encodedData}`),
                params: params,
                responseType: 'arraybuffer',
            }
        ).pipe(
            tap((result) => {
                this.utilityService.onShowLoading();
            }),
            delay(2100),
            map((result) => {
                return result;
            }),
            catchError((error: HttpErrorResponse): any => {
                return this.handlingError(error, params);
            }),
        ).subscribe((result: any) => {
            const file = new Blob([result], { type: 'application/pdf' });

            const fileUrl = window.URL.createObjectURL(file);

            window.open(fileUrl);
        })
    }

    handlingErrorWithStatusCode200(response: HttpResponseModel): any {

        if (response.data.length > 0 && typeof response.data !== "string") {
            this.utilityService.onShowingMultipleMessageAlert('error', 'Oops...', response.data);
        };

        if (Object.keys(response.data).length == 0) {
            this.utilityService.onShowingCustomAlert('error', 'Oops...', response.message);
        };

        return;
    }

    handlingError(error: HttpErrorResponse, parameter?: any): any {
        return throwError(error);
    }
}
