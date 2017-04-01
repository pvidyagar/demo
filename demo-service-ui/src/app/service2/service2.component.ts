import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

  constructor() { 
    console.log('Service2Component constructor ');
  }

  ngOnInit() {
      console.log('Service2Component ngOnInit ');
  }

}
