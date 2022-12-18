import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Matiere } from 'src/app/models/matiere.model';
import { Assignement } from '../../../models/assignement.model';
import { AssignementsService } from '../../../services/assignements.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  nomDevoir:string;
  dateRendu:Date;

  newAssignment = new Assignement();

  constructor(private assignmentsService: AssignementsService, private router : Router) { 
    this.newAssignment.rendu = false;
    this.newAssignment.dateDeRendu = this.dateRendu;

  }

  ngOnInit(): void {
  }

  createAssignment(assignement : Assignement) {
    console.log(assignement);
    
    this.assignmentsService.addAssignement(assignement).subscribe((newAssignement: Assignement)=>{
      this.router.navigate(["home"]);
    });
  
    
  }


}
