import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmailComponent } from './testmail.component';

describe('TestmailComponent', () => {
  let component: TestmailComponent;
  let fixture: ComponentFixture<TestmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestmailComponent]
    });
    fixture = TestBed.createComponent(TestmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
