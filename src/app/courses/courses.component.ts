import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

  courses? : Course[];

  constructor(private courseService : CourseService) {
    
  }

  ngOnInit(): void {
      this.courses = this.courseService.listCourses();
  }

  deleteCourse(c: Course){
    let conf = confirm("Etes-vous sûr ?")
    if(conf)
      this.courseService.deleteCourse(c);
  }
  
}
