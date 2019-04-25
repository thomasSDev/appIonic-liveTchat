import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpHeaders, HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public auth:AuthService) {
        console.log("TokenInterceptor ctor");
    }

    intercept(request: HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

        // Set Header
        let h = new HttpHeaders({
        'Content-Type': "application/x-www-form-urlencoded",
        'token':this.auth.getToken()
        });

        // // Je récupère le token dans la réponse et je le set dans le session storage
        // if (event instanceof HttpResponse) {
        //     if(event.headers.get('token') != null){
        //         this.auth.setToken(event.headers.get('token'));
                
        //     }
        // }
        request = request.clone({
                    headers:h
        });
        console.log("INTERCEPTOR");
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                console.log('REQUEST ----->>>> ', request);
                console.log('event--->>>', event);
                if(event.body != null && event.body != undefined){
                    if(event.body.token != null && event.body.token != undefined){
                        this.auth.setToken(event.body.token)
                        console.log("mon_token : ", event.body.token)
                    }
                }
                    
            }
            return event;
        }));
    }

}
