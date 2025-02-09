import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHamburgerComponent } from './menu-hamburger.component';

describe('MenuHamburgerComponent', () => {
  let component: MenuHamburgerComponent;
  let fixture: ComponentFixture<MenuHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuHamburgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
