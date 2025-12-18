import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function ResearchDevelopmentGroupPage() {
  const team = teamsData["research-development-group"];
  return <TeamDetailClient slug="research-development-group" team={team} />;
}


