import { auth, currentUser } from "@clerk/nextjs/server";
import type { AppRole } from "@/lib/types";

export async function getSessionRole(): Promise<AppRole> {
  try {
    const { sessionClaims } = await auth();
    return ((sessionClaims as { metadata?: { role?: AppRole } } | null | undefined)?.metadata?.role) ?? "ADMIN";
  } catch {
    return "ADMIN";
  }
}

export async function getCurrentProfile() {
  const user = await currentUser().catch(() => null);
  return {
    id: user?.id ?? "demo_user",
    name: user?.fullName ?? "Aarav Mehta",
    email: user?.primaryEmailAddress?.emailAddress ?? "owner@gymflow.ai",
    role: await getSessionRole()
  };
}

export async function requireRole(roles: AppRole[]) {
  const role = await getSessionRole();
  if (!roles.includes(role)) {
    throw new Error(`Role ${role} cannot access this resource.`);
  }
  return role;
}
