import { Component, OnInit } from '@angular/core';
import {FetchService} from '../fetch/fetch.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  public quotes=[];
  public enable = false;
  private getQuotes() : void{
      console.log('Inside Get Quotes');
      /*this.fetchService.postData('abc','/demo-service/get-qoutes')
      .subscribe(res => {
           console.log('In the response of /demo-service/get-qoutes');
          console.log(res);
          },
          err => {
            console.log(err);
          });*/
      let quotes = [{'title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                    'from':'Someone famous ',
                    'name':'Pramod'},
          {'title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
                    'from':'Someone famous ',
                    'name':'Pramod'}];
       // return quote;
     this.quotes = quotes;
     this.enable = true;
      
  }

  constructor(private fetchService:FetchService) { 
    console.log('Service1Component constructor');
  }

  ngOnInit() {
      console.log('Service1Component ngOnInit ');
  }
    
 
}
