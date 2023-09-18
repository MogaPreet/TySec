
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  ransomware,
  zero,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Works",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cybersecurity Training",
    icon: web,
  },
  {
    title: "Consulting and Advisory Services",
    icon: mobile,
  },
  {
    title: "Penetration Testing and Vulnerability Assessments",
    icon: backend,
  },
  {
    title: "Incident Response and Recovery",
    icon: creator,
  },
];

const technologies = [

];

const experiences = [


];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id: 0,
    name: "The Top Cybersecurity Threats of 2023",
    description:
      "As technology continues to advance, so do the threats in the cyber landscape. In 2023, cybersecurity experts are facing a complex array of challenges. Here are some of the top cybersecurity threats to watch out for this year:",
    tags: [
      {
        name: "CyberSecurity",
        color: "blue-text-gradient",
      },
      {
        name: "Threats",
        color: "green-text-gradient",
      },

    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },

  {
    id: 1,
    name: "Ransomware Attacks and Prevention Strategies",
    description:
      "In recent years, ransomware attacks have surged to the forefront of cybersecurity concerns. These malicious attacks involve encrypting a victim's data and demanding a ransom payment for its release.",
    tags: [
      {
        name: "Prevention",
        color: "green-text-gradient",
      },
      {
        name: "Strategies",
        color: "pink-text-gradient",
      },
    ],
    image: ransomware,
    source_code_link: "https://github.com/",
  },
  {
    id: 2,
    name: "IOT Security Challenges",
    description:
      "The Internet of Things (IoT) has revolutionized our homes and businesses, offering convenience and efficiency. However, this proliferation of interconnected devices also presents unique security challenges that must not be underestimated.",
    tags: [
      {
        name: "IOT Vulnerabilities",
        color: "blue-text-gradient",
      },
      {
        name: "Potential Threads",
        color: "green-text-gradient",
      },
      {
        name: "IOT Security Standards",
        color: "pink-text-gradient",
      },
    ],
    image: zero,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
