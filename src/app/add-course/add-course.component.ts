import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { Image } from '../model/image.model';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';
import { Category } from '../model/category.model';
import { response } from 'express';

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

  uploadedImage!: File;
  imagePath: any;

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
    this.courseService.addCourse(this.newCourse).subscribe((course) => {
      this.courseService.uploadImageFS(this.uploadedImage, this.uploadedImage.name, course.id).subscribe((response : any) => {});

      this.router.navigate(['cours']);
    })
  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => {this.imagePath = reader.result}
  }

}
