import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/course.model';
import { Image } from '../../../model/image.model';
import { CourseService } from '../../../services/course.service';
import { Router } from '@angular/router';
import { Category } from '../../../model/category.model';
import { response } from 'express';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css',
})
export class AddCourseComponent implements OnInit {

  newCourse: Course = new Course();
  categories!: Category[];

  newIdCat!: number;
  newCategory!: Category;

  uploadedImage!: File;
  imagePath: any;

  constructor(
    private categoryService: CategoryService,
    private courseService: CourseService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.listCategories().subscribe((ctgr) => {
      this.categories = ctgr;
    })
  }

  addCourse() {
    this.newCourse.category = this.categories.find(
      (cat) => cat.id == this.newIdCat
    )!;
    this.courseService.addCourse(this.newCourse).subscribe((course) => {
      this.courseService
        .uploadImageFS(this.uploadedImage, this.uploadedImage.name, course.id)
        .subscribe((response: any) => {});

      this.router.navigate(['courses']);
    });
  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => {
      this.imagePath = reader.result;
    };
  }
}
