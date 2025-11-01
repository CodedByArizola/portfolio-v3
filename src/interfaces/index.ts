export interface ProjectProps {
    title: string;
    description: string;
    image: string;
    toolsUsed: string[];
    githubLink?: string;
    siteLink?: string;
}

export interface NonFeaturedProjectProps {
    title: string;
    description: string;
    toolsUsed?: string[];
    githubLink?: string;
    siteLink?: string;
}

export interface ContactConfirmationAlertProps {
    severity: string;
    message: string;
    onHideAlertClick: Function;
}

export interface SoftwareProject {
    title: string;
    description: string;
    image?: string;
    featured?: boolean;
    toolsUsed: string[];
    githubLink?: string;
    siteLink?: string;
}
