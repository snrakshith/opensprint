"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="font-bold text-3xl md:text-6xl sm:text-5xl">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="font-medium text-base sm:text-xl md:text-2xl">
        Jotion is the connected workspace where <br />
        things happen faster
      </h3>
      <Button>
        Enter Jotion 
        <ArrowRight className="w-4 h-4 ml-2"/>
      </Button>
    </div>
  );
};

export default Heading;
