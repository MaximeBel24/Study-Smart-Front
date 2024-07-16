import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { Image } from '../model/image.model'
import { Category } from '../model/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiURL: string = environment.STUDY_SMART_API_URL+"/course";
  apiURLCat: string = environment.STUDY_SMART_API_URL+"/category";

  courses! : Course[];

  constructor(
    private http : HttpClient, 
    private authService : AuthService
  ) { 

  }

  listCourses(): Observable<Course[]> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer " + jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Course[]>(this.apiURL+"/all",
      // {headers:httpHeaders}
    );

  }

  addCourse(course: Course): Observable<Course> {
    // let jwt = this.authService.getToken();
    // jwt = "Bearer " + jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Course>(this.apiURL+"/add",course, 
      // {headers: httpHeaders}
    );
  }

  deleteCourse(id : number){
    const url = `${this.apiURL}/delete/${id}`;
    // let jwt = this.authService.getToken();
    // jwt = "Bearer " + jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, 
      // {headers: httpHeaders}
    );
  }

  consultCourse(id: number): Observable<Course> {
    const url = `${this.apiURL}/getbyid/${id}`;
    // let jwt = this.authService.getToken();
    // jwt = "Bearer " + jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Course>(url,
      // {headers:httpHeaders}
    );
  }


  updateCourse(course : Course) : Observable<Course>{
    // let jwt = this.authService.getToken();
    // jwt = "Bearer " + jwt;
    // let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Course>(this.apiURL+"/update", course, 
      // {headers:httpHeaders}
    );
  }

  searchByCategorie(idCat : number): Observable<Course[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Course[]>(url);
  }

  searchByTitle(title : string) : Observable<Course[]> {
    const url = `${this.apiURL}/getbytitle/${title}`;
    return this.http.get<Course[]>(url);
  }

  addCategory(cat : Category) : Observable<Category> {
    return this.http.post<Category>(this.apiURLCat, cat, httpOptions)
  }

  deleteCategory(id : number) {
    const url = `${this.apiURLCat}/${id}`
    return this.http.delete(url, httpOptions)
  }

  uploadImage(file: File, filename: string): Observable<Image>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/upload'}`
    return this.http.post<Image>(url, imageFormData);
  }

  loadImage(id: number): Observable<Image> {
    const url = `${this.apiURL + '/image/get/info'}/${id}`;
    return this.http.get<Image>(url);
  }

  uploadImageCourse(file: File, filename: string, idCourse: number): Observable<any>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/uploadImageCourse'}/${idCourse}`;
    return this.http.post(url, imageFormData);
  }

  deleteImage(id: number) {
    const url = `${this.apiURL}/image/delete/${id}`;
    return this.http.delete(url, httpOptions);
  }

  uploadImageFS(file: File, filename: string, idCourse: number): Observable<any>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.apiURL + '/image/uploadFS'}/${idCourse}`;
    return this.http.post(url, imageFormData);
  }
}
