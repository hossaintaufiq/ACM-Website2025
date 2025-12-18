import TeamDetailClient from "../[slug]/TeamDetailClient";
import { teamsData } from "../[slug]/page";

export default function MediaDocumentationGroupPage() {
  const team = teamsData["media-documentation-group"];
  return <TeamDetailClient slug="media-documentation-group" team={team} />;
}


