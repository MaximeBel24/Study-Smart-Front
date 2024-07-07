import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { Category } from '../model/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryWrapper } from '../model/category-wrapped.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiURL: string = 'http://localhost:8080/courses/api';
  apiURLCat: string = 'http://localhost:8080/courses/cat'

  course! : Course;

  constructor(private http : HttpClient, private authService : AuthService) { 

  }

  listCourses(): Observable<Course[]> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Course[]>(this.apiURL+"/all",{headers:httpHeaders});

  }

  addCourse(course: Course): Observable<Course> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Course>(this.apiURL+"/addcourse", course, {headers: httpHeaders});
  }

  deleteCourse(id : number){
    const url = `${this.apiURL}/delcourse${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers: httpHeaders});
  }

  consultCourse(id: number): Observable<Course> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Course>(url,{headers:httpHeaders});
  }


  updateCourse(course : Course) : Observable<Course>{
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Course>(this.apiURL+"/updatecourse", course, {headers:httpHeaders});
  }

  listCategories():Observable<CategoryWrapper> {
    let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<CategoryWrapper>(this.apiURLCat,{headers: httpHeaders});
  }

  searchByCategorie(idCat : number): Observable<Course[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Course[]>(url);
  }

  searchByTitle(title : string) : Observable<Course[]> {
    const url = `${this.apiURL}/coursesByTitle/${title}`;
    return this.http.get<Course[]>(url);
  }

  addCategory(cat : Category) : Observable<Category> {
    return this.http.post<Category>(this.apiURLCat, cat, httpOptions)
  }

  deleteCategory(id : number) {
    const url = `${this.apiURLCat}/${id}`
    return this.http.delete(url, httpOptions)
  }

}
