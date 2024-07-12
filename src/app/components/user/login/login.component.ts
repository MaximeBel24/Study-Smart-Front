import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  user = new User();
  err:number = 0;
  message : string = "Login ou mot de passe erronés..."

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.err = 1;
        if(err.error.errorCause=='disabled')
          this.message="Utilisateur désactivé, Veuillez contacter votre administrateur";
      }
    })
  }
}