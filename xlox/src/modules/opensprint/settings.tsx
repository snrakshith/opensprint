import { Button } from "@/components/ui/button";

export function Settings() {
  return (
    <>
      <div className="">
        <h3>Usage</h3>
      </div>
      <div className="">
        <h3>Invite a team member</h3>
      </div>
      <div className="">
        <label htmlFor="">Danger</label>
        <Button variant="destructive">Delete Project</Button>
      </div>
    </>
  );
}
