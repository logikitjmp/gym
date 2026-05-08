import { getAdminAnalytics, calculateRetentionScore } from "@/lib/services/analytics";
import { jsonResponse } from "@/lib/utils";

export async function GET() {
  const analytics = getAdminAnalytics();
  return jsonResponse({
    ...analytics,
    retentionScore: calculateRetentionScore(analytics.attendanceRate, 18, 9),
    generatedAt: new Date().toISOString()
  });
}
