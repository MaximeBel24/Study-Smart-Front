import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category.model';
import { CategoryService } from '../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit{

  newCategory : Category = new Category();

  constructor(
    private categoryService : CategoryService,
    private router : Router
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addCategory() {
    this.categoryService.addCategory(this.newCategory).subscribe((ctgr) => {
      this.router.navigate(['list-categories']);
    })
  }

}
