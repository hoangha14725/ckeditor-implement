import { Component, OnInit } from '@angular/core';
import { ContextOffline } from './../../../common/models/context';
import { UUID } from 'angular2-uuid';
import { MyConfig } from 'src/app/common/models/MyConfig';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})
export class TestpageComponent implements OnInit {
  data: ContextOffline;

  constructor() {
    this.data.id = UUID.UUID().toString();
    this.data.title = 'TEST';
    this.data.config.push(new MyConfig() {
      id: UUID.UUID().toString(),
      something: new Object()
    });
  }
  ngOnInit() {
  }
}
