import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private helper = new JwtHelperService();

  apiUrl : string = "http://localhost:8081/users"
  token! : string;

  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'], email :"maxime@gmail.com", enabled : true },
    { username: 'maxime', password: '123', roles: ['USER'], email :"maxime@gmail.com", enabled : true },
  ];

  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  public registredUser : User =new User();

  constructor(
    private router: Router, 
    private http : HttpClient
  ) {}

  login(user: User) {
    return this.http.post<User>(this.apiUrl+'/login', user, {observe:'response'});
  }

  saveToken(jwt : string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true;
  }

  decodeJWT() {
    if (this.token == undefined)
      return;
    const decodeToken = this.helper.decodeToken(this.token);
    this.roles = decodeToken.roles;
    this.loggedUser = decodeToken.sub;
  }

  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();
  }

  getToken():string {
    return this.token;
  }

  isTokenExpired() : Boolean
  {
    return this.helper.isTokenExpired(this.token);
  }

  registerUser(user: User){
    return this.http.post<User>(this.apiUrl+'/register', user, {observe: 'response'});
  }

  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token = undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    // localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (
        user.username == curUser.username &&
        user.password == curUser.password
      ) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });

    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles) 
        return false;
    return this.roles.indexOf('ADMIN') > 0;
  }

  getUserRoles(username : string){
    this.users.forEach((curUser) => {
      if(curUser.username == username ) {
        this.roles = curUser.roles
      }
    })
  }

  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login)
  }

  setRegistredUser(user: User){
    this.registredUser = user;
  }

  getRegistredUser(){
    return this.registredUser
  }

  validateEmail(code : string){
    return this.http.get<User>(this.apiUrl+'/verifyEmail/'+code);
  }
}
