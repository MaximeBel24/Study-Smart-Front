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
    this.courseService.listCourses().subscribe(cours => {
      console.log(cours);
      this.courses = cours ;
    })

    this.loadCourses();
  }

  loadCourses() {
    this.courseService.listCourses().subscribe(crs => {
      console.log(crs)
      this.courses = crs;
    })
  } 

  deleteCourse(c: Course){
    let conf = confirm("Etes-vous sûr ?")
    if(conf)
      this.courseService.deleteCourse(c.id).subscribe(() => {
        console.log("Cours supprimé");
        this.loadCourses();
    });
  }
  
}
