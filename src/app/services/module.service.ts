import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Module } from '../model/module.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders( {'Content-Type' : 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  apiURL : string = environment.STUDY_SMART_API_URL+"/module";

  module! : Module[];

  constructor(
    private http : HttpClient,
  ) { }

  listModules() : Observable<Module[]> {
    return this.http.get<Module[]>(this.apiURL+"/all")
  }

  addModule(module : Module) : Observable<Module> {
    return this.http.post<Module>(this.apiURL+"/add", module);
  }

  consultModule(id: number) : Observable<Module> {
    return this.http.get<Module>(this.apiURL+`/getbyid/${id}`);
  }

  consultModulesByCourseId(id : number) : Observable<Module[]> {
    return this.http.get<Module[]>(this.apiURL+`/getbycourse/${id}`)
  }

  updateModule(module : Module) : Observable<Module>{
    return this.http.put<Module>(this.apiURL+"/update", module);
  }

  deleteModule(id : number){
    return this.http.delete(this.apiURL+`/delete/${id}`);
  }
}
