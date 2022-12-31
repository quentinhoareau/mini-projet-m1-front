import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment.model';
import { User } from 'src/app/models/user.model';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss']
})
export class AssignmentDetailComponent implements OnInit {

  assignmentTransmis: Assignment | null | undefined = undefined;
  constructor(private assignmentsService: AssignmentsService, private _snackBar: MatSnackBar,  private route: ActivatedRoute, private router: Router, private authService : AuthService) { }
  user:User;

  ngOnInit(): void {

    this.getAssignment();

    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
    })
  }
  getAssignment() {
    const id = this.route.snapshot.params["id"];

    this.assignmentsService.getAssignment(id)?.subscribe(assignment => {

      this.assignmentTransmis = assignment;

    },
      (error) => {
        this.assignmentTransmis = null;
      }
    )
  }

  onDeleteAssignment(assignment: Assignment) {
    
    if (this.assignmentTransmis) {
    
      this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe((a) => {
        this._snackBar.open("L'assignment à bien été supprimé.","Ok", {
          duration:  3 * 1000,
        });
        this.router.navigate(["home"]);
      })
    }

    
  }

  onAssignmentRendu() {

    if (this.assignmentTransmis) {
      this.assignmentTransmis.dateDeRendu = new Date();
      this.assignmentTransmis.rendu = true;
      this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe((a) => {
        this._snackBar.open("L'assignment à bien été rendu","Ok", {
          duration:  3 * 1000,
        });
        this.router.navigate(["home"]);
      })


    }

  }
  onCkickEdit() {
    this.router.navigate(['/assignment', this.assignmentTransmis?._id, 'edit'],
      { queryParams: { nom: this.assignmentTransmis?.nom }, fragment: 'edition' })
  }

}
