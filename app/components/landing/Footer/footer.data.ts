import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Modules", href: "#modules" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#" },
  ],

  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],

  resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com",
    label: "X",
  },
  
];