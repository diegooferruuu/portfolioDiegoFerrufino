import { Component } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Software Developer',
      company: 'Datax S.R.L.',
      companyUrl: 'https://datax.com.bo',
      startDate: 'January 2026',
      endDate: 'Present',
      achievements: [
        'Designed and developed an AI Data Ingestion Agent to automate complex workflows and improve efficiency',
        'Utilized advanced analysis tools to audit and process over 200 technical reports, improving data accuracy',
        'Collaborated on backend architecture to ensure system scalability and efficiency'
      ]
    },
    {
      position: 'AI Developer',
      company: 'Independent Projects',
      companyUrl: '',
      startDate: '2025',
      endDate: 'Present',
      achievements: [
        'Engineered automated sales agents and decision-support systems using LLMs',
        'Developed multi-tenant WhatsApp agents for customer engagement, focusing on high availability and seamless integration'
      ]
    },
    {
      position: 'Tech & Network Lead',
      company: 'Ferreteria America',
      companyUrl: '',
      startDate: '2025',
      endDate: '2026',
      achievements: [
        'Led the end-to-end design and deployment of the corporate web platform',
        'Managed network infrastructure and routing for multiple branch locations, ensuring 99.9% uptime'
      ]
    }
  ];
}
