import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../../model/lesson.model';
import { LessonService } from '../../../services/lesson.service';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../../../model/module.model';
import { Course } from '../../../model/course.model';
import { ModuleService } from '../../../services/module.service';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-view-lesson',
  templateUrl: './view-lesson.component.html',
  styleUrl: './view-lesson.component.css'
})
export class ViewLessonComponent implements OnInit{

  currentLesson = new Lesson();
  currentModule = new Module();
  currentCourse = new Course();

  currentLessonId!: number;

  constructor(
    private lessonService : LessonService,
    private moduleService : ModuleService,
    private courseService : CourseService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const courseId = +this.activatedRoute.snapshot.params['courseId'];
    // const moduleId = +this.activatedRoute.snapshot.params['moduleId'];
    const lessonId = +this.activatedRoute.snapshot.params['lessonId'];

    // this.lessonService.consultLessonByIdAndModuleIdAndCourseId(courseId, moduleId, lessonId).subscribe(
    //   lesson => {
    //     this.currentLesson = lesson;
    //     console.log('Lesson loaded:', this.currentLesson);
    //   },
    //   error => {
    //     console.error('Error loading lesson:', error);
    //   }
    // );

    this.lessonService.consultLesson(lessonId).subscribe(
      lesson => { this.currentLesson = lesson }
    )
  }

}
