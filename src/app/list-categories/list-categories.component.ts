import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent implements OnInit{

  categories! : Category[];

  add : boolean = true;

  updatedCat : Category = {"id" : 0, "name" : "", "description" : ""}

  constructor(private courseService : CourseService) {}

  ngOnInit(): void {
    this.courseService.listCategories().subscribe(cats => {
      this.categories = cats._embedded.categories
    })
  }

  loadCategories() {
    this.courseService.listCategories().subscribe(cats => {
      this.categories = cats._embedded.categories
    })
  }

  updateCat(cat: Category) {
    this.updatedCat=cat
    this.add = false
  } 
  
  categoryUpdated(cat: Category){
    this.courseService.addCategory(cat).subscribe(() => this.loadCategories())
  }

  deleteCategory(cat : Category) {
    let conf = confirm("Etes-vous sûr ?")
    if(conf) {
      this.courseService.deleteCategory(cat.id).subscribe(() => {
        this.loadCategories()
      })
    }
  }
}
