import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignement } from 'src/app/models/assignement.model';
import { AssignementsService } from 'src/app/services/assignements.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  assignementTransmis: Assignement | null;
  constructor(private assignementsService: AssignementsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getAssignement();
  }
  getAssignement() {
    const id = + this.route.snapshot.params["id"];

    this.assignementsService.getAssignement(id)?.subscribe(assignement => {

      this.assignementTransmis = assignement;

    })
  }

  onDeleteAssignement(assignement: Assignement) {

    if (this.assignementTransmis) {
      this.assignementsService.deleteAssignement(this.assignementTransmis).subscribe(() => {
        this.assignementTransmis = null;
        this.router.navigate(["home"]);
      })


    }

  }

  onAssignementRendu() {

    if (this.assignementTransmis) {
      this.assignementTransmis.rendu = true;
      this.assignementsService.updateAssignement(this.assignementTransmis).subscribe((a) => {
        this.router.navigate(["home"]);
      })


    }

  }
  onCkickEdit() {
    this.router.navigate(['/assignement', this.assignementTransmis?.id, 'edit'],
      { queryParams: { nom: this.assignementTransmis?.nom }, fragment: 'edition' })
  }

}
