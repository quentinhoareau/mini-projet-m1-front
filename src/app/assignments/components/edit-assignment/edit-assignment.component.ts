import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignement } from '../../../models/assignement.model';
import { AssignementsService } from '../../../services/assignements.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignement | undefined;

  constructor(
    private assignmentsService: AssignementsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force l'id de type string en "number"
    const id = this.route.snapshot.params['id'];

    this.assignmentsService.getAssignement(id).subscribe((assignment) => {
      if (!assignment) return;
      this.assignment = assignment;
    });
  }
  saveAssignment(assignement:Assignement) {
    if (!this.assignment) return;


    this.assignmentsService
      .updateAssignement(assignement)
      .subscribe(() => {


        // navigation vers la home page
        this.router.navigate(['/home']);
      });
  }
}

