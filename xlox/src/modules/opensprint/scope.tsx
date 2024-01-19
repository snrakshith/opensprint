import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GlobalScope,
  UIUXScope,
  FrontendScope,
  BackendScope,
  QAScope,
  InfraScope,
} from "./scope-templates";

export function Scope() {
  return (
    <>
      <Tabs defaultValue="1" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="1">Global Scope</TabsTrigger>
          <TabsTrigger value="2">Frontend Scope</TabsTrigger>
          <TabsTrigger value="3">Backend Scope</TabsTrigger>
          <TabsTrigger value="4">UI/UX Scope</TabsTrigger>
          <TabsTrigger value="5">Infra Scope</TabsTrigger>
          <TabsTrigger value="6">QA Scope</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <GlobalScope />
        </TabsContent>
        <TabsContent value="2">
          {/* <h1 className="text-4xl font-bold">Frontend Scope</h1> */}
          <FrontendScope />
        </TabsContent>
        <TabsContent value="3">
          <BackendScope />
        </TabsContent>
        <TabsContent value="4">
          <UIUXScope />
        </TabsContent>
        <TabsContent value="5">
          <InfraScope />
        </TabsContent>
        <TabsContent value="6">
          <QAScope />
        </TabsContent>
      </Tabs>
    </>
  );
}
