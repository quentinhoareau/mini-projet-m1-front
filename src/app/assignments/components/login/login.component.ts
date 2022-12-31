import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  message: string;

  constructor(private authService: AuthService, private storageService: StorageService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this._snackBar.open("Vous êtes connecté","Ok", {
        duration:  3 * 1000,
      });

    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
       
        this.storageService.saveToken(data.accessToken);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        window.location.reload();


      },
      error: err => {
        this.isLoginFailed = true;
        if (err.status === 404 || err.status === 401) {
          this.message = "Le nom d'utilisateur ou le mot de passe est incorrect.";
        } else {
          this.message = "Une erreur est survenue.";
        }
      }
    });
  }


}
