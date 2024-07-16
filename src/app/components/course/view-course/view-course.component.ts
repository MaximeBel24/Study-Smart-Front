import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../model/course.model';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../../../services/module.service';
import { Module } from '../../../model/module.model';
import { LessonService } from '../../../services/lesson.service';
import { Lesson } from '../../../model/lesson.model';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  modules: Module[] = [];
  lessons: { [moduleId: number]: Lesson[] } = {};

  currentCourse = new Course();

  constructor(
    private courseService: CourseService,
    private moduleService: ModuleService,
    private lessonService: LessonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseService.consultCourse(this.activatedRoute.snapshot.params['id'])
      .subscribe(crs => {
        this.currentCourse = crs;
        this.loadModules();
      });
  }

  loadModules(): void {
    this.moduleService.consultModulesByCourseId(this.currentCourse.id).subscribe((mdl) => {
      this.modules = mdl;
      this.modules.forEach(module => {
        this.loadLessons(module.id);
      });
    });
  }

  loadLessons(moduleId: number): void {
    this.lessonService.consultLessonsByModuleId(moduleId).subscribe((lessons) => {
      this.lessons[moduleId] = lessons;
    });
  }

  deleteModule(m: Module): void {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.moduleService.deleteModule(m.id).subscribe(() => {
        this.loadModules();
      });
    }
  }

  deleteLesson(moduleId: number, lessonId: number): void {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.lessonService.deleteLesson(lessonId).subscribe(() => {
        this.loadLessons(moduleId);
      });
    }
  }
}
