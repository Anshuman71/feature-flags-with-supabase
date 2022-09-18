import { ReactNode, useEffect, useState } from "react";
import { supabaseClient } from "../constants";

type FeatureFlagProps = {
  featureName: string;
  children: ReactNode;
};

export function FeatureFlag({ featureName, children }: FeatureFlagProps) {
  const [enabled, setEnable] = useState(false);
  useEffect(() => {
    supabaseClient
      .from("feature-flags")
      .select("featureName, enabled")
      .eq("featureName", featureName)
      .then(({ data }: any) => {
        setEnable(data[0]?.enabled);
      });
    supabaseClient
      .channel(`feature_flag_${featureName}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "feature-flags",
          filter: `featureName=eq.${featureName}`,
        },
        (payload: any) => {
          setEnable(payload?.new?.enabled || false);
        }
      )
      .subscribe();
  }, []);
  if (enabled) {
    return <>{children}</>;
  }
  return <></>;
}
