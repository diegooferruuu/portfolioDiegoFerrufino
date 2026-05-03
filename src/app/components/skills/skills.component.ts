import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  logo: string;
  isInvertLogo: boolean;
  proficiency: 'Expert' | 'Intermediate' | 'Beginner';
  experience: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: [`
    .skill-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
  `]
})
export class SkillsComponent {

  frontends = [
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angular/angular-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 5 },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 5 },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 5 },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 }
  ];

  backends = [
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/csharp/csharp-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 },
    { name: '.NET', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/dotnetcore/dotnetcore-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/spring/spring-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 3 },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', isInvertLogo: true, proficiency: 'Intermediate', experience: 2 },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/django/django-plain.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 }
  ];

  databases = [
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 3 },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'MS SQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 }
  ];

  opss = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 5 },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/kubernetes/kubernetes-plain.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/linux/linux-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/googlecloud/googlecloud-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 1 },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/azure/azure-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 1 },
    { name: 'CI/CD', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/githubactions/githubactions-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 }
  ];

}
