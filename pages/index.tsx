import type { NextPage } from "next";
import { FeatureFlag } from "../components/FeatureFlag";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Feature flags with Supabase</title>
      </Head>
      <h1 className={"text-3xl text-center mb-10"}>
        {" "}
        Feature flags with Supabase
      </h1>
      <div
        className={"grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-6xl mx-auto"}
      >
        <FeatureFlag featureName={"red"}>
          <p
            className={
              "min-h-[300px] text-center text-xl text-white rounded-lg bg-red-700"
            }
          >
            Red box
          </p>
        </FeatureFlag>
        <FeatureFlag featureName={"blue"}>
          <p
            className={
              "min-h-[300px] text-center text-xl text-white rounded-lg bg-blue-700"
            }
          >
            Blue box
          </p>
        </FeatureFlag>
        <FeatureFlag featureName={"green"}>
          <p
            className={
              "min-h-[300px] text-center text-xl text-white rounded-lg bg-green-700"
            }
          >
            Green box
          </p>
        </FeatureFlag>
      </div>
    </>
  );
};

export default Home;
