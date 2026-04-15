import { SoftwareProject } from "../interfaces";

export const pages: string[] = ['About', 'Education', 'Projects', 'Contact'];
export const contactAPIRoute = 'https://api.web3forms.com/submit';

// SOCIAL MEDIA LINKS
export const socialMediaLinks: { name: string; link: string; }[] = [
    {
        name: 'GitHub',
        link: 'https://github.com/CodedByArizola/'
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/alex.arizola/'
    },
    {
        name: 'X',
        link: 'https://x.com/alex_arizola/'
    },
    {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/alexander-arizola/'
    },
    {
        name: 'Email',
        link: 'mailto:contact@alexarizola.dev'
    },
    {
        name: 'Resume',
        link: 'https://codedbyarizola.github.io/'
    }
];

// PROJECTS
export const listOfProjects: SoftwareProject[] = [
    {
        title: 'Game Inventory System',
        description: 'A fully interactive inventory management system built with React, Sass, Redux and Vite on the front end and powered by a TypeScript + SQL backend. The system supports advanced item interactions, including moving, stacking, splitting, and transferring items between containers in real time. Designed with drag-and-drop functionality and keyboard shortcuts, users can quickly split stacks, use items, or transfer them between inventories with fluid responsiveness. Global state management via Redux ensures instant UI updates, while the backend maintains reliable data synchronization and persistence alongside updates to its SQL tables.',
        image: 'game-inventory-system.webp',
        featured: true,
        toolsUsed: ['React.js', 'Redux.js', 'MySQL', 'TypeScript', 'Vite', 'Sass']
    },
    {
        title: 'Adriana\'s Bowtique',
        description: 'Designed and developed a responsive, user-friendly website for Adriana\'s Bowtique, a small business, to enhance its online presence and improve customer engagement. Enabled customers to easily browse available products and submit inquiries through a streamlined contact system, helping bridge the gap between the business and its audience. Implemented bilingual (English-Spanish) support to expand accessibility and reach a broader customer base.',
        image: 'adrianas-bowtique.webp',
        featured: true,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/CodedByArizola/adriana_bowtique',
        siteLink: 'https://adrianas-bowtique.netlify.app/'
    },
    {
        title: 'GhostEye (FiveM-Based Anti-Cheat)',
        description: 'Engineered a real-time anti-cheat framework for a FiveM multiplayer environment, leveraging server-client validation, behavioral analysis, and event inspection. Developed automated enforcement pipelines with logging, screenshot capture, and real-time alerting, enabling faster incident response and moderation actions.',
        toolsUsed: ['TypeScript', 'discord.js', 'MySQL', 'npm']
    },
    {
        title: 'Untitled Tank Game',
        description: 'Collaborated on a team-based game project using Unity and C#. Developed a fast melee enemy called the Knight with unique behavior, improved UI for better player experience, and implemented a spawn protection system to enhance gameplay balance. Enforced clean version control practices using GitHub and Jira, including isolated branch testing, and helped team members adopt effective collaboration workflows.',
        toolsUsed: ['Unity', 'C#', 'Jira']
    },
    {
        title: 'GitHub User Lookup',
        description: 'Developed a user-friendly tool that allows users to quickly search and view GitHub profiles. The application displays key information such as username, profile picture, bio, company, public repositories, etc, providing a brief and accessible overview of any GitHub account.',
        toolsUsed: ['Preact.js', 'Mantine', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/CodedByArizola/github_userlookup',
        siteLink: 'https://clever-wisp-aa80d7.netlify.app/'
    },
    {
        title: 'Movie Info App',
        description: 'Developed an application that enables users to search for movies and view detailed information in a clean and accessible format. The tool provides key details such as plot summary, poster image, box office performance, etc, offering a brief overview of each film.',
        image: 'movieinfoapp.webp',
        featured: true,
        toolsUsed: ['Preact.js', 'Mantine', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/CodedByArizola/movieinfoapp',
        siteLink: 'https://zippy-cat-24ae8d.netlify.app/'
    },
    {
        title: 'Roleplay Community Website',
        description: 'As the lead developer of a FiveM community, I designed and developed a responsive web platform to centralize resources, streamline onboarding, and enhance user engagement. The website serves as a hub for community information, media content, and external platform integrations.',
        image: 'roleplay-community-website.webp',
        featured: true,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Vite', 'Sass'],
        siteLink: 'https://prpwebsite-v2.netlify.app/'
    },
    {
        title: 'Personal Portfolio',
        description: 'Designed and deployed my professional portfolio with precise accessibility, informative content, and a responsive, user-centric interface, delivering a seamless experience across devices.',
        featured: false,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/CodedByArizola/portfolio-v3',
        siteLink: 'https://aa-portfolio-v3.netlify.app/'
    },
    {
        title: 'Weather Lookup',
        description: 'A tool to look up a region for the current climate statistics. Statistics include temperature, pressure, humidity, wind speed/direction and more! This was also my very first Vue.js project!',
        featured: false,
        toolsUsed: ['Vue.js', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/CodedByArizola/weatherapp',
        siteLink: 'https://dainty-tapioca-dbc275.netlify.app/'
    },
    {
        title: 'Rock Paper Scissors',
        description: 'A minigame representing the famous hand game called "Rock, Paper, Scissors". This is the first project I\'ve utilized Tailwind CSS.',
        featured: false,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Vite', 'Tailwind CSS'],
        githubLink: 'https://github.com/CodedByArizola/rock-paper-scissors',
        siteLink: 'https://aa-rock-paper-scissors.netlify.app/'
    },
    {
        title: 'QR Code Generator',
        description: 'Developed a simple application that allows users to generate QR codes from any text or URL for quick and easy sharing.',
        featured: false,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/CodedByArizola/qr-code-generator',
        siteLink: 'https://aa-qrcodegenerator.netlify.app/'
    },
    {
        title: 'Coin Flipper',
        description: 'A quick and easy coin flipper to get either heads or tails!',
        featured: false,
        toolsUsed: ['React.js', 'Material UI', 'TypeScript', 'Cascading Style Sheets', 'Vite'],
        githubLink: 'https://github.com/CodedByArizola/flip-a-coin',
        siteLink: 'https://aa-flipacoin.netlify.app/'
    },
     {
        title: 'Link Tree v2',
        description: 'The second and improved version of a tree of my social media links.',
        toolsUsed: ['Vue.js', 'Vuetify', 'Vite', 'Cascading Style Sheets'],
        githubLink: 'https://github.com/CodedByArizola/linktree-v2',
        siteLink: 'https://aa-linktree-v2.netlify.app/'
    },
    {
        title: 'Password Generator',
        description: 'Developed a customizable password generator that allows users to create secure passwords based on selected criteria, including lowercase and uppercase letters, numbers, and symbols.',
        featured: false,
        toolsUsed: ['Preact.js', 'Mantine', 'TypeScript', 'Vite', 'Less'],
        githubLink: 'https://github.com/CodedByArizola/password_generator',
        siteLink: 'https://sparkly-kelpie-d89b5d.netlify.app/'
    },
    {
        title: 'Currency Converter',
        description: 'A tool to get the exchange rate of an amount of money in one currency to another.',
        featured: false,
        toolsUsed: ['React.js', 'Mantine', 'TypeScript', 'Vite', 'Sass'],
        githubLink: 'https://github.com/CodedByArizola/currency_converter',
        siteLink: 'https://classy-choux-2958bf.netlify.app/'
    }
];

// TOOL INFORMATION
export const toolInformation: Record<string, Record<string, string>> = {
    'Netlify': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
        link: 'https://netlify.com/'
    },
    'Vite': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
        link: 'https://vitejs.dev/'
    },
    'Mantine': {
        image: 'mantine.webp',
        link: 'https://mantine.dev/'
    },
    'Preact.js': {
        image: 'preactjs.png',
        link: 'https://preactjs.com/'
    },
    'Redux.js': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
        link: 'https://redux.js.org/'
    },
    'HTML': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
        link: 'https://html.com/'
    },
    'Cascading Style Sheets': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
        link: 'https://css3.com/'
    },
    'TypeScript': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        link: 'https://typescriptlang.org/'
    },
    'JavaScript': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        link: 'https://javascript.com/'
    },
    'jQuery': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg',
        link: 'https://jquery.com/'
    },
    'MySQL': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        link: 'https://mysql.com/'
    },
    'PHP': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        link: 'https://php.net/'
    },
    'React.js': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        link: 'https://reactjs.org/'
    },
    'Sass': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        link: 'https://sass-lang.com/'
    },
    'Material UI': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg',
        link: 'https://mui.com/'
    },
    'Less': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg',
        link: 'https://lesscss.org/'
    },
    'Lua': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg',
        link: 'https://lua.org/'
    },
    'Vue.js': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        link: 'https://vuejs.org/'
    },
    'Svelte': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
        link: 'https://svelte.dev/'
    },
    'Bootstrap': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        link: 'https://getbootstrap.com/'
    },
    'Python': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        link: 'https://python.org/'
    },
    'Tailwind CSS': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        link: 'https://tailwindcss.com/'
    },
    'Vuetify': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
        link: 'https://vuetifyjs.com/'
    },
    'discord.js': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-original.svg',
        link: 'https://discord.js.org/'
    },
    'npm': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg',
        link: 'https://www.npmjs.com/'
    },
    'Unity': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
        link: 'https://unity.com/'
    },
    'C#': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        link: 'https://csharp.com/'
    },
    'Jira': {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
        link: 'https://www.atlassian.com/software/jira'
    }
};
