import React from "react";

const SettingsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="space-y-4">
        <div className="bg-primary-foreground p-4 rounded">
          <h2 className="font-semibold mb-2">Profile Settings</h2>
          <div className="text-muted-foreground text-sm">
            Update your profile information, password, and preferences here.
          </div>
        </div>
        <div className="bg-primary-foreground p-4 rounded">
          <h2 className="font-semibold mb-2">Theme</h2>
          <div className="text-muted-foreground text-sm">
            Switch between light and dark mode in the top right corner.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
