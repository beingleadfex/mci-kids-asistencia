import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidformComponent } from './kidform.component';

describe('KidformComponent', () => {
  let component: KidformComponent;
  let fixture: ComponentFixture<KidformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
