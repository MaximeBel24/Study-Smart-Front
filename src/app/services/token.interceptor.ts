import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    exclude_array : string[] = ['/connexion', '/inscription', '/verifyEmail'];

    toExclude(url : string){
        var length = this.exclude_array.length;
        for(var i = 0; i < length; i++){
            if(url.search(this.exclude_array[i]) != -1)
                return true;
        }
        return false;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const toExclude = "/login"
        //tester s'il s'agit d elogin , on ajoute pas le header Authorization puisqu'on a
        //pas encore de JWT (il est null)
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