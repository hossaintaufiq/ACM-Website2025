import TeamDetailClient from "../TeamDetailClient";
import { teamsData } from "../teamData";

export default function MediaDocumentationGroupPage() {
  const team = teamsData["media-documentation-group"];
  return <TeamDetailClient slug="media-documentation-group" team={team} />;
}


