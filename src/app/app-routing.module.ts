import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/course/courses/courses.component';
import { SearchByNameComponent } from './components/search/search-by-name/search-by-name.component';
import { ForbiddenComponent } from './components/utils/forbidden/forbidden.component';
import { courseGuard } from './guard/course.guard';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { UpdateProduitComponent } from './components/course/update-course/update-produit.component';
import { ListCategoriesComponent } from './components/category/list-categories/list-categories.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { VerifEmailComponent } from './components/user/verif-email/verif-email.component';
import { HomeComponent } from './components/home/home.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ViewCourseComponent } from './components/course/view-course/view-course.component';
import { AddModuleComponent } from './components/module/add-module/add-module.component';
import { AddLessonComponent } from './components/lesson/add-lesson/add-lesson.component';
import { ViewLessonComponent } from './components/lesson/view-lesson/view-lesson.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  {
    path: 'add-course',
    component: AddCourseComponent,
    // canActivate: [courseGuard],
  },
  { path: 'update-course/:id', component: UpdateProduitComponent },
  { path: 'list-categories', component: ListCategoriesComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'view-course/:id', component: ViewCourseComponent },
  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'add-module/:id', component: AddModuleComponent},
  { path: 'add-lesson/:courseId/:moduleId', component: AddLessonComponent },
  { path: 'view-lesson/:courseId/:moduleId/:lessonId', component: ViewLessonComponent},
  { path: 'rechercherParNom', component: SearchByNameComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'interdit', component: ForbiddenComponent },
  { path: 'verifEmail', component: VerifEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
