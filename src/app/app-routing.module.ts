import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  {path: "cours", component : CoursesComponent},
  {path: "ajouter-cours", component: AddCourseComponent},
  {path: "modifier-cours/:id", component: UpdateProduitComponent},
  {path: "", redirectTo: "cours", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
