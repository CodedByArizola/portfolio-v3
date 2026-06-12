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
        title: 'Lead Developer',
        company: 'Evol PC Gaming',
        duration: 'July 2021 - November 2021',
        responsibilities: [
            'Contributed to a large-scale framework redevelopment project, optimizing Lua-based server systems and reducing runtime execution overhead from ~0.30ms to under 0.07ms per resource.',
            'Configured and maintained remote development environments using PuTTY and WinSCP, enabling developers to securely access Linux-based servers, deploy code, and test features in a consistent environment.',
            'Modernized user interface systems by transitioning from Lua-rendered menus to HTML/jQuery/CSS-based NUI solutions, improving performance, maintainability, and visual consistency.',
            'Participated in code reviews, testing, and deployment processes, helping maintain a stable development pipeline and minimize production issues.'
        ],
        pastRoles: [
            {
                title: 'Junior Developer',
                duration: 'December 2019 - July 2021',
                responsibilities: [
                    'Served on an 8-person FiveM server development team, implementing new features, resolving bugs, and maintaining core gameplay systems.',
                    'Designed internal debugging and monitoring tools that reduced incident investigation time from hours to minutes, enabling faster identification of malicious activity and gameplay issues.',
                    'Developed and deployed 15+ gameplay features and quality-of-life improvements, enhancing player engagement and server functionality.'
                ]
            }
        ]
    }
];
