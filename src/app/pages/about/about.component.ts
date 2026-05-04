import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutMeComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'About Me – Diego Ferrufino',
      description: 'Learn about Diego Ferrufino, a passionate Full-Stack Developer with expertise in Angular, .NET, and modern web technologies. Discover my journey, skills, and professional background.',
      url: 'https://portfolio-diego-ferrufino.vercel.app/about',
      keywords: 'About Diego Ferrufino, Full-Stack Developer Background, Angular Developer Profile, .NET Developer Experience, Web Developer Skills'
    });
  }
}
