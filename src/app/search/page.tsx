import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SearchPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <div className="flex w-full max-w-md items-center space-x-2">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          type="text"
          placeholder="Search users, payments, or content..."
        />
        <Button type="submit">Search</Button>
      </div>
      <div className="text-muted-foreground mt-4">
        Type to search the dashboard data.
      </div>
    </div>
  );
};

export default SearchPage;
