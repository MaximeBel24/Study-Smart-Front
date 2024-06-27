import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  {path: "cours", component : CoursesComponent},
  {path: "ajouter-cours", component: AddCourseComponent},
  {path: "", redirectTo: "cours", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
