import { Component, OnInit,Input } from '@angular/core';
import {Observable} from 'rxjs';
import {select} from 'ng2-redux';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  @Input()
  title: string;
  private  appName: string; 
      
    
    
    
  constructor() { }

  ngOnInit() {
  }

}
