import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function WebGroupPage() {
  const team = teamsData["web-group"];
  return <TeamDetailClient slug="web-group" team={team} />;
}


