import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Bier } from 'src/app/shared/models/bier';
import { BierServiceService } from '../../shared/services/bier-service.service';
import { Group } from 'src/app/shared/models/group';

@Component({
  selector: 'app-bier-register',
  templateUrl: './bier-register.component.html',
  styleUrls: ['./bier-register.component.css']
})
export class BierRegisterComponent implements OnInit {

  urlImg = `${environment.ApiConfig.urlRootImg}`;
  path: string;
  bier: Bier = new Bier();
  group: Group[] = []
  
  rForm = this.formBuilder.group({
    'name': ['', [Validators.required]],
    'group': ['', [Validators.required]],
    'price': ['', [Validators.required]],
    'description': ['', [Validators.required]],
    'imgPath': [this.path],
  })

  constructor(private formBuilder: FormBuilder,
    private location: Location,
    private bierService: BierServiceService,
    private router: Router) { }

  ngOnInit() {
    this.bierService.getAllGroups().subscribe(res => this.group = res);
  }

  onSubmit() {
    this.rForm.get('imgPath').setValue(this.path);
    console.log(this.rForm.value);
    this.bier = this.rForm.value;
    this.bierService.addBier(this.bier).subscribe(
      res => {
        if (res !== null) this.router.navigate(['/private/Bier']);
      },
      err => {
        // throw error
      }
    );
  }

  uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    
    formData.append('file', fileToUpload, fileToUpload.name);

    this.bierService.uploadImage(formData, null).subscribe(
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
