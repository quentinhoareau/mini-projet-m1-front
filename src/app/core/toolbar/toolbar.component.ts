import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  user: User;

  constructor(private assignmentService: AssignmentsService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
    })
  }


  logout() {
    this.authService.logout();
    window.location.reload();
  }

}
