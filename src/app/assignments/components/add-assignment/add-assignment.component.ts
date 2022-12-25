import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
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
  user:User;


  newAssignment = new Assignement();

  constructor(private assignmentsService: AssignementsService, private router : Router, private authService: AuthService) { 
    this.newAssignment.rendu = false;
    this.newAssignment.dateDeRendu = this.dateRendu;
    
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe( (user: User) => {
      this.user = user;
    });
    
  }

  createAssignment(assignement : Assignement) {
    console.log(assignement);
    
    this.assignmentsService.addAssignement(assignement).subscribe((newAssignement: Assignement)=>{
      this.router.navigate(["home"]);
    });
  
    
  }


}
