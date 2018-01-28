import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages=['English','Spanish','Hindi','Urdu'];
  model=new Employee('uzair','laraib',true,"w2",'default');
  hasPrimaryLanguageError=false;

  ValidatePrimaryLanguage(value){
     console.log('lang: ' + this.model.primaryLanguage);
    if(value === 'default')
    this.hasPrimaryLanguageError=true;
    else
    this.hasPrimaryLanguageError=false;
  }

  

}
