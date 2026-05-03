import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'ENCUADRADOS - E-commerce & CRM Platform',
      description: [
        'Developed a full-scale web application for sales with an integrated WhatsApp service for real-time notifications.',
        'Built a comprehensive data visualization dashboard to track business KPIs and manage customer relationships effectively.'
      ],
      techStack: ['React', 'Node.js', 'WhatsApp API', 'MongoDB', 'AWS'],
      image: '/assets/encuadrados.webp',
      aosImage: 'fade-right'
    },
    {
      title: 'Bookstore Management System - Microservices',
      description: [
        'Architected a microservices-based inventory management system with robust backend architecture.',
        'Implemented secure authentication using JWT and developed a real-time data monitoring dashboard for inventory tracking.'
      ],
      techStack: ['C#', '.NET', 'Razor Pages', 'JWT', 'SQL Server', 'Microservices'],
      image: '/assets/bookstore-system.webp',
      aosImage: 'fade-left'
    }
  ];
}
