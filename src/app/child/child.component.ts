import { AfterViewInit, Component, DoBootstrap, ElementRef, OnInit, ViewChild } from '@angular/core';
import { endWith } from 'rxjs';
import { NdComponent } from '../nd/nd.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,AfterViewInit {
@ViewChild('root_header',{static:true}) 
title=ElementRef
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void{
  }
showHeaderText(e:HTMLElement){
  e.style.color='brown '
  
}
dont(e:HTMLElement){
e.style.width='10px'
}
}
