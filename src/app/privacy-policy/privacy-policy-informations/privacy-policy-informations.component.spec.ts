import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyInformationsComponent } from './privacy-policy-informations.component';

describe('PrivacyPolicyInformationsComponent', () => {
  let component: PrivacyPolicyInformationsComponent;
  let fixture: ComponentFixture<PrivacyPolicyInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicyInformationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyPolicyInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
