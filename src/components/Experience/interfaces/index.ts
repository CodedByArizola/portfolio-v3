export type ExperienceWithoutCompany = Omit<ExperienceEntry, 'company'>;

export interface ExperienceEntry {
    title: string;
    company: string;
    duration: string;
    responsibilities: string[];
    pastRoles?: ExperienceWithoutCompany[];
};
