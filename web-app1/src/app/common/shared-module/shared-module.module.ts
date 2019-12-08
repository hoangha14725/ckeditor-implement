import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifiedTextEditorComponent } from '../components/modified-text-editor/modified-text-editor.component';



@NgModule({
  declarations: [ModifiedTextEditorComponent],
  imports: [
    CommonModule
  ],
  exports: [ModifiedTextEditorComponent]
})
export class SharedModuleModule { }
