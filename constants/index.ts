import {
  FaChalkboardTeacher,
  FaPhoneAlt,
  FaLaptopCode,
  FaUserShield,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const navLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about-us" },
  {id: "bootcamp", label: "Bootcamp", href: "#",
    subItems: [
      { 
        label: "Bootcamp 1",
        href: "/bootcamp/bootcamp-1"

       },
      { 
        label: "Bootcamp 2",
        href: "/bootcamp/bootcamp-2"

       },
      { 
        label: "Bootcamp 3",
        href: "/bootcamp/bootcamp-2"

       },
    ],
  },
  { id: "contact", label: "Contact", href: "/contact-us" },
];

export const mobileNav = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about-us" },
  {id: "bootcamp", label: "Bootcamp", href: "#",
    subItems: [
      { 
        label: "Bootcamp 1"

       },
      { 
        label: "Bootcamp 2"

       },
      { 
        label: "Bootcamp 3"

       },
    ],
  },
  { id: "contact", label: "Contact", href: "/contact-us" },

  

];



export const herotags = [
  {
    id: 1,
    tags: "Diploma Program",
  },
  {
    id: 2,
    tags: "12-weeks full-time",
  },
  {
    id: 3,
    tags: "30-weeks part-time",
  },
];
export const functions = [
  {
    title: "Security Analyst",
    text: "Security analysts monitor, prevent and stop attacks on private data. In this role, you can expect to spend your days designing and implementing firewalls and other digital security software systems to protect data and network systems across an organization.",
  },
  {
    title: "Incident Responder/Handler",
    text: "Incident Responders/Handlers are responsible for identifying, analyzing, and mitigating security breaches or incidents. They work to minimize damage to a organization's systems and data by investigating the cause and scope of an incident, as well as implementing measures to prevent future attacks.",
  },
  {
    title: "Security Researcher",
    text: "Security researchers hold one of the most essential roles in cybersecurity. They design security protocols and study the evolution of unique malware strains that allow other cybersecurity professionals to monitor and detect vulnerabilities in their networks.",
  },
];
export const CheckBootcamps = [
  {
    image: "/images/technical-analyst.jpg",
    weeks: "(8 Weeks)",
    title: "Technical Support Analyst",
    text: "This Bootcamp Prepares You for CompTIA A+ Exam",
    description:
      "Gain essential skills for entry-level IT support roles, including network administration, operating systems, and troubleshooting. Learn to manage devices, peripherals, and basic system security. This bootcamp aligns with CompTIA A+, preparing you for roles like IT Support Specialist and Technical Support Analyst.",
  },
  {
    image: "/images/cybersecurity-analyst.jpg",
    weeks: "(8 Weeks)",
    title: "Cybersecurity Analyst",
    text: "This Bootcamp Prepares You for CompTIA Security+ and CySA+ Exams",
    description:
      "Prepare for roles in network security and incident response. Learn to analyze and mitigate cyber threats, secure networks, and use security tools. This bootcamp aligns with CompTIA Security+ and CySA+, making you ready for positions like Cybersecurity Analyst and Incident Responder.",
  },
  {
    image: "/images/ethical-hacker.jpg",
    weeks: "(8 Weeks)",
    title: "Ethical Hacker",
    text: "This Bootcamp Prepares You for Certified Ethical Hacker (CEH) Exam",
    description:
      "Focus on penetration testing, vulnerability scanning, and ethical hacking techniques. Learn how to identify security weaknesses and protect organizations from cyber threats. This bootcamp aligns with CEH, preparing you for roles like Ethical Hacker and Penetration Tester.",
  },
];

export const whychoose = [
  {
    id: 1,
    icon: FaChalkboardTeacher,
    text: "Experienced Instructors",
    description:
      "Our instructors bring years of real-world cybersecurity experience to the classroom, ensuring you're learning from the best.",
  },
  {
    id: 2,
    icon: FaLaptopCode,
    text: "Hands-on Labs",
    description:
      "Gain practical experience with simulated attacks and defenses using our hands-on virtual labs.",
  },
  {
    id: 3,
    icon: FaUserShield,
    text: "Career-Focused Training",
    description:
      "Get guidance on job interviews, certifications, & resume building to help you step into the cybersecurity field.",
  },
];

export const contactBox = [
  {
    id: 1,
    icon: FaPhoneAlt,
    link: "tel:+1(437) 449-4365",
    contact: "+1(437) 449-4365",
  },
  {
    id: 2,
    icon: MdMail,
    link: "mailto:info@starriselabs.com",
    contact: "Info@starriselabs.com",
  },
];
