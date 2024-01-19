import { Button } from "@/components/ui/button";
import { DeleteProject } from "./settings/delete-project";
import { InviteTeamMember } from "./settings/invite-team-member";

export function Settings() {
  return (
    <>
      <div className="">
        <h3>Usage</h3>
      </div>
      <div className="">
        <h3>Invite a team member</h3>
        <InviteTeamMember />
      </div>
      <div className="">
        <label htmlFor="">Danger</label>
        <DeleteProject />
      </div>
    </>
  );
}
