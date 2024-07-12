import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/course/courses/courses.component';
import { SearchByNameComponent } from './components/search/search-by-name/search-by-name.component';
import { ForbiddenComponent } from './components/utils/forbidden/forbidden.component';
import { courseGuard } from './guard/course.guard';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { UpdateProduitComponent } from './components/course/update-course/update-produit.component';
import { SearchByCategoryComponent } from './components/search/search-by-category/search-by-category.component';
import { ListCategoriesComponent } from './components/category/list-categories/list-categories.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { VerifEmailComponent } from './components/user/verif-email/verif-email.component';

const routes: Routes = [
  { path: 'cours', component: CoursesComponent },
  {
    path: 'ajouter-cours',
    component: AddCourseComponent,
    canActivate: [courseGuard],
  },
  { path: 'modifier-cours/:id', component: UpdateProduitComponent },
  { path: 'rechercherParCategorie', component: SearchByCategoryComponent },
  { path: 'listeCategories', component: ListCategoriesComponent },
  { path: 'rechercherParNom', component: SearchByNameComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'interdit', component: ForbiddenComponent },
  { path: 'verifEmail', component: VerifEmailComponent },
  { path: '', redirectTo: 'cours', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
