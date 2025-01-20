import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Cars",
    url: "/cars",
  },
  {
    id: "2",
    title: "Team",
    url: "/team",
  },
  {
    id: "3",
    title: "Competitions",
    url: "/competitions",
  },
  {
    id: "4",
    title: "Achievements",
    url: "/achievements",
  },
  {
    id: "5",
    title: "Sponsors",
    url: "/sponsors",
  },
  {
    id: "6",
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: "7",
    title: "Contact Us",
    url: "/contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const teamMembers = [
  {
    name: 'Aman Kumar',
    designation: 'Chief Technical Officer',
    image: 'team/CT/AmanKumarCTO.jpg'
  },
  {
    name: 'Aryan Chauhan',
    designation: 'Chief Operations Officer',
    image: 'team/CT/AryanChauhanCOO.jpg'
  },
  {
    name: 'Deep Boliya',
    designation: 'Chief Technical Officer',
    image: 'team/CT/DeepBoliyaCTO.jpeg'
  },
  {
    name: 'Fahad Ahmad',
    designation: 'Chief Technical Officer',
    image: 'team/CT/FahadAhmadCTO.jpeg'
  },
  {
    name: 'Harsh Nikam',
    designation: 'Team Leader',
    image: 'team/CT/HarshNikamTL.jpg'
  },
  {
    name: 'Himanshu Poonia',
    designation: 'Chief Strategy & Marketing Officer',
    image: 'team/CT/HimanshuPooniaCSMO.jpg'
  },
  {
    name: 'Prakhar Tiwari',
    designation: 'Project Manager',
    image: 'team/CT/PrakharTiwariPM.jpg'
  },
  {
    name: 'Saurabh Prajapati',
    designation: 'Chief Technical Officer',
    image: 'team/CT/SaurabhPrajapatiCTO.png'
  },
  {
    name: 'Yash Rampuria',
    designation: 'Chief Technical Officer',
    image: 'team/CT/YashRampuriaCTO.jpg'
  },
  {
    name: 'Abhijith Vinod',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/AbhijithVinodDE.jpg'
  },
  {
    name: 'Abhinav Jaychandran',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/AbhinavJaychandranDE.jpg'
  },
  {
    name: 'Ajinkya Pawar',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/AjinkyaPawarDE.jpg'
  },
  {
    name: 'Aniket Patel',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/AniketPatelDE.jpg'
  },
  {
    name: 'Atharva Kasar',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/AtharvaKasarDE.png'
  },
  {
    name: 'Chaitanya Meena',
    designation: 'Manager',
    image: 'team/DE-Manager/ChaitanyaMeenaM.png'
  },
  {
    name: 'Dileep Devarajan',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/DileepDevarajanDE.jpg'
  },
  {
    name: 'Nikhil Meena',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/NikhilMeenaDE.png'
  },
  {
    name: 'Rahil Dedhia',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/RahilDedhiaDE.jpg'
  },
  {
    name: 'Rohan Arrvind',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/RohanArrvindDE.jpg'
  },
  {
    name: 'Rohan Chowdhury',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/RohanChowdhuryDE.jpeg'
  },
  {
    name: 'Ruchi Jain',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/RuchiJainDE.jpg'
  },
  {
    name: 'Shubham Agarwal',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/ShubhamAgarwalDE.png'
  },
  {
    name: 'Utkarsh Prakash',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/UtkarshPrakashDE.jpg'
  },
  {
    name: 'Vedant Tayade',
    designation: 'Design Engineer',
    image: 'team/DE-Manager/VedantTayadeDE.jpg'
  },
];

export const sponsors = [
  {
    id: 1,
    title: "Godrej and Boyce",
    image: "sponsors/1.png",
  },
  {
    id: 2,
    title: "PCB Power Market",
    image: "sponsors/2.png",
  },
  {
    id: 3,
    title: "Matter",
    image: "sponsors/3.png",
  },
  {
    id: 4,
    title: "TE Connectivity",
    image: "sponsors/4.png",
  },
  {
    id: 5,
    title: "Harness Techniques",
    image: "sponsors/5.png",
  },
  {
    id: 6,
    title: "Eshway",
    image: "sponsors/6.png",
  },
  {
    id: 7,
    title: "Velodyne",
    image: "sponsors/7.png",
  },
  {
    id: 8,
    title: "Analog Devices",
    image: "sponsors/8.png",
  },
  {
    id: 9,
    title: "NVIDIA",
    image: "sponsors/9.png",
  },
  {
    id: 10,
    title: "San Instruments",
    image: "sponsors/10.png",
  },
  {
    id: 11,
    title: "Tesla",
    image: "sponsors/11.png",
  },
  {
    id: 12,
    title: "IPG",
    image: "sponsors/12.png",
  },
  {
    id: 13,
    title: "Ajmera Indi-Karting",
    image: "sponsors/13.png",
  },
  {
    id: 14,
    title: "Ansys",
    image: "sponsors/14.png",
  },
  {
    id: 15,
    title: "Altium",
    image: "sponsors/15.png",
  },
  {
    id: 16,
    title: "Rapid Harness",
    image: "sponsors/16.png",
  },
  {
    id: 17,
    title: "Infineon",
    image: "sponsors/17.png",
  },
  {
    id: 18,
    title: "Bhor",
    image: "sponsors/18.webp",
  },
  {
    id: 19,
    title: "3dconnexion",
    image: "sponsors/19.webp",
  },
  {
    id: 20,
    title: "Zuken",
    image: "sponsors/20.png",
  },
  {
    id: 21,
    title: "Sim-Scale",
    image: "sponsors/21.png",
  },
  {
    id: 22,
    title: "SBG Systems",
    image: "sponsors/22.png",
  },
];

export const images = [
  {
    id: 1,
    src: "/gallery/gall1.webp",
    alt: "Racing car on track",
    title: "Championship Race 2024",
    category: "Technical"
  },
  {
    id: 2,
    src: "/gallery/gall2.webp",
    alt: "Team working on car",
    title: "Pit Stop Preparation",
    category: "Team"
  },
  {
    id: 3,
    src: "/gallery/gall3.webp",
    alt: "Car detail shot",
    title: "Engine Assembly",
    category: "Team"
  },
  {
    id: 4,
    src: "/gallery/gall4.webp",
    alt: "Team photo",
    title: "Team Victory",
    category: "Technical"
  },
  {
    id: 5,
    src: "/gallery/gall5.webp",
    alt: "Car in motion",
    title: "Testing Day",
    category: "Technical"
  },
  {
    id: 6,
    src: "/gallery/gall6.webp",
    alt: "Technical inspection",
    title: "Pre-race Check",
    category: "Team"
  },
  {
    id: 7,
    src: "/gallery/gall7.webp",
    alt: "Technical inspection",
    title: "Pre-race Check",
    category: "Team"
  },
  {
    id: 8,
    src: "/gallery/gall8.webp",
    alt: "Technical inspection",
    title: "Pre-race Check",
    category: "Team"
  },
  {
    id: 9,
    src: "/gallery/gall9.webp",
    alt: "Technical inspection",
    title: "Pre-race Check",
    category: "Technical"
  },
  {
    id: 10,
    src: "/gallery/gall10.webp",
    alt: "Technical inspection",
    title: "Pre-race Check",
    category: "Racing"
  },
  {
    id: 11,
    src: "/gallery/gall11.webp",
    alt: "Technical inspection",
    title: "Pre-race Check",
    category: "Racing"
  },
  {
    id: 12,
    src: "/gallery/gall12.webp",
    alt: "Technical inspection",
    title: "Pre-race Check",
    category: "Technical"
  }
];
