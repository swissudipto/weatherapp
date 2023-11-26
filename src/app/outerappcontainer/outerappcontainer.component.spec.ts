import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterappcontainerComponent } from './outerappcontainer.component';

describe('OuterappcontainerComponent', () => {
  let component: OuterappcontainerComponent;
  let fixture: ComponentFixture<OuterappcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterappcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterappcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
