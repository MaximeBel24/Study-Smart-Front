import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../model/course.model';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../../../services/module.service';
import { Module } from '../../../model/module.model';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.css'
})
export class ViewCourseComponent implements OnInit{

  modules : Module[] = [];

  currentCourse = new Course();

  constructor(
    private courseService : CourseService,
    private moduleService : ModuleService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseService.consultCourse(this.activatedRoute.snapshot.params['id'])
    .subscribe(crs => {
      this.currentCourse = crs;
      this.loadModules();
    })
  }
  
  loadModules(): void {
    this.moduleService.consultModulesByCourseId(this.currentCourse.id).subscribe((mdl) => {
      console.log(mdl);
      this.modules = mdl;
    })
  }

  deleteModule(m: Module) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) 
      this.moduleService.deleteModule(m.id).subscribe(() => {
        this.loadModules();  
      })
  }
}
