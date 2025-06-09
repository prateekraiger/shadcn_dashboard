import React from "react";

const SearchPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <input
        type="text"
        placeholder="Search users, payments, or content..."
        className="w-full max-w-md p-2 border rounded mb-4"
      />
      <div className="text-muted-foreground">
        Type to search the dashboard data.
      </div>
    </div>
  );
};

export default SearchPage;
