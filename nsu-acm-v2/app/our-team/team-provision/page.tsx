import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function TeamProvisionPage() {
  const team = teamsData["team-provision"];
  return <TeamDetailClient slug="team-provision" team={team} />;
}


