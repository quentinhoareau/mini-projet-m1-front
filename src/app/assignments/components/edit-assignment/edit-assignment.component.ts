import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Assignment } from '../../../models/assignment.model';
import { AssignmentsService } from '../../../services/assignments.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignment | undefined;

  user:User;

  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router,
    private authService :AuthService
  ) { }

  ngOnInit(): void {
    this.getAssignment();
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
    });
  }

  getAssignment() {
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force l'id de type string en "number"
    const id = this.route.snapshot.params['id'];

    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      if (!assignment) return;
      this.assignment = assignment;
    });
  }
  saveAssignment(assignment:Assignment) {
    if (!this.assignment) return;


    this.assignmentsService
      .updateAssignment(assignment)
      .subscribe(() => {


        // navigation vers le assignment modifié
        this.router.navigate(['/assignment', assignment._id]);
      });
  }
}

