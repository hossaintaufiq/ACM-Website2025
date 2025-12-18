import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function ResearchDevelopmentGroupPage() {
  const team = teamsData["research-development-group"];
  return <TeamDetailClient slug="research-development-group" team={team} />;
}


