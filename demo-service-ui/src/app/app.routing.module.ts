import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {AboutComponent} from './about/about.component';
import {Service1Component} from './service1/service1.component';
import {Service2Component} from './service2/service2.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'service1',
        component: Service1Component
      },
      {
        path: 'service2',
        component: Service2Component
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
