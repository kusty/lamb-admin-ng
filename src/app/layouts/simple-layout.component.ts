import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './simple-layout.component.html',
})
export class SimpleLayoutComponent implements OnInit {
  public options = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: true,
    showProgressBar: false,
    icons:{
      success:'',
      error: '',
      info:'',
      warn:'',
      alert:''
    }
}
  constructor() { }

  ngOnInit(): void { }
}
