import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../model/course.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.css'
})
export class ViewCourseComponent implements OnInit{

  currentCourse = new Course();

  constructor(
    private courseService : CourseService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseService.consultCourse(this.activatedRoute.snapshot.params['id'])
    .subscribe(crs => {
      this.currentCourse = crs;
    })
  }
  

}
