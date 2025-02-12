import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeInformationComponent } from './legal-notice-information.component';

describe('LegalNoticeInformationComponent', () => {
  let component: LegalNoticeInformationComponent;
  let fixture: ComponentFixture<LegalNoticeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticeInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalNoticeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
