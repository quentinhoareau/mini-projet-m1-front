import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignement } from 'src/app/models/assignement.model';
import { AssignementsService } from 'src/app/services/assignements.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss']
})
export class AssignmentDetailComponent implements OnInit {

  assignementTransmis: Assignement | null | undefined = undefined;
  constructor(private assignementsService: AssignementsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getAssignement();
  }
  getAssignement() {
    const id = this.route.snapshot.params["id"];

    this.assignementsService.getAssignement(id)?.subscribe(assignement => {

      this.assignementTransmis = assignement;

    },
      (error) => {
        this.assignementTransmis = null;
      }
    )
  }

  onDeleteAssignement(assignement: Assignement) {
    
    if (this.assignementTransmis) {
    
      this.assignementsService.deleteAssignement(this.assignementTransmis).subscribe((a) => {
    
      })
       this.router.navigate(["home"]);
    }

  }

  onAssignementRendu() {

    if (this.assignementTransmis) {
      this.assignementTransmis.dateDeRendu = new Date();
      this.assignementTransmis.rendu = true;
      this.assignementsService.updateAssignement(this.assignementTransmis).subscribe((a) => {
        this.router.navigate(["home"]);
      })


    }

  }
  onCkickEdit() {
    this.router.navigate(['/assignement', this.assignementTransmis?._id, 'edit'],
      { queryParams: { nom: this.assignementTransmis?.nom }, fragment: 'edition' })
  }

}
