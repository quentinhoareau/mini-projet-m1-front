import { Component, OnInit } from '@angular/core';
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

  nomDevoir:string;
  dateRendu:Date;
  user:User;


  newAssignment = new Assignment();

  constructor(private assignmentsService: AssignmentsService, private router : Router, private authService: AuthService) { 
    this.newAssignment.rendu = false;
    this.newAssignment.dateDeRendu = this.dateRendu;
    
  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe( (user: User) => {
      this.user = user;
    });
    
  }

  createAssignment(assignment : Assignment) {
    this.assignmentsService.addAssignment(assignment).subscribe((newAssignment: Assignment)=>{
      this.router.navigate(["home"]);
    });
  
    
  }


}
