export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  variant: 'dark' | 'purple' | 'gray';
  skills: Skill[]; // <-- Cambiado de string[] a Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Lenguajes y Frameworks",
    variant: "purple",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }
    ]
  },
  {
    category: "Bases de Datos y Persistencia",
    variant: "dark",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      /* Tip rápido: Te cambié la URL de Hibernate por una válida de Devicon */
      { name: "Hibernate / JPA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" }
    ]
  },
  {
    category: "Herramientas de Entorno",
    variant: "gray",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]
  }
];