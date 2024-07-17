import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lesson } from '../model/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  apiURL : string = environment.STUDY_SMART_API_URL+"/lesson";

  lesson! : Lesson[];

  constructor(
    private http : HttpClient,
  ) { }

  listLessons() : Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.apiURL+"/all")
  }

  addLesson(lesson : Lesson) : Observable<Lesson> {
    return this.http.post<Lesson>(this.apiURL+"/add", lesson);
  }

  consultLesson(id: number) : Observable<Lesson> {
    return this.http.get<Lesson>(this.apiURL+`/getbyid/${id}`);
  }

  consultLessonByModuleId(id : number) : Observable<Lesson> {
    return this.http.get<Lesson>(this.apiURL+`/getbymoduleid/${id}`)
  }

  consultLessonsByModuleId(id : number) : Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.apiURL+`/getbymodule/${id}`)
  }

  updateLesson(lesson : Lesson) : Observable<Lesson>{
    return this.http.put<Lesson>(this.apiURL+"/update", lesson);
  }

  deleteLesson(id : number){
    return this.http.delete(this.apiURL+`/delete/${id}`);
  }
}
