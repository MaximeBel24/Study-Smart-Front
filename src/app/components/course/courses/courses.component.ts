import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/course.model';
import { CourseService } from '../../../services/course.service';
import { AuthService } from '../../../services/auth.service';
import { Image } from '../../../model/image.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses?: Course[]; // un tableau de cours

  apiurl: string = 'http://localhost:8080/courses/api';

  constructor(
    private courseService: CourseService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.courseService.listCourses().subscribe((cours) => {
      // console.log(cours);
      this.courses = cours;
    });

    this.loadCourses();
  }

  // loadCourses() {
  //   this.courseService.listCourses().subscribe((crs) => {
  //     // console.log(crs)
  //     this.courses = crs;

  //     this.courses.forEach((crs) => {
  //       crs.imageStr = 'data:'
  //       + crs.images[0].type
  //       + ';base64,'
  //       + crs.images[0].image;
  //     });
  //   });
  // }

  loadCourses() {
    this.courseService.listCourses().subscribe((crs) => {
      this.courses = crs;
    });
  }

  deleteCourse(c: Course) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.courseService.deleteCourse(c.id).subscribe(() => {
        // console.log("Cours supprimé");
        this.loadCourses();
      });
  }
}
