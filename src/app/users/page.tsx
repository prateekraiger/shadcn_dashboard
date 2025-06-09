import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const users = [
  {
    username: "johndoe",
    name: "John Doe",
    email: "john.doe@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Admin",
  },
  {
    username: "janesmith",
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    role: "User",
  },
  {
    username: "bobwilliams",
    name: "Bob Williams",
    email: "bob.williams@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    role: "User",
  },
];

const UsersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card
            key={user.username}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{user.name}</CardTitle>
                <div className="text-xs text-muted-foreground">{user.role}</div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <div className="text-sm font-medium">@{user.username}</div>
              <div className="text-xs text-muted-foreground">{user.email}</div>
              <Link
                href={`/users/${user.username}`}
                className="mt-2 text-primary text-xs underline"
              >
                View Profile
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
