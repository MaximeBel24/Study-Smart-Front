import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Category } from '../../../model/category.model';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html'
})
export class ListCategoriesComponent implements OnInit{

  categories! : Category[];


  constructor(
    private categoryService : CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.listCategories().subscribe((ctgr) => {
      this.categories = ctgr;
    })
  }

  // updateCat(cat: Category) {
  //   this.updatedCat=cat
  //   this.add = false
  // } 
  
  // categoryUpdated(cat: Category){
  //   this.courseService.addCategory(cat).subscribe(() => this.loadCategories())
  // }

  deleteCategory(cat : Category) {
    let conf = confirm("Etes-vous sûr ?")
    if(conf) {
      this.categoryService.deleteCategory(cat.id).subscribe(() => {
        this.loadCategories()
      })
    }
  }
}
