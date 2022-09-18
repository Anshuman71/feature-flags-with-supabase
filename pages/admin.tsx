import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { supabaseClient } from "../constants";
import { Feature, FeatureItem } from "../components/FeatureItem";
import Head from "next/head";

const Admin: NextPage = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  useEffect(() => {
    supabaseClient
      .from("feature-flags")
      .select("featureName, enabled")
      .then(({ data }: any) => {
        setFeatures(data);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Admin | Feature flags with Supabase</title>
      </Head>

      <h1 className={"text-3xl mb-10"}>Feature flags</h1>
      <ul className={""}>
        {features.map((feature: Feature) => (
          <FeatureItem key={feature.featureName} {...feature} />
        ))}
      </ul>
    </>
  );
};

export default Admin;
