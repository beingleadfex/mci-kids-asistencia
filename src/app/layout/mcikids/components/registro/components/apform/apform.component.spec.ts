import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApformComponent } from './apform.component';

describe('ApformComponent', () => {
  let component: ApformComponent;
  let fixture: ComponentFixture<ApformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
