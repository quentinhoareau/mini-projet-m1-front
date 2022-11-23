import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignementsService } from 'src/app/services/assignements.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private assignmentService: AssignementsService, private router : Router) { }

  ngOnInit(): void {
  }

  peuplerBDD(){
    this.assignmentService.peuplerBDAvecForkJoin()
    .subscribe(() => {
      console.log("LA BD A ETE PEUPLEE, TOUS LES ASSIGNMENTS AJOUTES, ON RE-AFFICHE LA LISTE");

      this.router.navigate(["/home"], {replaceUrl:true});
    })

  }

}
