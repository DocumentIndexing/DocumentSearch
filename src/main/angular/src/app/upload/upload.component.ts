import {FormBuilder} from '@angular/forms';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UploadService} from '../upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  loading: boolean = false;
  formGroup = this.fb.group({
    file: [''],
    title: [''],
    subtitle: [''],

  });

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private upload: UploadService) {
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files.length > 0) {

      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formGroup.get('file').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result
        })
      };
    }
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    this.upload.send(formModel);
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.formGroup.get('file').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  ngOnInit() {
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('title', this.formGroup.get('title').value);
    input.append('subtitle', this.formGroup.get('subtitle').value);
    input.append('file', this.formGroup.get('file').value);
    return input;
  }

}
