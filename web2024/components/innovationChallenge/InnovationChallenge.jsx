import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function InnovationChallenge() {
  return (
    <main className="min-h-screen bg-[url('/ic14bg.png')] bg-cover bg-fixed">
      <header className="bg-black/20 text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-center md:text-right ">
              <h6 className="text-sm">NSU ACM SC</h6>
              <h2 className="text-2xl font-bold">INNOVATION</h2>
              <h2 className="text-xl">CHALLENGE</h2>
              <p className="text-sm">SEASON</p>
            </div>
            <div className="text-8xl font-bold">14</div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-sm md:text-base">Department of Electrical &</p>
              <p className="text-sm md:text-base">Computer Engineering</p>
            </div>
            <div class="border-2 py-[8%]"></div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Image
                src="/img/nsu logo.png"
                alt="NSU Logo"
                width={60}
                height={60}
              />
              <Image
                src="/img/ACM_Logo_22.png"
                alt="ACM Logo"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto text-white py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Image
            src="/IC logo-01.png"
            alt="IC14 Logo"
            width={300}
            height={300}
            className="mb-8 md:mb-0 w-[60%]"
          />
          <div className="space-y-4">
            <EventInfo
              icon={<CalendarDays className="mr-2" />}
              text="23th MAY, 2024"
            />
            <EventInfo
              icon={<Clock className="mr-2" />}
              text="9:00 AM - 5:00 PM"
            />
            <EventInfo
              icon={<MapPin className="mr-2" />}
              text="NSU PLAZA AREA"
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Good Times Rg', sans-serif" }}
          >
            NSU ACM SC
          </h2>
          <h1
            className="text-5xl md:text-6xl font-bold mb-8"
            style={{ fontFamily: "'Good Times Rg', sans-serif" }}
          >
            Innovation Challenge Season{" "}
            <span className="text-6xl md:text-7xl">14</span>
          </h1>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="https://forms.gle/1ZqEctEXXLfMBCbHA" target="_blank">
                Register
              </Link>
            </Button>
            <Button asChild>
              <Link
                href="https://docs.google.com/document/d/1xPRthbNS8butF9EktN0q4oW-IfIa1oLCC35HxBZrXd0/edit"
                target="_blank"
              >
                Rule Book
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <SectionTitle>INTRODUCTION</SectionTitle>
          <p className="text-center mt-8">
            NSU ACM SC is bringing back one of the most incredible and
            awe-inspiring events of the year, Innovation Challenge season 14.
            The time has come again to exhibit the upshot of your hard work and
            dedication for two consecutive semesters. Now it's time to present
            them in front of a distinguished panel of esteemed judges, industry
            professionals, and esteemed faculty members who have expertise in
            the respective fields.
            {/* ... (rest of the introduction text) ... */}
          </p>
        </div>
      </section>

      <section className=" py-16">
        <div className="container mx-auto">
          <SectionTitle>THIS SEASON'S ATTRACTION</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <AttractionCard number="01" text="More Industry visits" />
            <AttractionCard number="02" text="New Attractive Awards" />
            <AttractionCard number="03" text="More Networking chances" />
            <AttractionCard number="04" text="Better Media Coverages" />
          </div>
        </div>
      </section>

      <section className=" py-16">
        <div className="container mx-auto">
          <SectionTitle>REVIEW PROCESS</SectionTitle>
          <div className="mt-8 space-y-4">
            <p className="font-bold">
              The 14th installment of the Innovation Challenge will be comprised
              of two parts:
            </p>
            <p>
              <strong>1st Round (Online Judging):</strong> All IC14 participants
              are required to complete the provided forms thoroughly. The
              concept's productivity, stability, and originality are
              requirements to evaluate the projects appropriately. The specified
              summary template is to be followed. The best teams will be chosen
              from them.
            </p>
            <p>
              <strong>Final Round (In-person Judging):</strong> On the day of
              the Innovation Challenge, highly regarded academics, business
              leaders, and industry representatives will assess the project's
              relevance, strength, visual appeal and accessibility to the
              general public. The top projects will be chosen as winners after
              careful evaluation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto ">
          <SectionTitle>PRIZE MONEY</SectionTitle>
          <Card className="mt-8 max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-center mb-4">
                General Category
              </h3>
              <ul className="space-y-2">
                <li>The Champion - 10K BDT</li>
                <li>
                  1<sup>st</sup> Runner Up - 7K BDT
                </li>
                <li>
                  2<sup>nd</sup> Runner Up - 5K BDT
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className=" py-16">
        <div className="container mx-auto">
          <SectionTitle>SELECTED PROJECTS</SectionTitle>
          <Table className="mt-8">
            <TableBody className="">
              {selectedProjects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell className="text-lg">{project}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
}

function EventInfo({ icon, text }) {
  return (
    <div className="flex items-center bg-black/50 p-3 rounded-lg">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl font-bold text-center bg-primary text-primary-foreground py-2 px-6 rounded-full inline-block">
      {children}
    </h2>
  );
}

function AttractionCard({ number, text }) {
  return (
    <Card>
      <CardContent className="p-6">
        <span className="text-4xl font-bold text-primary">{number}</span>
        <p className="mt-2">{text}</p>
      </CardContent>
    </Card>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary"
    >
      <span className={`bx bxl-${icon} text-2xl`}></span>
    </Link>
  );
}

const selectedProjects = [
  "Diffusion-based Latent Image Generation with Label Conditioning: A Score-Based Approach",
  "SMART EYE-WEAR FOR VISUALLY IMPAIRED PEOPLE - A Smart Glass to Help Visually Impaired People",
  "''RoboMultiServe'' Integrating Pick-and-Place, Restaurant cleaning Automation, Fire Rescues, and Mica Industry Solutions with Robotics",
  "Vigilante - AI Powered Security Surveillance And Robot System For Violence Detection",
  "Digitalization of an Analog Kymograph Machine",
  "Answer Agnostic Question Generation in Bangla Language using Transformer model",
  "CSFL: Cosine Similarity-Based Filtering Algorithm for Downsampling Big Datasets and RPSC: Reversed Pyramid Super Classifier for Artificial General Intelligence",
  "Eye Disease Classification using Deep Learning and Explainable AI",
  "Secure Image Transmission Using Quantum Key Distribution & Chaotic System",
  "Hand-Tracking with Depth - Bangla Character Recognition with Hand Gesture",
];
