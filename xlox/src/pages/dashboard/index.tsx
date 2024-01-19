import { DashboardModule } from "@/modules/dashboard";
import { DocsStringModule } from "@/modules/docstring";
import { OpenSprintModule } from "@/modules/opensprint";

export function Dashboard() {
  return (
    <div className="m-5 p-5 flex flex-col w-full">
      {/* <DashboardModule /> */}
      {/* <DocsStringModule /> */}
      <OpenSprintModule />
    </div>
  );
}
