import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
// import { ContactComponent } from "./pages/contact/contact.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { UrlNormalizationGuard } from "./guards/url-normalization.guard";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Diego Ferrufino | Full-Stack Developer |Full Stack Developer | Portfolio',
      description: 'Experienced Full-Stack Developer specializing in Angular, .NET, TypeScript, and modern web technologies. View my portfolio showcasing scalable web applications, API development, and innovative solutions.',
      keywords: 'Diego Ferrufino, Full-Stack Developer, Angular Developer, .NET Developer, TypeScript Expert, Web Development, JavaScript, Node.js, Software Engineer, Frontend Developer, Backend Developer, Portfolio'}
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'About Me',
      description: 'Learn about Diego Ferrufino, a passionate Full-Stack Developer with expertise in Angular, .NET, and modern web technologies.',
      keywords: 'About Diego Ferrufino, Full-Stack Developer Background, Angular Developer Profile, .NET Developer Experience'
    }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Experience',
      description: 'Explore Diego Ferrufino\'s professional experience as a Full-Stack Developer. View detailed work history, technical skills, and career achievements.',
      keywords: 'Diego Ferrufino Experience, Full-Stack Developer Career, Angular Developer Jobs, .NET Developer Experience, Web Development Skills'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Projects',
      description: 'Explore Diego Ferrufino\'s portfolio of innovative web applications and software projects. View detailed case studies of Angular, .NET, and full-stack development work.',
      keywords: 'Diego Ferrufino Projects, Full-Stack Developer Portfolio, Angular Projects, .NET Applications, Web Development Portfolio'
    }
  },
  // {
  //   path: 'contact',
  //   component: ContactComponent,
  //   canActivate: [UrlNormalizationGuard],
  //   data: {
  //     title: 'Contact',
  //     description: 'Get in touch with Diego Ferrufino for collaboration opportunities, project inquiries, or professional discussions.',
  //     keywords: 'Contact Diego Ferrufino, Hire Full-Stack Developer, Angular Developer Contact, .NET Developer Hire, Web Development Services'
  //   }
  // },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Resume',
      description: 'Download or view Diego Ferrufino\'s professional resume. Comprehensive overview of skills, experience, and achievements as a Full-Stack Developer.',
      keywords: 'Diego Ferrufino Resume, Full-Stack Developer CV, Angular Developer Resume, .NET Developer CV, Web Developer Resume Download'
    }
  },
  // Legacy hash-based URL redirects
  {
    path: 'about-me',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  {
    path: 'testimonials',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' } // Wildcard route for 404 pages
];
