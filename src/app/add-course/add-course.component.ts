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
    this.categories = this.courseService.listCategories();
   }

  addCourse(){
    this.newCategory = this.courseService.consultCategory(this.newIdCat);
    this.newCourse.category = this.newCategory;
    this.courseService.addCourse(this.newCourse);
    this.router.navigate(['cours'])
  }

}
