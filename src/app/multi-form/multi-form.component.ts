import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.scss']
})
export class MultiFormComponent {


  constructor(private builder: FormBuilder) { }
  isLinear=true;


  ngOnInit(): void { }


  MultiForm = this.builder.group({
    basic: this.builder.group({
      firstname:this.builder.control('',Validators.required),
      lastname:this.builder.control('',Validators.required)

    }),
    contact: this.builder.group({
      email:this.builder.control('',Validators.required),
      phone:this.builder.control('',Validators.required),
      linkedin:this.builder.control('',Validators.required)

    }),
    address: this.builder.group({
      street:this.builder.control('',Validators.required),
      city:this.builder.control('',Validators.required),
      country:this.builder.control('',Validators.required)
    })
  });

  get Basicform(){
    return this.MultiForm.get("basic") as FormGroup;
  }
  get contactform(){
    return this.MultiForm.get("contact") as FormGroup;
  }
  get addressform(){
    return this.MultiForm.get("address") as FormGroup;
  }
  HandleSubmit(){
    if(this.MultiForm.valid){
      console.log(this.MultiForm.value);
    }
  }


}
