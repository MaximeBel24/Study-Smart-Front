import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    exclude_array : string[] = ['/login', '/register', '/verifyEmail'];

    // toExclude(url : string){
    //     var length = this.exclude_array.length;
    //     for(var i = 0; i < length; i++){
    //         if(url.search(this.exclude_array[i]) != -1)
    //             return true;
    //     }
    //     return false;
    // }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        
        const toExclude = "/login"
        //tester s'il s'agit de login , on ajoute pas le header Authorization puisqu'on a
        //pas encore de JWT (il est null)
        if(request.url.search(toExclude) === -1){
            let jwt = this.authService.getToken();
            let reqWithToken = request.clone( {
                setHeaders: { Authorization : "Bearer " + jwt}
            })
            return next.handle(reqWithToken);
        }
        return next.handle(request);
    }
}