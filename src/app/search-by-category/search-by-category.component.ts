import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { Category } from '../model/category.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrl: './search-by-category.component.css'
})
export class SearchByCategoryComponent implements OnInit{

  courses! : Course[];
  IdCategory! : number;
  categories! : Category[];

  constructor(
    private courseService : CourseService
  ){}

  ngOnInit(): void {
    this.courseService.listCategories().subscribe(cats => {
      this.categories = cats._embedded.categories;
      // console.log(cats);
    })
  }

  onChange() {
    this.courseService.searchByCategorie(this.IdCategory).subscribe(crs =>{
      this.courses = crs
    })
  }

}
