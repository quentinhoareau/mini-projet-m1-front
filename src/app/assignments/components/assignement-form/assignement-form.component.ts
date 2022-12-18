import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Assignement } from 'src/app/models/assignement.model';
import { Eleve } from 'src/app/models/eleve.model';
import { ElevesService } from 'src/app/services/eleves.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatieresService } from 'src/app/services/matieres.service';
import { Matiere } from 'src/app/models/matiere.model';

@Component({
  selector: 'app-assignement-form',
  templateUrl: './assignement-form.component.html',
  styleUrls: ['./assignement-form.component.scss']
})
export class AssignementFormComponent implements OnInit {

  @Input() assignment: Assignement;
  @Output() onSubmit = new EventEmitter<Assignement>();

  eleves: Eleve[] = [];
  matieres: Matiere[] = [];
  eleveControl = new FormControl<string | Eleve>('');
  filteredOptions: Observable<Eleve[]>;

  constructor(private eleveService: ElevesService, private matieresService: MatieresService) {

  }

  submit() {
    this.onSubmit.emit(this.assignment);
  }

  ngOnInit(): void {
    this.matieresService.getMatieres().subscribe((matieres) => {
      this.matieres = matieres;
      if(!this.assignment?.matiere?._id) {
        this.assignment.matiere = this.matieres[0];
      }
    });

    this.eleveService.getEleves().subscribe(eleves => {
      this.eleves = eleves;

      this.filteredOptions = this.eleveControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const nomPrenom = typeof value === 'string' ? value : value?.nom;

          return nomPrenom ? this._filter(nomPrenom as string) : this.eleves.slice();
        }),
      );

      if(!this.assignment?.eleve?._id) {
        
        this.eleveControl.setValue(this.eleves[0]);

        
      }
    })

    this.eleveControl.valueChanges.subscribe((eleve: any) => {
      this.assignment.eleve = eleve;

    })

    this.eleveControl.setValue(this.assignment.eleve);




  }

  displayFn(user: Eleve): string {
    return user && user.nom ? user.nom.toUpperCase() + " " + user.prenom : '';
  }

  private _filter(value: string): Eleve[] {
    const filterValue = value.toLowerCase();

    return this.eleves.filter((option: any) => {
      return (option.nom.toLowerCase() + " " + option.prenom.toLowerCase()).includes(filterValue)
    });
  }

}
