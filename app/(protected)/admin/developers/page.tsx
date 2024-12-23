'use client'

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/context";

export default function Page() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <h1>Developers</h1>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}