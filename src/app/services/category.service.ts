import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Category } from '../model/category.model';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURL: string = environment.STUDY_SMART_API_URL+"/category";

  category! : Category[];

  constructor(
    private http : HttpClient,
    private authService : AuthService
  ) { }

  listCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL+"/all");
  }

  addCategory(category : Category) : Observable<Category> {
    return this.http.post<Category>(this.apiURL+"/add", category);
  }

  consultCategory(id: number) : Observable<Category> {
    return this.http.get<Category>(this.apiURL+`/getbyid/${id}`);
  }

  updateCategory(category : Category) : Observable<Category>{
    return this.http.put<Category>(this.apiURL+"/update", category);
  }

  deleteCategory(id : number){
    return this.http.delete(this.apiURL+`/delete/${id}`);
  }
}
