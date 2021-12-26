import { Component, OnInit } from '@angular/core';
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
  constructor(private contactService: ContactDataService) {
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

}
