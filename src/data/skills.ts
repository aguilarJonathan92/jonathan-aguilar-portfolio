export interface SkillGroup {
  category: string;
  variant: 'dark' | 'purple' | 'gray';
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    variant: "dark",
    skills: ["Java", "Spring Boot", "PHP", "Laravel", "Filament"],
  },
  {
    category: "Frontend",
    variant: "purple",
    skills: ["React", "Tailwind CSS", "Bootstrap", "Blade"],
  },
  {
    category: "Bases de datos",
    variant: "gray",
    skills: ["MySQL", "MariaDB"],
  },
  {
    category: "Herramientas",
    variant: "gray",
    skills: ["Git", "Flyway", "IntelliJ IDEA", "Herd"],
  },
];
