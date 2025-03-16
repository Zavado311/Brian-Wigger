import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSubpagesComponent } from './footer-subpages.component';

describe('FooterSubpagesComponent', () => {
  let component: FooterSubpagesComponent;
  let fixture: ComponentFixture<FooterSubpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSubpagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSubpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
