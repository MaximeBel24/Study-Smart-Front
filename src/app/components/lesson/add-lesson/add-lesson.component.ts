import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../../model/lesson.model';
import { Module } from '../../../model/module.model';
import { ModuleService } from '../../../services/module.service';
import { LessonService } from '../../../services/lesson.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../../model/course.model';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.css'
})
export class AddLessonComponent implements OnInit{

  newLesson: any = {
    title: '',
    duration: '',
    description: '',
    content: ''
  };

  currentModule = new Module();
  currentCourse = new Course();

  currentModuleId!: number;
  currentCourseId!: number;

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
    plugins: 'lists link image table wordount',
    height: 900,
    content_langs: [
      { title: 'French', code: 'fr' }
    ]
  }

  constructor(
    private moduleService : ModuleService,
    private lessonService : LessonService,
    private courseService : CourseService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.currentCourseId = this.activatedRoute.snapshot.params['courseId'];
    this.currentModuleId = this.activatedRoute.snapshot.params['moduleId'];

    if (this.currentCourseId) {
      this.courseService.consultCourse(this.currentCourseId).subscribe(crs => {
        this.currentCourse = crs;
      });
    }

    if (this.currentModuleId) {
      this.moduleService.consultModule(this.currentModuleId).subscribe(mdl => {
        this.currentModule = mdl;
      });
    }
  }

  addLesson() {

    this.newLesson.module = this.currentModule;
    this.lessonService.addLesson(this.newLesson).subscribe(() =>{
      this.moduleService.updateModuleDuration(this.currentModuleId).subscribe(() => {
        this.courseService.updateCourseDuration(this.currentCourseId).subscribe(() =>{
          this.router.navigate(['/consult-course', this.currentCourse.id])
        })
      })
    })
  }

}
