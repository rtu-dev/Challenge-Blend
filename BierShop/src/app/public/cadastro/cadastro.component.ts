import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/shared/models/empresa';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  rForm: FormGroup
  empresa: Empresa = new Empresa;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.rForm = this.formBuilder.group({
      'nome': ['', [Validators.required]],
      'CNPJ': ['', [Validators.required]],
      'CEP': ['', [Validators.required]],
      'rua': ['', [Validators.required]],
      'bairro': ['', [Validators.required]],
      'numero': ['', [Validators.required]],
      'cidade': ['', [Validators.required]],
      'email': ['', [Validators.required]]
    });
  }

  cadastrar() {
    this.router.navigate(['/home']);

    this.empresa.Email = this.rForm.get('email').value;
    this.empresa.Nome = this.rForm.get('nome').value;
    this.empresa.CNPJ = this.rForm.get('CNPJ').value;
    this.empresa.CEP = this.rForm.get('CEP').value;
    this.empresa.Rua = this.rForm.get('rua').value;
    this.empresa.Bairro = this.rForm.get('bairro').value;
    this.empresa.Numero = this.rForm.get('numero').value;
    this.empresa.Cidade = this.rForm.get('cidade').value;

    debugger;

    var Resp;

    this.router.navigate(['/']);
    
    alert("um e-mail com suas credenciais será enviado para seu e-mail!")

    // ------implementar cadastro
    // this.authService.auth(this.usuario).subscribe(
    //   res => {
    //     this.logged = true;
    //     loginResp = res;        
    //   },
    //   err => {
    //     debugger
    //     this.error = true;
    //     this.router.navigate(['/private']);
    //   },
    //   () => {
    //     if (this.logged) {
    //       this.authService.setLocalStorage(loginResp);
    //       if (this.authService.isAuthenticated()) {
    //         this.router.navigate(['/private/User']);
    //       }
    //     }
    //   }
    // )

  }

}
