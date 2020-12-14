import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoFormComponent } from './novo-form.component';

describe('NovoFormComponent', () => {
  let component: NovoFormComponent;
  let fixture: ComponentFixture<NovoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
