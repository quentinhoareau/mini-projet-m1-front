import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private assignmentsService: AssignementsService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newAssignment = new Assignement();
    newAssignment.id = Math.floor(Math.random()*1000);
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.nom  = this.nomDevoir;
    newAssignment.rendu = false;

  
    this.assignmentsService.addAssignement(newAssignment).subscribe((newAssignement: Assignement)=>{
      this.router.navigate(["home"]);
    });
  
    
  }


}
