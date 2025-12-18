import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function TeamCorporatePage() {
  const team = teamsData["team-corporate"];
  return <TeamDetailClient slug="team-corporate" team={team} />;
}


