import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Assignment } from '../../../models/assignment.model';
import { AssignmentsService } from '../../../services/assignments.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  user: User;


  newAssignment = new Assignment();

  constructor(private assignmentsService: AssignmentsService,  private _snackBar: MatSnackBar,  private router: Router, private authService: AuthService) {
    this.newAssignment.rendu = false;
    this.newAssignment.dateDeRendu = new Date();
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user: User) => {
      this.user = user;
    });
  }

  createAssignment(assignment: Assignment) {
    this.assignmentsService.addAssignment(assignment).subscribe((newAssignment: Assignment) => {
      this._snackBar.open("L'assignment à bien été créer.","Ok", {
        duration:  3 * 1000,
      });

      this.router.navigate(["home"]);
      
    });


  }


}
