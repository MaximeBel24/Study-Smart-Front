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
import { SearchByNameComponent } from './components/search/search-by-name/search-by-name.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { VerifEmailComponent } from './components/user/verif-email/verif-email.component';
import { ForbiddenComponent } from './components/utils/forbidden/forbidden.component';
import { HomeComponent } from './components/home/home.component';
import { ViewCourseComponent } from './components/course/view-course/view-course.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AddModuleComponent } from './components/module/add-module/add-module.component';
import { UpdateModuleComponent } from './components/module/update-module/update-module.component';
import { AddLessonComponent } from './components/lesson/add-lesson/add-lesson.component';
import { ViewLessonComponent } from './components/lesson/view-lesson/view-lesson.component';
import { UpdateLessonComponent } from './components/lesson/update-lesson/update-lesson.component';
import { DurationPipe } from './pipe/duration.pipe';

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
    SearchByNameComponent,

    // User
    LoginComponent,
    RegisterComponent,
    VerifEmailComponent,

    // Utils
    ForbiddenComponent,

    // Pipe
    SearchFilterPipe,
    HomeComponent,
    ViewCourseComponent,
    AddCategoryComponent,
    AddModuleComponent,
    UpdateModuleComponent,
    AddLessonComponent,
    ViewLessonComponent,
    UpdateLessonComponent,
    DurationPipe,
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
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
