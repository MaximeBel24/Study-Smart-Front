import { Component, OnInit } from '@angular/core';
import { Module } from '../../../model/module.model';
import { ModuleService } from '../../../services/module.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../model/course.model';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrl: './add-module.component.css'
})
export class AddModuleComponent implements OnInit {

  newModule : Module = new Module();
  currentCourse = new Course();

  constructor(
    private moduleService : ModuleService,
    private courseService : CourseService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.courseService.consultCourse(this.activatedRoute.snapshot.params['id']).subscribe(crs => {
      this.currentCourse = crs;
    })
  }

  addModule() {
    this.newModule.course = this.currentCourse;
    this.moduleService.addModule(this.newModule).subscribe((mdl) => {
      this.router.navigate(['/consult-course', this.currentCourse.id])
    })
  }

}
