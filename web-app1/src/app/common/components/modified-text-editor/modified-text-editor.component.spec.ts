import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedTextEditorComponent } from './modified-text-editor.component';

describe('ModifiedTextEditorComponent', () => {
  let component: ModifiedTextEditorComponent;
  let fixture: ComponentFixture<ModifiedTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiedTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiedTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
