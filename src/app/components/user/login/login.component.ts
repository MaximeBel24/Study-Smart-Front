import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  user = new User();
  err:number = 0;
  message : string = "Login ou mot de passe erronés..."
  isOpen : boolean = false;

  constructor(
    private modalService: ModalService,
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.modalService.modalState$.subscribe(state => {
      this.isOpen = state;
    })
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

  closeModal() {
    this.modalService.closeModal();
  }
}
