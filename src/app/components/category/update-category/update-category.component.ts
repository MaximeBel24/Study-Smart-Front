import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../../model/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';



@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit{

  currentCategory = new Category();

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private categoryService : CategoryService
  ) {}

  ngOnInit(): void {
   this.categoryService.consultCategory(this.activatedRoute.snapshot.params['id'])
   .subscribe(ctgr => {
    this.currentCategory = ctgr;
   })
  }

  updateCategory() {
    this.categoryService.updateCategory(this.currentCategory).subscribe((ctgr) => {
      this.router.navigate(['list-categories']);
    })
  }

}
