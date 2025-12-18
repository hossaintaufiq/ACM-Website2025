import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function AdminGroupPage() {
  const team = teamsData["admin-group"];
  return <TeamDetailClient slug="admin-group" team={team} />;
}


