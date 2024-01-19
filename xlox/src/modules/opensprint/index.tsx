import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scope } from "./scope";
import { Settings } from "./settings";
import { Playground } from "./playground";

// https://www.npmjs.com/package/react-markdown
// https://www.npmjs.com/package/marked
export function OpenSprintModule() {
  return (
    <>
      <Tabs defaultValue="scope" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="playground">Playground</TabsTrigger>
          <TabsTrigger value="scope">Scope</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="playground">
          <Playground />
        </TabsContent>
        <TabsContent value="scope">
          <Scope />
        </TabsContent>
        <TabsContent value="settings">
          <Settings />
        </TabsContent>
      </Tabs>
    </>
  );
}
