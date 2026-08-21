import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create button component', () => {
    expect(component).toBeTruthy();
  });

  it('should default to primary variant and md size', () => {
    expect(component.variant()).toBe('primary');
    expect(component.size()).toBe('md');
    expect(component.buttonClasses).toContain('bg-indigo-600');
  });
});
