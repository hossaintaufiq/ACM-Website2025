import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function TeamPublicationsPage() {
  const team = teamsData["team-publications"];
  return <TeamDetailClient slug="team-publications" team={team} />;
}


