import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nd',
  templateUrl: './nd.component.html',
  styleUrls: ['./nd.component.scss']
})
export class NdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showInfo(){
    alert('Hello')
  }

}
