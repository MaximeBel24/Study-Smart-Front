import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const toExclude = "/login"

        if(req.url.search(toExclude) === -1){
            let jwt = this.authService.getToken();
            let reqWithToken = req.clone( {
                setHeaders: { Authorization : "Bearer " + jwt}
            })
            return next.handle(reqWithToken);
        }
        return next.handle(req);
    }
}