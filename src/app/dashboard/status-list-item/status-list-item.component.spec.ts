import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListItemComponent } from './status-list-item.component';

describe('StatusListItemComponent', () => {
  let component: StatusListItemComponent;
  let fixture: ComponentFixture<StatusListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
