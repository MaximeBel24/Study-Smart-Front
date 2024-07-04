import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { Category } from '../model/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryWrapper } from '../model/category-wrapped.model';
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

  constructor(private http : HttpClient) { 

  }

  listCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiURL);

  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiURL, course, httpOptions);
  }

  deleteCourse(id : number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consultCourse(id: number): Observable<Course> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Course>(url)
  }


  updateCourse(course : Course) : Observable<Course>{
    return this.http.put<Course>(this.apiURL, course, httpOptions);
  }

  listCategories():Observable<CategoryWrapper> {
    return this.http.get<CategoryWrapper>(this.apiURLCat);
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
