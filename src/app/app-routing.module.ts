import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { SearchByCategoryComponent } from './search-by-category/search-by-category.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { courseGuard } from './course.guard';

const routes: Routes = [
  {path: "cours", component : CoursesComponent},
  {path: "ajouter-cours", component: AddCourseComponent, canActivate:[courseGuard]},
  {path: "modifier-cours/:id", component: UpdateProduitComponent},
  {path: "rechercherParCategorie", component: SearchByCategoryComponent},
  {path: "listeCategories", component: ListCategoriesComponent},
  {path: "rechercherParNom", component: SearchByNameComponent},
  {path: "connexion", component: LoginComponent},
  {path: "interdit", component: ForbiddenComponent},
  {path: "", redirectTo: "cours", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
