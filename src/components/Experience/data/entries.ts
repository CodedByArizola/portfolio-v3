import { ExperienceEntry } from "../interfaces";

export const experienceEntries: ExperienceEntry[] = [
    {
        title: 'Lead Developer',
        company: 'Production Roleplay Community',
        duration: 'November 2021 - May 2025',
        responsibilities: [
            'Architected and implemented scalable backend systems in Lua and TypeScript, supporting 225+ concurrent users with secure SQL integrations.',
            'Designed normalized relational databases (3NF), implementing indexing and query optimizations that significantly reduced database response times.',
            'Built responsive and accessible React-based UIs using TypeScript and Sass, improving user experience and reducing support issues.',
            'Led code reviews and mentored fellow developers, improving code quality and deployment stability.',
            'Managed CI/CD workflows and version control using Git/GitHub and tracked agile tasks via Jira.'
        ]
    },
    {
        title: 'Developer',
        company: 'Evol PC Gaming',
        duration: 'December 2019 - November 2021',
        responsibilities: [
            'Served on an 8-person FiveM server development team, implementing new features, resolving bugs, and maintaining core gameplay systems.',
            'Contributed to a large-scale framework redevelopment project, optimizing Lua-based server systems and reducing runtime execution overhead from ~0.30ms to under 0.07ms per resource.',
            'Modernized user interface systems by transitioning from Lua-rendered menus to HTML/jQuery/CSS-based NUI solutions, improving usability, maintainability, and visual consistency.'
        ]
    },
];
