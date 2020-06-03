import { Component, OnInit } from '@angular/core';
import { BierServiceService } from '../../shared/services/bier-service.service';
import { Bier } from 'src/app/shared/models/bier';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-biers',
  templateUrl: './list-biers.component.html',
  styleUrls: ['./list-biers.component.css']
})
export class ListBiersComponent implements OnInit {
  urlimg = `${environment.ApiConfig.urlRootImg}`;

  b1: Bier = new Bier;
  b2: Bier = new Bier;
  b3: Bier = new Bier;
  

  listaBier: Bier[] = [this.b1, this.b2, this.b3];

  listaKeyUp: Bier[] = [];
  part: string;

  constructor(private bierService: BierServiceService) { }

  ngOnInit() {
    this.bierService.getAllBier().subscribe(res => this.listaBier = res);
  }

  remove(id: number) {
    var valueConfirm = confirm('Deseja realmente remover?');
    if (valueConfirm) {
      this.bierService.removerBier(id).subscribe(res => location.reload());      
    }
  }

  keyUp(){
    if (this.part !== "") {
      this.bierService.getByPart(this.part).subscribe(res => this.listaBier = res);
    }else{
      this.bierService.getAllBier().subscribe(res => this.listaBier = res);
    }
  }

}
