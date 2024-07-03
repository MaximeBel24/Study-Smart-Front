import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../model/category.model';



@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit{

  @Input()
  category! : Category;

  @Input()
  add! : boolean

  @Output()
  categoryUpdated = new EventEmitter<Category>();

  ngOnInit(): void {
    console.log("ngOnInit de composant UpdateCategory", this.category)
  }

  saveCategory() {
    this.categoryUpdated.emit(this.category);
  }  
}
