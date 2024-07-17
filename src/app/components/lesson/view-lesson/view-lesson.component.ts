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

  currentLessonId!: number;

  constructor(
    private lessonService : LessonService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.lessonService.consultLesson(this.activatedRoute.snapshot.params['id']).subscribe(lssn => {
      this.currentLesson = lssn
    })
  }

}
