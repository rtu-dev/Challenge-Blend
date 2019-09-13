import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { Validators, FormBuilder } from '@angular/forms';
import { BierServiceService } from '../../shared/services/bier-service.service';
import { Bier } from 'src/app/shared/models/bier';
import { BierParser } from '../../shared/parser/bier-parser';
import { environment } from 'src/environments/environment';
import { Group } from 'src/app/shared/models/group';

@Component({
  selector: 'app-edit-bier',
  templateUrl: './edit-bier.component.html',
  styleUrls: ['./edit-bier.component.css']
})
export class EditBierComponent implements OnInit {
  urlImg = `${environment.ApiConfig.urlRootImg}`;
  path: string;
  pathRemove: string;
  bier: Bier
  subscription: Subscription;
  id: number;
  group: Group[] = []

  rForm = this.formBuilder.group({
    'bierId': [''],
    'name': ['', [Validators.required]],
    'group': ['', [Validators.required]],
    'price': ['', [Validators.required]],
    'description': ['', [Validators.required]],
    'imgPath': ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private bierService: BierServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.bier = new Bier();
    this.bierService.getAllGroups().subscribe(res => this.group = res);
    this.subscription = this.route.params.subscribe(
      (parans: any) => {
        this.id = parans['id'];
        this.bierService.getById(this.id).subscribe(res => {

          this.bier = BierParser.bierParse(res),
          
          this.path = this.bier.Path;
          this.pathRemove = this.bier.Path;
          
          this.rForm.get('bierId').setValue(this.bier.BierId);
          this.rForm.get('name').setValue(this.bier.Name);
          this.rForm.get('group').setValue(this.bier.Group);
          this.rForm.get('price').setValue(this.bier.Price);
          this.rForm.get('description').setValue(this.bier.Description);
          this.rForm.get('imgPath').setValue(this.bier.Path);
        });
      }
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.rForm.get('imgPath').setValue(this.path);
    this.bier = this.rForm.value;
    console.log(this.bier);
    
    this.bierService.updateBier(this.bier).subscribe(
      res => {
        if(res !== null)  this.router.navigate(['/private/Bier']);
      },
      err => {
        // throw error
      });
  }

  uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.bierService.uploadImage(formData, this.pathRemove).subscribe(
      res => {
        this.path = fileToUpload.name
      }, err => {

      });
  }

  changeGroup(e) {
    this.rForm.controls['group'].setValue(e.target.value, {
      onlySelf: true
    })
  }

  backClicked() {
    this.location.back();
  }
}
