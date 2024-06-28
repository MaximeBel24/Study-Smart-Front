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

  ngOnInit(): void {
    this.categories = this.courseService.listCategories();
    this.currentCourse = this.courseService.showCourse(this.activatedRoute.snapshot.params['id']);
    this.updatedCatId = this.currentCourse.category.id;
  }

  updateCourse() {
    this.currentCourse.category = this.courseService.consultCategory(this.updatedCatId)
    this.courseService.updateCourse(this.currentCourse);
    this.router.navigate(['cours'])
  }

}
