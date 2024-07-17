import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'Study-Smart';

  constructor(
    private modalService: ModalService,
    public authService : AuthService, 
    private router : Router
  ) {}

  ngOnInit(): void {
    this.authService.loadToken();
      if(this.authService.getToken()==null ||
          this.authService.isTokenExpired())
            this.router.navigate(['/home']);
  }

  onLogout() {
    this.authService.logout();
  }

  openLoginModal() {
    this.modalService.openModal();
  }
}
