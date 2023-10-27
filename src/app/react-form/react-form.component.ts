import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css'],
})
export class ReactFormComponent {
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('plb', Validators.required),
      addEmail: new FormControl(null, [Validators.required, Validators.email]),
      skills: new FormArray([]),
    });
  }
  // V1
  // getFormsSkills() {
  //   return <FormArray>this.signUpForm.get('skills');
  // }
  get FormsSkills() {
    return <FormArray>this.signUpForm.get('skills');
  }

  addSkill() {
    let newCtrl = new FormControl(null, Validators.required);
    this.FormsSkills.push(newCtrl);
  }

  submitHandler() {
    console.log(this.signUpForm.value);
  }
}
