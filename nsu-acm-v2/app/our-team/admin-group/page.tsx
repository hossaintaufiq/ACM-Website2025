import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function AdminGroupPage() {
  const team = teamsData["admin-group"];
  return <TeamDetailClient slug="admin-group" team={team} />;
}


