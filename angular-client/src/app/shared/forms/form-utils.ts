import { AbstractControl, FormGroup } from '@angular/forms';

export function markFormGroupTouched(formGroup: FormGroup): void {
  Object.values(formGroup.controls).forEach((control) => {
    control.markAsTouched();
    if ((control as FormGroup).controls) {
      markFormGroupTouched(control as FormGroup);
    }
  });
}

export function getErrorMessage(control: AbstractControl | null): string {
  if (!control || !control.errors || !control.touched) return '';

  if (control.errors['required']) return 'This field is required.';
  if (control.errors['email']) return 'Please enter a valid email address.';
  if (control.errors['minlength']) return `Must be at least ${control.errors['minlength'].requiredLength} characters.`;
  if (control.errors['maxlength']) return `Cannot exceed ${control.errors['maxlength'].requiredLength} characters.`;
  if (control.errors['pattern']) return 'Invalid format.';

  return 'Invalid value.';
}
