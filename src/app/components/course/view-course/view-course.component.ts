import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.css'
})
export class ViewCourseComponent implements OnInit{

  constructor(
    private courseService : CourseService
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

}
