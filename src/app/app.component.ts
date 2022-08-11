import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { ApiService } from './services/api.service.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-checkboxes-example';
  form: FormGroup;
 /* CountryData: Array<any> = [
    { name: 'IND', value: 'India' },
    { name: 'AUS', value: 'Australia' },
    { name: 'USA', value: 'America' },
    { name: 'RUS', value: 'Rusia' },
    { name: 'Eng', value: 'England' }
  ];
  */
  CountryData:any;
  
  constructor(private fb: FormBuilder, private apiService:ApiService) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
  }
  
   ngOnInit() {
      this.apiService.getPosts()
        .subscribe(response => {
          this.CountryData = response;
        });
  }
  
  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    console.log(this.form.value)
  }
  

}
