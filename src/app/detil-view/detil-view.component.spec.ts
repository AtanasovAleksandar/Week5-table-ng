import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilViewComponent } from './detil-view.component';

describe('DetilViewComponent', () => {
  let component: DetilViewComponent;
  let fixture: ComponentFixture<DetilViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
