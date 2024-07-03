import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit{

  newCourse : Course = new Course();
  categories! : Category[] ;

  newIdCat! : number;
  newCategory! : Category;

  constructor(
    private courseService : CourseService,
    private router : Router
  ) { }
  
  ngOnInit(): void {
    this.courseService.listCategories().subscribe(cats => 
      {this.categories = cats._embedded.categories;
        // console.log(cats);
      })
   }

  addCourse(){
    this.newCourse.category = this.categories.find(cat => cat.id == this.newIdCat)!;
    this.courseService.addCourse(this.newCourse)
    .subscribe(course => {
      // console.log(course)
      this.router.navigate(['cours'])
    })
  }

}
