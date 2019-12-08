import { Component, OnInit } from '@angular/core';
import { ContextOffline } from 'src/app/common/models/Context';
import { UUID } from 'angular2-uuid';
import { MyConfig } from 'src/app/common/models/MyConfig';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})
export class TestpageComponent implements OnInit {
  data: ContextOffline = new ContextOffline();

  constructor() {
    this.data.id = UUID.UUID().toString();
    this.data.title = 'TEST';
    const newConfig = new MyConfig();
    this.data.config = [];
    newConfig.id = UUID.UUID().toString();
    newConfig.something = new Object();
    this.data.config.push(newConfig);
  }

  ngOnInit() {
  }
}
