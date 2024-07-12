import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { TokenInterceptor } from './services/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CoursesComponent } from './components/course/courses/courses.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { UpdateProduitComponent } from './components/course/update-course/update-produit.component';
import { ListCategoriesComponent } from './components/category/list-categories/list-categories.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { SearchByCategoryComponent } from './components/search/search-by-category/search-by-category.component';
import { SearchByNameComponent } from './components/search/search-by-name/search-by-name.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { VerifEmailComponent } from './components/user/verif-email/verif-email.component';
import { ForbiddenComponent } from './components/utils/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,

    // Category
    ListCategoriesComponent,
    UpdateCategoryComponent,

    // Courses
    CoursesComponent,
    AddCourseComponent,
    UpdateProduitComponent,

    //Search
    SearchByCategoryComponent,
    SearchByNameComponent,

    // User
    LoginComponent,
    RegisterComponent,
    VerifEmailComponent,

    // Utils
    ForbiddenComponent,

    // Pipe
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // Ng2SearchPipeModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
