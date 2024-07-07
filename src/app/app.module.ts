import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchByCategoryComponent } from './search-by-category/search-by-category.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptor } from './services/token.interceptor';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AddCourseComponent,
    UpdateProduitComponent,
    SearchByCategoryComponent,
    SearchByNameComponent,
    SearchFilterPipe,
    ListCategoriesComponent,
    UpdateCategoryComponent,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent,
    VerifEmailComponent
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
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
