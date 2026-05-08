import { QrCode, Search, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { members } from "@/lib/fixtures/demo";
import { enrichMember } from "@/lib/services/members";

export function MemberTable() {
  return (
    <Card id="members" className="overflow-hidden p-0">
      <div className="flex flex-col gap-4 border-b border-black/10 p-5 dark:border-white/10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-black">Member Management</h2>
          <p className="mt-1 text-sm text-black/58 dark:text-white/58">Profiles, plans, BMI, goals, trainers, and renewal risk.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="h-10 px-3" title="Search members">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="secondary" className="h-10 px-3" title="Filter members">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
          <Button className="h-10">Add member</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-black/[0.03] text-xs uppercase tracking-[0.18em] text-black/50 dark:bg-white/[0.03] dark:text-white/50">
            <tr>
              <th className="px-5 py-4">Member</th>
              <th className="px-5 py-4">Plan</th>
              <th className="px-5 py-4">Trainer</th>
              <th className="px-5 py-4">Goal</th>
              <th className="px-5 py-4">BMI</th>
              <th className="px-5 py-4">Attendance</th>
              <th className="px-5 py-4">QR ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/10 dark:divide-white/10">
            {members.map((member) => {
              const enriched = enrichMember(member);
              return (
                <tr key={member.id} className="align-middle">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xs font-black text-bone dark:bg-volt dark:text-ink">
                        {member.avatar}
                      </span>
                      <div>
                        <p className="font-bold">{member.name}</p>
                        <p className="text-xs text-black/50 dark:text-white/50">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <Badge className={member.status === "Expiring" ? "border-amber-400/30 bg-amber-400/10 text-amber-500" : ""}>{member.plan}</Badge>
                  </td>
                  <td className="px-5 py-4">{member.trainer}</td>
                  <td className="px-5 py-4">{member.goal}</td>
                  <td className="px-5 py-4">
                    <span className="font-bold">{enriched.bmi}</span>
                    <span className="ml-2 text-xs text-black/50 dark:text-white/50">{enriched.bmiCategory}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="h-2 w-28 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                      <div className="h-full rounded-full bg-volt" style={{ width: `${member.attendance}%` }} />
                    </div>
                    <span className="mt-1 block text-xs text-black/50 dark:text-white/50">{member.attendance}% this month</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 font-mono text-xs dark:bg-white/10">
                      <QrCode className="h-3.5 w-3.5" />
                      {member.id}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
