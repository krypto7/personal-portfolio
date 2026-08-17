export const site = {
  name: "Nishant Karekar",
  brand: "Nishant Karekar",
  title: "Nishant Karekar — Digital Designer & Creative Developer",
  description:
    "Personal portfolio of Nishant Karekar, a web developer & designer.",
  email: "nishantkarekar98@gmail.com",
  phone: "+91 9265458327",
  phoneHref: "tel:9265458888",
  address: "123 Main St, Mumbai, India",
  location: "India",
  intro: [
    "Hello! I'm Nishant",
    "a digital designer",
    "& creative developer",
    "from India.",
  ],
  about:
    "I'm a web developer & designer with over 4+ years of experience. At the crossroads of design and web development, the diversity of my skills allows me to approach design",
  skills: ["Web Devlopment", "Full Stack Development", "HTML", "UI/UX Design"],
  socials: [
    { label: "Linkedin", href: "https://linkedin.com/in/nishantkarekar" },
    { label: "Instagram", href: "https://instagram.com/nishantkarekar" },
    { label: "Twitter", href: "https://twitter.com/nishantkarekar" },
    { label: "Facebook", href: "https://facebook.com/nishantkarekar" },
  ],
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const projectFilters = [
  { label: "All", value: "*" },
  { label: "Web design", value: "cat1" },
  { label: "Web Development", value: "cat2" },
  { label: "UI/UX Design", value: "cat3" },
  { label: "Full Stack Development", value: "cat4" },
] as const;

const detailsGallery = {
  banner: "/assets/img/project/portfolio-details-1/portfolio-details-thumb-1.jpg",
  slider: [
    "/assets/img/project/portfolio-details-1/portfolio-details-thumb-2.jpg",
    "/assets/img/project/portfolio-details-1/portfolio-details-thumb-3.jpg",
    "/assets/img/project/portfolio-details-1/portfolio-details-thumb-4.jpg",
  ],
  thumbs: [
    "/assets/img/project/portfolio-details-1/portfolio-details-thumb-5.jpg",
    "/assets/img/project/portfolio-details-1/portfolio-details-thumb-6.jpg",
    "/assets/img/project/portfolio-details-1/portfolio-details-thumb-7.jpg",
  ],
};

const defaultProcess = [
  {
    title: "01. Development",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings which I enjoy with my whole heart.",
  },
  {
    title: "02. Concept Design",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings which I enjoy with my whole heart.",
  },
  {
    title: "03. Implementation",
    text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings which I enjoy with my whole heart.",
  },
];

export type Project = {
  slug: string;
  number: string;
  title: string;
  year: string;
  category: string;
  filters: Array<Exclude<(typeof projectFilters)[number]["value"], "*">>;
  tags: string[];
  image: string;
  banner: string;
  summary: string;
  client: string;
  role: string;
  duration: string;
  designer: string;
  overview: string[];
  services: string[];
  sliderImages: string[];
  gallery: string[];
  processTitle: string;
  process: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "netrix",
    number: "01",
    title: "Netrix",
    year: "2026",
    category: "Design Direction, UX/UI Design",
    filters: ["cat1", "cat4", "cat2"],
    tags: ["Website", "Services"],
    image: "/assets/img/project/project-8.jpg",
    banner: detailsGallery.banner,
    summary:
      "A digital product experience focused on clear direction, motion, and a refined visual system.",
    client: "Envato",
    role: "Branding",
    duration: "8 March 2026",
    designer: "ThemePure",
    overview: [
      "Netrix is a digital product experience shaped by clear direction and a refined visual system, where motion guides the user and the interface stays out of the way.",
      "That mood shaped a visual language that doesn't explain, but invites. Nothing screams for attention, but everything pulls you in. It's not trying to be nostalgic,",
    ],
    services: [
      "Branding and identity",
      "Websites and digital platforms",
      "Content strategy for social media",
    ],
    sliderImages: detailsGallery.slider,
    gallery: detailsGallery.thumbs,
    processTitle:
      "Out of love for stylish & functional WP themes and for taking pride to support you.",
    process: defaultProcess,
  },
  {
    slug: "easy-culi",
    number: "02",
    title: "Easy Culi",
    year: "2026",
    category: "Design Direction, UX/UI Design",
    filters: ["cat3", "cat4", "cat2"],
    tags: ["Website", "Branding"],
    image: "/assets/img/project/project-9.jpg",
    banner: detailsGallery.banner,
    summary:
      "A culinary brand platform built around simple flows, strong type, and a warm visual language.",
    client: "Envato",
    role: "Branding",
    duration: "12 April 2026",
    designer: "ThemePure",
    overview: [
      "Easy Culi is a culinary brand platform built around simple flows, strong type, and a warm visual language that feels as considered as the food it represents.",
      "That mood shaped a visual language that doesn't explain, but invites. Nothing screams for attention, but everything pulls you in. It's not trying to be nostalgic,",
    ],
    services: [
      "Branding and identity",
      "Websites and digital platforms",
      "Content strategy for social media",
    ],
    sliderImages: detailsGallery.slider,
    gallery: detailsGallery.thumbs,
    processTitle:
      "Out of love for stylish & functional WP themes and for taking pride to support you.",
    process: defaultProcess,
  },
  {
    slug: "space-needle",
    number: "03",
    title: "Space Needle",
    year: "2026",
    category: "Design Direction, UX/UI Design",
    filters: ["cat2", "cat1", "cat3"],
    tags: ["Website", "Motion"],
    image: "/assets/img/project/project-1.jpg",
    banner: detailsGallery.banner,
    summary:
      "An immersive web experience that uses scroll, imagery, and motion to tell a spatial story.",
    client: "Envato",
    role: "Development",
    duration: "21 May 2026",
    designer: "ThemePure",
    overview: [
      "Space Needle is an immersive web experience that uses scroll, imagery, and motion to tell a spatial story — less a page, more a place you move through.",
      "That mood shaped a visual language that doesn't explain, but invites. Nothing screams for attention, but everything pulls you in. It's not trying to be nostalgic,",
    ],
    services: [
      "Branding and identity",
      "Websites and digital platforms",
      "Content strategy for social media",
    ],
    sliderImages: detailsGallery.slider,
    gallery: detailsGallery.thumbs,
    processTitle:
      "Out of love for stylish & functional WP themes and for taking pride to support you.",
    process: defaultProcess,
  },
  {
    slug: "fabric",
    number: "04",
    title: "Fabric",
    year: "2026",
    category: "Design Direction, UX/UI Design",
    filters: ["cat4", "cat2", "cat3"],
    tags: ["Branding", "Services"],
    image: "/assets/img/project/project-2.jpg",
    banner: detailsGallery.banner,
    summary:
      "A tactile branding and digital identity project with a focus on texture, layout, and craft.",
    client: "Envato",
    role: "Branding",
    duration: "3 June 2026",
    designer: "ThemePure",
    overview: [
      "Fabric is a tactile branding and digital identity project with a focus on texture, layout, and craft. The system is quiet, material, and built to last.",
      "That mood shaped a visual language that doesn't explain, but invites. Nothing screams for attention, but everything pulls you in. It's not trying to be nostalgic,",
    ],
    services: [
      "Branding and identity",
      "Websites and digital platforms",
      "Content strategy for social media",
    ],
    sliderImages: detailsGallery.slider,
    gallery: detailsGallery.thumbs,
    processTitle:
      "Out of love for stylish & functional WP themes and for taking pride to support you.",
    process: defaultProcess,
  },
  {
    slug: "kinetic-sandscapes",
    number: "05",
    title: "Kinetic Sandscapes",
    year: "2026",
    category: "Design Direction, UX/UI Design",
    filters: ["cat1", "cat3", "cat4"],
    tags: ["Website", "Motion"],
    image: "/assets/img/project/project-3.jpg",
    banner: detailsGallery.banner,
    summary:
      "A motion-led brand world built around shifting texture, rhythm, and a sculptural visual system.",
    client: "Envato",
    role: "Motion",
    duration: "18 July 2026",
    designer: "ThemePure",
    overview: [
      "Kinetic Sandscapes is a motion-led brand world built around shifting texture, rhythm, and a sculptural visual system that feels alive in the browser.",
      "That mood shaped a visual language that doesn't explain, but invites. Nothing screams for attention, but everything pulls you in. It's not trying to be nostalgic,",
    ],
    services: [
      "Branding and identity",
      "Websites and digital platforms",
      "Content strategy for social media",
    ],
    sliderImages: detailsGallery.slider,
    gallery: detailsGallery.thumbs,
    processTitle:
      "Out of love for stylish & functional WP themes and for taking pride to support you.",
    process: defaultProcess,
  },
  {
    slug: "spectrum-in-motion",
    number: "06",
    title: "A Spectrum In Motion Unfolds",
    year: "2026",
    category: "Design Direction, UX/UI Design",
    filters: ["cat3", "cat2", "cat1"],
    tags: ["Website", "Development"],
    image: "/assets/img/project/project-10.jpg",
    banner: detailsGallery.banner,
    summary:
      "A color-driven digital platform where development, type, and motion unfold as one system.",
    client: "Envato",
    role: "Development",
    duration: "9 August 2026",
    designer: "ThemePure",
    overview: [
      "A Spectrum In Motion Unfolds is a color-driven digital platform where development, type, and motion work as one system rather than three separate layers.",
      "That mood shaped a visual language that doesn't explain, but invites. Nothing screams for attention, but everything pulls you in. It's not trying to be nostalgic,",
    ],
    services: [
      "Branding and identity",
      "Websites and digital platforms",
      "Content strategy for social media",
    ],
    sliderImages: detailsGallery.slider,
    gallery: detailsGallery.thumbs,
    processTitle:
      "Out of love for stylish & functional WP themes and for taking pride to support you.",
    process: defaultProcess,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const safeIndex = index < 0 ? 0 : index;

  return {
    prev: projects[(safeIndex - 1 + projects.length) % projects.length],
    next: projects[(safeIndex + 1) % projects.length],
  };
}

export const gallery = {
  rowOne: [
    { type: "image" as const, src: "/assets/img/gallery/gallery-1.jpg" },
    { type: "image" as const, src: "/assets/img/gallery/gallery-7.jpg" },
    { type: "video" as const, src: "/videos/profile/banner-4-1.mp4" },
    { type: "image" as const, src: "/assets/img/gallery/gallery-2.jpg" },
    { type: "image" as const, src: "/assets/img/gallery/gallery-3.jpg" },
  ],
  rowTwo: [
    { type: "image" as const, src: "/assets/img/gallery/gallery-4.jpg" },
    { type: "video" as const, src: "/videos/profile/banner-4-1.mp4" },
    { type: "image" as const, src: "/assets/img/gallery/gallery-5.jpg" },
    { type: "image" as const, src: "/assets/img/gallery/gallery-6.jpg" },
    { type: "image" as const, src: "/assets/img/gallery/gallery-7.jpg" },
  ],
};

export const awards = [
  {
    number: "001",
    logo: "/assets/img/award/award-1.png",
    category: "Best web design agency",
    nomination: "Web Excellence Awards",
    year: "2023",
    delay: ".3",
  },
  {
    number: "002",
    logo: "/assets/img/award/award-2.png",
    category: "Top digital marketing firm",
    nomination: "Clutch Top Agencies",
    year: "2022",
    delay: ".5",
  },
  {
    number: "003",
    logo: "/assets/img/award/award-3.png",
    category: "Best web design agency",
    nomination: "Awwwards Honorable Mention",
    year: "2024",
    delay: ".7",
  },
  {
    number: "004",
    logo: "/assets/img/award/award-1.png",
    category: "Best web design agency",
    nomination: "CSS Design Awards",
    year: "2026",
    delay: ".9",
  },
];

export const offcanvasImages = [
  "/assets/img/offcanvas/offcanvas-1.jpg",
  "/assets/img/offcanvas/offcanvas-2.jpg",
  "/assets/img/offcanvas/offcanvas-3.jpg",
  "/assets/img/offcanvas/offcanvas-4.jpg",
];

export const heroWords = ["Branding", "Development", "Design"];
export const serviceWords = ["Branding", "Development", "Design"];
export const contactSubjects = [
  "Personal portfolio",
  "Digital Agency",
  "Creative Agency",
  "It Solution",
];
export const contactInterests = [
  "Branding",
  "Design Concept",
  "App Design",
  "Android Development",
  "iOS Development",
  "Web Design",
  "Logo",
];
