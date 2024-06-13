import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss']
})
export class VolunteerComponent implements OnInit{
  samvedanaForm: FormGroup;
  bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  interests = ['Jobs: Training and Placements', 'Arts', 'Sports', 'Education', 'Social Responsibility'];
  statuses = ['Working', 'Student', 'Job Searching', 'Preparation for exams like MPSC/UPSC/Banking/Police/Military'];

  constructor(private fb: FormBuilder) {
    this.samvedanaForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      nativePlace: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      interests: this.fb.array([], Validators.required),
      birthDate: ['', Validators.required],
      qualification: ['', Validators.required],
      currentStatus: ['', Validators.required]
    });
    this.addCheckboxes();
  }

  ngOnInit(): void { }

  private addCheckboxes() {
    this.interests.forEach(() => this.interestsFormArray.push(this.fb.control(false)));
  }

  get interestsFormArray() {
    return this.samvedanaForm.controls['interests'] as FormArray;
  }

  onSubmit() {
    if (this.samvedanaForm.valid) {
      const selectedInterests = this.samvedanaForm.value.interests
        .map((checked: boolean, index: number) => checked ? this.interests[index] : null)
        .filter((value: string | null) => value !== null);
      
      const formData = {
        ...this.samvedanaForm.value,
        interests: selectedInterests
      };

      console.log(formData);
    } else {
      this.samvedanaForm.markAllAsTouched();
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.samvedanaForm.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

}

