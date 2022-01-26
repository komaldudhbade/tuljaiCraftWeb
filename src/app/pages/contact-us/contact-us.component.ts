import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ContactDataService } from 'src/app/service/contact-data.service';
import { IContactDataVO } from 'src/app/vo/i-contact-data';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactData: IContactDataVO;
  public isMessageSend: boolean = false;
  public contactForm: FormGroup;
  constructor(private contactService: ContactDataService, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    this.contactData = {
      shopName:'',
      address : '',
      owner: '',
      phoneNumber: '',
      email: ''
    };
  }
  ngOnInit(): void {
    this.contactService.getContactData().subscribe(data => {
      this.contactData = data;
    });
  }

 public get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
 public sendMessage():void {
  if (this.contactForm.invalid) {
    return;
  }
  this.isMessageSend = true;
 } 

}
