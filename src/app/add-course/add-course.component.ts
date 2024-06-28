import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit{

  ngOnInit(): void { }

  newCourse = new Course();

  constructor(private courseService : CourseService) { }

  addCourse(){
    this.courseService.addCourse(this.newCourse);
  }

}
