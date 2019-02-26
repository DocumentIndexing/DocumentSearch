import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formGroup = this.fb.group({
    file: [''],
    title: [''],
    subtitle: [''],

  });

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
       });

        // need to run CD since file load runs outside of zone
        //this.cd.markForCheck();
      };
    };
  }


  ngOnInit() {
  }

}
