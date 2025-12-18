import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function CulturalGroupPage() {
  const team = teamsData["cultural-group"];
  return <TeamDetailClient slug="cultural-group" team={team} />;
}


