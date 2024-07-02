import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';
import { Category } from '../model/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiURL: string = 'http://localhost:8080/courses/api';

  // courses : Course[];
  course! : Course;
  // categories : Category[];

  constructor(private http : HttpClient) { 

    // this.categories = [
    //   {id : 1, name : "Programmation", description : "Les meilleurs cours pour devenir un codeur talentueux"},
    //   {id : 2, name : "Finance", description : "Les meilleurs cours pour devenir un as de la finance"}
    // ]

    // this.courses = [
    //   {id: 1, title: "Cours Java", description : "Cours pour apprendre les bases en Java", image: "test", price: 19.99, duration: 30, level: "Débutant", category : {id : 1, name : "Programmation", description : "Les meilleurs cours pour devenir un codeur talentueux"}},
    //   {id: 2, title: "Cours Angular", description : "Cours pour apprendre les bases en Java", image: "test", price: 24.99, duration: 40, level: "Débutant", category : {id : 1, name : "Programmation", description : "Les meilleurs cours pour devenir un codeur talentueux"}},
    //   {id: 3, title: "Cours Flutter", description : "Cours pour apprendre les bases en Java", image: "test", price: 29.99, duration: 35, level: "Débutant", category : {id : 1, name : "Programmation", description : "Les meilleurs cours pour devenir un codeur talentueux"}},
    //   {id: 4, title: "Cours sur la Bourse", description : "Cours pour apprendre les bases en bourse", image: "test", price: 19.99, duration: 45, level: "Débutant", category : {id : 2, name : "Finance", description : "Les meilleurs cours pour devenir un as de la finance"}}

    // ]
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

  //   sortCourses(){
  //   this.courses = this.courses.sort((n1,n2) => {
  //     if(n1.id! > n2.id!) {
  //       return 1;
  //     }

  //     if(n1.id! < n2.id!) {
  //       return -1;
  //     }

  //     return 0;
  //   })
  // }

  updateCourse(course : Course) : Observable<Course>{
    return this.http.put<Course>(this.apiURL, course, httpOptions);
  }

  listCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL+"/cat");
  }

  // consultCategory(id : number): Category {
  //   return this.categories.find(cat => cat.id == id)!;
  // }

}
