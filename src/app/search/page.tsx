import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const searchResults = [
  {
    id: "1",
    title: "John Doe Profile",
    description: "View details of John Doe, an admin user.",
    category: "Users",
  },
  {
    id: "2",
    title: "Payment ID: #12345",
    description: "Details for a recent payment transaction.",
    category: "Payments",
  },
  {
    id: "3",
    title: "Getting Started Guide",
    description: "A comprehensive guide for new users.",
    category: "Content",
  },
];

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

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Search Results</h2>
        {searchResults.map((result) => (
          <Card key={result.id}>
            <CardHeader>
              <CardTitle>{result.title}</CardTitle>
              <CardDescription>{result.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-sm text-muted-foreground">
                Category: {result.category}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
