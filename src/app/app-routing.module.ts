import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { SearchByCategoryComponent } from './search-by-category/search-by-category.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';

const routes: Routes = [
  {path: "cours", component : CoursesComponent},
  {path: "ajouter-cours", component: AddCourseComponent},
  {path: "modifier-cours/:id", component: UpdateProduitComponent},
  {path: "rechercherParCategorie", component: SearchByCategoryComponent},
  {path: "rechercherParNom", component: SearchByNameComponent},
  {path: "", redirectTo: "cours", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
