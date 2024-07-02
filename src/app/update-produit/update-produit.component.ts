import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})
export class UpdateProduitComponent implements OnInit{

  currentCourse = new Course();

  categories! : Category[];
  updatedCatId! : number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private courseService: CourseService
  ) { }

  ngOnInit(){
    this.courseService.listCategories().subscribe(cats => {
      this.categories = cats;
      console.log(cats);
    })
    this.courseService.consultCourse(this.activatedRoute.snapshot.params['id']).subscribe( crs => {
      this.currentCourse = crs; 
      this.updatedCatId = this.currentCourse.category.id;
    })
  }

  updateCourse() {
    this.currentCourse.category = this.categories.find(cat => cat.id == this.updatedCatId)!;
    this.courseService.updateCourse(this.currentCourse).subscribe(course => {
      this.router.navigate(['produits']);
    })
  }

}
