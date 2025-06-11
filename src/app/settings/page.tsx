import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SettingsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="space-y-6">
        <div className="bg-primary-foreground p-4 rounded">
          <h2 className="font-semibold mb-2">Search Settings</h2>
          <div className="flex items-center space-x-2">
            <Label htmlFor="search-settings" className="sr-only">
              Search
            </Label>
            <Input
              id="search-settings"
              type="text"
              placeholder="Search settings..."
              className="w-full"
            />
          </div>
        </div>

        <div className="bg-primary-foreground p-4 rounded">
          <h2 className="font-semibold mb-2">Profile Settings</h2>
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="johndoe" />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself..." />
            </div>
            <Button className="mt-4">Save Changes</Button>
          </div>
        </div>

        <div className="bg-primary-foreground p-4 rounded">
          <h2 className="font-semibold mb-2">Notification Settings</h2>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch id="email-notifications" />
          </div>
          <div className="text-muted-foreground text-sm mt-2">
            Receive important updates and announcements via email.
          </div>
        </div>

        <div className="bg-primary-foreground p-4 rounded">
          <h2 className="font-semibold mb-2">Privacy Settings</h2>
          <RadioGroup defaultValue="public" className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="public" id="r1" />
              <Label htmlFor="r1">Public</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="friends" id="r2" />
              <Label htmlFor="r2">Friends Only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="private" id="r3" />
              <Label htmlFor="r3">Private</Label>
            </div>
          </RadioGroup>
          <div className="text-muted-foreground text-sm mt-2">
            Control who can view your profile and activities.
          </div>
        </div>

        <div className="bg-primary-foreground p-4 rounded">
          <h2 className="font-semibold mb-2">Language Preference</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
