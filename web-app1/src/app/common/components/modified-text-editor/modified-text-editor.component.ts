import { Component, OnInit, Input } from '@angular/core';
import { ContextOffline } from '../../models/Context';

@Component({
  selector: 'app-modified-text-editor',
  templateUrl: './modified-text-editor.component.html',
  styleUrls: ['./modified-text-editor.component.scss']
})
export class ModifiedTextEditorComponent implements OnInit {
  @Input() value: ContextOffline;
  constructor() { }

  ngOnInit() {

  }

}
