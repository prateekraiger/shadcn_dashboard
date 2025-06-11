import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
          <HoverCard key={user.username}>
            <HoverCardTrigger asChild>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground">
                      @{user.username}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="text-sm">
                    <span className="font-medium">Email:</span> {user.email}
                  </div>
                  <div className="text-sm flex items-center gap-2">
                    <span className="font-medium">Role:</span>
                    <Badge variant="secondary">{user.role}</Badge>
                  </div>
                  <Link
                    href={`/users/${user.username}`}
                    className="mt-2 text-primary text-sm underline"
                  >
                    View Profile
                  </Link>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@{user.username}</h4>
                  <p className="text-sm">
                    {user.name} ({user.role})
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
