import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpsRequestInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('accessToken');
        const dupReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token)           
        });
        return next.handle(dupReq);
    }
}
