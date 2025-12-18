import Link from "next/link";
import type { TeamData } from "./TeamDetailClient";
import TeamDetailClient from "./TeamDetailClient";

// Team data with all members (server-only)
export const teamsData: Record<string, TeamData> = {
  "team-corporate": {
    name: "Team Corporate",
    description: "Sponsorship acquisition and corporate relations",
    detailedDescription:
      "Team Corporate is responsible for building and maintaining relationships with corporate sponsors and partners. They work tirelessly to secure funding and resources that enable NSU ACM Student Chapter to organize successful events and initiatives. Their negotiation skills and business acumen are crucial for the chapter's growth and sustainability.",
    color: "from-emerald-500 to-teal-500",
    icon: null,
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    subExecutives: [
      { name: "Sudipta Karmaker", image: "/teams/sub-executives/Corporate/Sudipta_Karmaker.webp" },
      { name: "Atahar Hossain", image: "/teams/sub-executives/Corporate/Atahar_Hossain.webp" },
      { name: "Rayta Binte Noor", image: "/teams/sub-executives/Corporate/Rayta_Binte_Noor.webp" },
      { name: "Augustine Gomes", image: "/teams/sub-executives/Corporate/Augustine_Gomes.webp" },
    ],
    incharges: [
      { name: "Anindo Kumar Biswas", image: "/teams/incharges/Corporate/Anindo_Kumar_Biswas.webp" },
      { name: "Al Mustafiz Bappy", image: "/teams/incharges/Corporate/Al_Mustafiz_Bappy.webp" },
      { name: "Arif Faysal Shakib", image: "/teams/incharges/Corporate/Arif_Faysal_Shakib.webp" },
    ],
  },
  "team-promotions": {
    name: "Team Promotions",
    description: "Graphic design and creative content creation",
    detailedDescription:
      "Team Promotions is the creative powerhouse of NSU ACM Student Chapter. They specialize in graphic design, creating visually stunning promotional materials, social media content, and event branding. Their artistic vision and attention to detail ensure that every event and initiative has a professional and engaging visual identity that captures attention and communicates our message effectively.",
    color: "from-blue-500 to-cyan-500",
    icon: null,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    subExecutives: [
      { name: "Arefin Amin", image: "/teams/sub-executives/Promotion/Arefin_Amin.webp" },
      { name: "Khondker Tamzidur Rahman", image: "/teams/sub-executives/Promotion/Khondker_Tamzidur_Rahman.webp" },
    ],
    incharges: [
      { name: "Shafin Raiyan", image: "/teams/incharges/Promotion/Shafin_Raiyan.webp" },
      { name: "Tahminuzzaman Nahian", image: "/teams/incharges/Promotion/Tahminuzzaman_Nahian.webp" },
      { name: "Syed Shadman Zahin", image: "/teams/incharges/Promotion/Syed_Shadman_Zahin.webp" },
      { name: "Aminul Islam", image: "/teams/incharges/Promotion/Aminul Islam.webp" },
      { name: "G. M. Siam", image: "/teams/incharges/Promotion/G._M._Siam.webp" },
    ],
  },
  "team-provision": {
    name: "Team Provision",
    description: "Event organization and logistics management",
    detailedDescription:
      "Team Provision is the backbone of every event organized by NSU ACM Student Chapter. They handle all aspects of event planning, from venue setup to coordination, ensuring that every detail is perfectly executed. Their organizational skills, attention to logistics, and ability to manage multiple tasks simultaneously make them essential for the smooth operation of all chapter activities.",
    color: "from-orange-500 to-red-500",
    icon: null,
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    subExecutives: [
      { name: "Arafat Rahat Efty", image: "/teams/sub-executives/Provision/Arafat_Rahat_Efty.webp" },
      { name: "ASM Tayeeb", image: "/teams/sub-executives/Provision/ASM_Tayeeb.webp" },
      { name: "Sajid Rahman", image: "/teams/sub-executives/Provision/Sajid_Rahman_ACM.webp" },
      { name: "Adrito Bhuiyan", image: "/teams/sub-executives/Provision/Adrito_Bhuiyan.webp" },
      { name: "Ahmed As Sadik", image: "/teams/sub-executives/Provision/Ahmed_As_Sadik.webp" },
    ],
    incharges: [
      { name: "Adnan Shafi", image: "/teams/incharges/Provision/Adnan_Shafi.webp" },
      { name: "Ahmed As Sadik", image: "/teams/incharges/Provision/Ahmed_As_Sadik.webp" },
      { name: "Ahnaf Tahmid Ananto", image: "/teams/incharges/Provision/Ahnaf_Tahmid_Ananto.webp" },
      { name: "Humayra Rahman Nipa", image: "/teams/incharges/Provision/Humayra_Rahman_Nipa.webp" },
      { name: "Sanjana Absar", image: "/teams/incharges/Provision/Sanjana_Absar.webp" },
      { name: "Shafaat Bin Zaman", image: "/teams/incharges/Provision/Shafaat_Bin_Zaman.webp" },
      { name: "Shabab Sadatain Jaffry", image: "/teams/incharges/Provision/Shabab_Sadatain_Jaffry.webp" },
      { name: "Tahira Islam Ruba", image: "/teams/incharges/Provision/Tahira_Islam_Ruba.webp" },
      { name: "Zaima Hossain", image: "/teams/incharges/Provision/Zaima_Hossain.webp" },
    ],
  },
  "team-publications": {
    name: "Team Publications",
    description: "Content writing and public speaking",
    detailedDescription:
      "Team Publications is responsible for creating compelling written content and delivering engaging presentations. They write articles, social media posts, event descriptions, and other materials that communicate the chapter's activities and achievements. Additionally, they provide skilled anchors and speakers for events, ensuring professional and engaging communication with audiences.",
    color: "from-purple-500 to-pink-500",
    icon: null,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    subExecutives: [
      { name: "Nafisa Tabassum", image: "/teams/sub-executives/Publication/Nafisa_Tabassum.webp" },
      { name: "Raisa Zahin", image: "/teams/sub-executives/Publication/Raisa_Zahin.webp" },
    ],
    incharges: [
      { name: "Tasmia Ferdous", image: "/teams/incharges/Publication/Tasmia_Ferdous.webp" },
      { name: "Ilhum Rahman Pushpita", image: "/teams/incharges/Publication/Ilhum_Rahman_Pushpita.webp" },
      { name: "Abdullah Nur Ifaz", image: "/teams/incharges/Publication/Abdullah_Nur_Ifaz.webp" },
      { name: "Aisha Naziha", image: "/teams/incharges/Publication/Aisha_Naziha.webp" },
    ],
  },
  "web-group": {
    name: "Web Group",
    description: "Website development and maintenance",
    detailedDescription:
      "The Web Group is responsible for developing, maintaining, and updating the NSU ACM Student Chapter website. They ensure that the website is user-friendly, visually appealing, and up-to-date with the latest information about events, teams, and activities. Their technical expertise keeps the chapter's digital presence strong and accessible.",
    color: "from-indigo-500 to-purple-500",
    icon: null,
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
    coordinators: [
      { name: "Arefin Amin", image: "/teams/coordinators/Web/Arefin_Amin.webp" },
      { name: "Hossain Ahmmed Taufiq", image: "/teams/coordinators/Web/Hossain_Ahmmed_Taufiq.webp" },
    ],
    moderators: [
      { name: "Tahminuzzaman Nahian", image: "/teams/moderators/Web/Tahminuzzaman_Nahian.webp" },
      { name: "Saif Mohammed", image: "/teams/moderators/Web/Saif_Mohammed.webp" },
      { name: "Aisha Naziha", image: "/teams/moderators/Web/Aisha_Naziha.webp" },
    ],
  },
  "admin-group": {
    name: "Admin Group",
    description: "Administrative support and coordination",
    detailedDescription:
      "The Admin Group provides essential administrative support to ensure smooth operations across all chapter activities. They handle documentation, record-keeping, member management, and coordination between different teams. Their organizational skills and attention to detail are crucial for maintaining efficiency and professionalism in all chapter operations.",
    color: "from-slate-500 to-gray-500",
    icon: null,
    gradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20",
    coordinators: [
      { name: "Shafaat Bin Zaman", image: "/teams/coordinators/Admin/Shafaat_Bin_Zaman.webp" },
      { name: "Adrito Bhuiyan", image: "/teams/coordinators/Admin/Adrito_Bhuiyan.webp" },
    ],
    moderators: [
      { name: "Rodela Chowdhury", image: "/teams/moderators/Admin/Rodela_Chowdhury.webp" },
      { name: "Shabab Sadatain Jaffry", image: "/teams/moderators/Admin/Shabab_Sadatain_Jaffry.webp" },
    ],
  },
  "design-decor-group": {
    name: "Design & Decor Group",
    description: "Event decoration and visual design",
    detailedDescription:
      "The Design & Decor Group transforms event spaces into visually stunning environments. They handle event decoration, stage design, and visual aesthetics for all chapter events. Their creative vision and attention to detail ensure that every event has a professional and memorable atmosphere that enhances the overall experience for participants and attendees.",
    color: "from-pink-500 to-rose-500",
    icon: null,
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
    coordinators: [
      { name: "Rafia Ferdous Duti", image: "/teams/coordinators/Design/Rafia_Ferdous_Duti.webp" },
      { name: "Afia Zaheen", image: "/teams/coordinators/Design/Afia_Zaheen.webp" },
    ],
    moderators: [
      { name: "Esrat Smriti", image: "/teams/moderators/Design/Esrat_Smriti.webp" },
      { name: "Nafisa Tasneem", image: "/teams/moderators/Design/Nafisa_Tasneem.webp" },
      { name: "Raisa Zahin", image: "/teams/moderators/Design/raisa_zahin.webp" },
    ],
  },
  "research-development-group": {
    name: "Research & Development Group",
    description: "Technical research and innovation projects",
    detailedDescription:
      "The Research & Development Group focuses on technical innovation and research initiatives. They work on cutting-edge projects, explore new technologies, and contribute to the advancement of computing knowledge. Their work helps position NSU ACM Student Chapter as a leader in technical innovation and provides valuable learning opportunities for members interested in research and development.",
    color: "from-green-500 to-emerald-500",
    icon: null,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    coordinators: [
      { name: "Al Mustafiz Bappy", image: "/teams/coordinators/R&D/Al_Mustafiz_Bappy.webp" },
      { name: "Fatema Tabassum Elma", image: "/teams/coordinators/R&D/Fatema_Tabassum_Elma.webp" },
      { name: "Saif Mohammed", image: "/teams/coordinators/R&D/Saif_Mohammed.webp" },
    ],
    moderators: [
      { name: "Arefin Amin", image: "/teams/moderators/Research/Arefin_Amin.webp" },
      { name: "Hossain Ahmmed Taufiq", image: "/teams/moderators/Research/Hossain_Ahmmed_Taufiq.webp" },
    ],
  },
  "cultural-group": {
    name: "Cultural Group",
    description: "Cultural events and activities",
    detailedDescription:
      "The Cultural Group organizes and manages cultural events and activities that celebrate diversity and creativity. They plan cultural programs, performances, and activities that bring members together and create a vibrant, inclusive community. Their work ensures that NSU ACM Student Chapter is not just about technology, but also about building a strong, culturally rich community.",
    color: "from-yellow-500 to-orange-500",
    icon: null,
    gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
    coordinators: [
      { name: "Humayra Rahman Nipa", image: "/teams/coordinators/Cultural/Humayra_Rahman_Nipa.webp" },
      { name: "Sheikh Musfika Lowrin", image: "/teams/coordinators/Cultural/Sheikh_Musfika_Lowrin.webp" },
      { name: "Saif Ahmed", image: "/teams/coordinators/Cultural/Saif_Ahmed.webp" },
      { name: "Shafaat Bin Zaman", image: "/teams/coordinators/Cultural/Shafaat_Bin_Zaman.webp" },
    ],
    moderators: [
      { name: "Raisa Zahin", image: "/teams/moderators/Cultural/raisa_zahin.webp" },
      { name: "Jukta Bhowmik", image: "/teams/moderators/Cultural/Jukta_Bhowmik.webp" },
    ],
  },
  "media-documentation-group": {
    name: "Media and Documentation Group",
    description: "Event documentation and media production",
    detailedDescription:
      "The Media and Documentation Group captures and documents all chapter events and activities. They create high-quality photos and videos that showcase the chapter's work, preserve memories, and create promotional content. Their visual storytelling skills help communicate the impact and value of NSU ACM Student Chapter's activities to a wider audience.",
    color: "from-cyan-500 to-blue-500",
    icon: null,
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
    coordinators: [
      { name: "Khondker Tamzidur Rahman", image: "/teams/coordinators/M&D/Khondker_Tamzidur_Rahman.webp" },
      { name: "Albid Nawar", image: "/teams/coordinators/M&D/Albid_Nawar.webp" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(teamsData).map((slug) => ({
    slug,
  }));
}

export default function TeamDetailPage(props: { params: { slug: string } }) {
  const { params } = props;
  // Normalize slug to be extra-safe (handles accidental trailing slashes, encoding issues, etc.)
  const normalizedSlug = params?.slug
    ? decodeURIComponent(params.slug).replace(/\/+$/, "")
    : "";
  const team = teamsData[normalizedSlug];

  if (!team) {
    const availableSlugs = Object.keys(teamsData);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 sm:pt-20 md:pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Team Not Found</h1>
          <p className="text-slate-300 text-sm mb-2">
            Debug info (only in dev): slug = <code>{String(params.slug)}</code>, normalizedSlug ={" "}
            <code>{normalizedSlug}</code>
          </p>
          <p className="text-slate-400 text-xs mb-4">
            Available slugs: {availableSlugs.join(", ")}
          </p>
          <Link href="/our-team" className="text-blue-400 hover:text-blue-300">
            Return to Our Team
          </Link>
        </div>
      </div>
    );
  }

  return <TeamDetailClient slug={params.slug} team={team} />;
}



