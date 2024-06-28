import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.css'
})
export class UpdateProduitComponent implements OnInit{

  currentCourse = new Course();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
      this.currentCourse = this.courseService.showCourse(this.activatedRoute.snapshot.params['id']);
      console.log(this.currentCourse);
  }

  updateCourse() {
    this.courseService.updateCourse(this.currentCourse);
    this.router.navigate(['cours'])
  }

}
