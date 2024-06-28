import { Injectable } from '@angular/core';
import { Course } from '../model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses : Course[];
  course! : Course;

  constructor() { 
    this.courses = [
      {id: 1, title: "Cours Java", description : "Cours pour apprendre les bases en Java", image: "test", price: 19.99, duration: 30, level: "Débutant"},
      {id: 2, title: "Cours Angular", description : "Cours pour apprendre les bases en Java", image: "test", price: 24.99, duration: 40, level: "Débutant"},
      {id: 3, title: "Cours Flutter", description : "Cours pour apprendre les bases en Java", image: "test", price: 29.99, duration: 35, level: "Débutant"}

    ]
  }

  listCourses():Course[] {
    return this.courses;
  }

  addCourse(course: Course){
    this.courses.push(course);
  }

  deleteCourse(course: Course){
    const index = this.courses.indexOf(course, 0);
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }

  showCourse(id: number): Course{
    this.course = this.courses.find(c => c.id == id)!;
    return this.course;
  }

    sortCourses(){
    this.courses = this.courses.sort((n1,n2) => {
      if(n1.id! > n2.id!) {
        return 1;
      }

      if(n1.id! < n2.id!) {
        return -1;
      }

      return 0;
    })
  }

  updateCourse(c : Course){
    this.deleteCourse(c);
    this.addCourse(c);
    this.sortCourses();
  }

}
