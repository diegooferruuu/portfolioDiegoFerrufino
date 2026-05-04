import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent as ContactFormComponent } from '../../components/contact/contact.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contact – Diego Ferrufino',
      description: 'Get in touch with Diego Ferrufino for collaboration opportunities, project inquiries, or professional discussions. Contact a skilled Full-Stack Developer specializing in Angular and .NET.',
      url: 'https://portfolio-diego-ferrufino.vercel.app/contact',
      keywords: 'Contact Diego Ferrufino, Hire Full-Stack Developer, Angular Developer Contact, .NET Developer Hire, Web Development Services, Project Collaboration'
    });
  }
}
