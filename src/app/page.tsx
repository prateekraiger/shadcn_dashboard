import React from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="destructive">
        Click Me
        <CirclePlus />
      </Button>
    </div>
  );
};

export default HomePage;
