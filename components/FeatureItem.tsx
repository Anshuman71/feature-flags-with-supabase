import { useState } from "react";
import { supabaseClient } from "../constants";

export type Feature = {
  featureName: string;
  enabled: boolean;
};

export function FeatureItem({ featureName, enabled }: Feature) {
  const [localEnabled, setEnabled] = useState(enabled);
  const [loading, setLoading] = useState(false);
  async function toggleFeatureFlag() {
    setLoading(true);
    const { data } = await supabaseClient
      .from("feature-flags")
      .update({ enabled: !localEnabled })
      .match({ featureName });
    setLoading(false);
    setEnabled(!localEnabled);
  }
  return (
    <li>
      <input
        type={"checkbox"}
        className={"mr-2"}
        defaultChecked={enabled}
        disabled={loading}
        onChange={toggleFeatureFlag}
      />
      <span>{featureName}</span>
    </li>
  );
}
