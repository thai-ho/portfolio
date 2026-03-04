export interface Experience {
    period: string;
    role: string;
    company: string;
    companyUrl: string;
    description: string;
    technologies: string[];
    /** If company transitioned to another brand */
    transitionTo?: {
        company: string;
        companyUrl: string;
    };
}

export interface Project {
    title: string;
    description?: string;
    technologies: string[];
    sourceLink: string;
    year: string;
}

export interface SocialLink {
    label: string;
    handle: string;
    url: string;
}

export const experiences: Experience[] = [
    {
        period: "2021 – present",
        role: "Web Developer",
        company: "Be",
        companyUrl: "https://be.com.vn",
        description:
            "Working with an awesome team of designers, product folks & devs to build features for one of the most Digital Bank in VietNam. Helping my web team to build a solid design system and the new shape of products, bringing better experience to our users.",
        technologies: ["React", "Styled Components", "Tailwind", "Webpack", "Storybook"],
        transitionTo: {
            company: "Cake",
            companyUrl: "https://cake.vn",
        },
    },
    {
        period: "2021",
        role: "Frontend Developer",
        company: "Unibiz (now \"Excel\")",
        companyUrl: "https://exceltech.vn/",
        description:
            "Teamed up with various agencies and startups to bring their digital dreams to life. Got to wear many hats and dive into a bunch of different projects.",
        technologies: ["React", "Redux", "CSSModules"],
    },
    {
        period: "2020 – 2021",
        role: "Frontend Developer",
        company: "Innotech",
        companyUrl: "https://innotech.vn",
        description:
            "Jumped in as an intern, to help big financial players like SSI, Maybank, HSC and more build and maintain their digital presence. Translated complex requirements into user-friendly interfaces.",
        technologies: ["React", "C#", "SCSS", "jQuery"],
    },
];

export const featuredProjects: Project[] = [
    {
        title: "Portfolio v2",
        description: "The 2026 Aurora theme you're looking at right now!",
        technologies: ["Vue.js", "Tailwind CSS", "Vite", "TypeScript"],
        sourceLink: "https://github.com/thai-ho/portfolio",
        year: "2026",
    },
];

export const allProjects: Project[] = [
    {
        title: "Portfolio v2",
        technologies: ["Vue.js", "Tailwind CSS", "Vite", "TypeScript"],
        sourceLink: "https://github.com/thai-ho/portfolio",
        year: "2026",
    },
    {
        title: "Portfolio v1",
        technologies: ["Vue.js", "Tailwind CSS", "Vite"],
        sourceLink: "https://github.com/thai-ho/portfolio",
        year: "2025",
    },
    {
        title: "CTicket",
        technologies: ["Next.js", "Typescript", "Daisy UI", "Tailwind CSS", "Tooljet", "Casdoor"],
        sourceLink: "https://cticket.vn/",
        year: "2025",
    },
    {
        title: "Cake",
        technologies: ["Next.js", "Typescript", "Tailwind CSS", "Strapi"],
        sourceLink: "https://cake.vn/",
        year: "2025",
    },
    {
        title: "Cake Onboarding Platform",
        technologies: ["Next.js", "Typescript", "CSS-in-JS", "RHF", "React Query", "BFF"],
        sourceLink: "https://dop.cake.vn/affiliate",
        year: "2023",
        description:
            "There are many links (a.k.a. vendors) for this platform, but I chose this one just to showcase the BFF concept :D",
    },
    {
        title: "Cake Internal Portal",
        technologies: ["React", "Typescript", "RHF", "React Query", "Micro services", "Monorepo"],
        sourceLink: "private",
        year: "2024",
    },
    {
        title: "Banhmi UI Library",
        technologies: ["React", "Typescript", "Storybook"],
        sourceLink: "https://github.com/beVietnam/banhmi",
        year: "2021",
    },
    {
        title: "Eoty Dashboards",
        technologies: ["React", "Node.js", "CSSModules"],
        sourceLink: "private",
        year: "2021",
    },
    {
        title: "VICO Hong Kong Landing Page",
        technologies: ["React", "Node.js", "Next.js", "CSSModules"],
        sourceLink: "https://www.vico.com.hk/",
        year: "2021",
    },
    {
        title: "WisereOS",
        technologies: ["React", "Next.js", "CSSModules"],
        sourceLink: "https://wisere.com/",
        year: "2021",
    },
    {
        title: "WineMart",
        technologies: ["React", "Next.js", "CSSModules"],
        sourceLink: "https://winemart.vn/",
        year: "2021",
    },
    {
        title: "Derivative SSI Board",
        technologies: ["JS", "SASS/SCSS", "jQuery"],
        sourceLink: "",
        year: "2020",
    },
    {
        title: "HSC, TVSI, Maybank,... Trading Platform",
        technologies: ["React", "SASS/SCSS", "C#", "jQuery"],
        sourceLink: "",
        year: "2020",
    },
];

export const socialLinks: SocialLink[] = [
    { label: "Github", handle: "@thai-ho", url: "https://github.com/thai-ho" },
    { label: "Twitter", handle: "@hh_thai", url: "https://x.com/hh_thai" },
    { label: "LinkedIn", handle: "@hhthai1807", url: "https://www.linkedin.com/in/hhthai1807/" },
    { label: "Email", handle: "hhthai1807@gmail.com", url: "mailto:hhthai1807@gmail.com" },
];

export const bio = {
    name: "Thai Ho",
    title: "Front-end Developer",
    greeting: "Hey there! ✌️",
    intro: [
        "I love turning ideas into actual working products. I'm very big on building interfaces that users actually enjoys using.",
        "Always building. Always shipping. Never settling. If there are any chances, let's make something awesome together!",
    ],
};
