import CardList from "@/components/CartList";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import AddLineChart from "@/components/AddLineChart";
const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Pratik</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 flex flex-col xl:flex-row gap-8 ">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* user badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/30  p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bolt mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This User has been verified by the Admin.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/30  p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bolt mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/30  p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bolt mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This User has been awarded for their contribution.
                  </p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/30  p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bolt mb-2"> Popular </h1>
                  <p className="text-sm text-muted-foreground">
                    This User has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* info badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress value={66} />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bolt">Username:</span>
                <span>pratik.dev</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bolt">Email:</span>
                <span>pratik.dev@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bolt">Phone:</span>
                <span>+91 1234567879</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bolt">Location:</span>
                <span>Earth</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bolt">Role:</span>
                <Badge>Admin</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Joined On 2025.06.06
              </p>
            </div>
          </div>

          {/* cardlist badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>

        {/* right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* user card container */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://images.pexels.com/photos/123929/pexels-photo-123929.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <AvatarFallback>PR</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Pratik.dev</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Pratik is a valued member of our platform, known for consistent
              contributions and active participation in the community. Connect
              with Pratik to collaborate on new projects or share insights.
            </p>
          </div>

          {/* chart container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            Chart
            <AddLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
