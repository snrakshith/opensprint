import { Button } from "@/components/ui/button";

export function Playground() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-5 gap-4">
        <Button>Generate Epic & description</Button>
        <Button>Generate User Stories & include</Button>
        <Button>
          Acceptance criteria, Defination of done, Defination of ready
        </Button>
        <Button>Generate Tasks</Button>
        <Button>Generate Unit tests</Button>
      </div>
    </>
  );
}
