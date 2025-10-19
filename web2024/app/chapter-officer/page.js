import Executive from "@/components/home-page-sections/Executive";
import Incharge from "../../components/chapter-officer-section/Incharge";
import SubExecutive from "../../components/chapter-officer-section/SubExecutive";
import Coordinator from "../../components/chapter-officer-section/Coordinator"
import Moderator from "../../components/chapter-officer-section/Moderator"


export default function ChapterOfficer() {
  return (
    <div>
      <Executive></Executive>
      <SubExecutive></SubExecutive>
      <Coordinator></Coordinator>
      <Incharge></Incharge>
      <Moderator></Moderator>
    </div>
  );
}

