import { NextPage } from "next";
import NUCLEARPOWERSAUCE from "../components/NUCLEAR POWER SAUCE";
import { NextSeo } from "next-seo";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <NextSeo
        title="NUCLEAR POWER SAUCE"
        description="I AM QUEEN OF NUCLEAR POWER SAUCE"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https:/NUCLEARPOWERSAUCE.com",
          title: "NUCLEAR POWER SAUCE",
          description:
            "THIS IS NUCLEAR POWER SAUCE. I AM QUEEN OF NUCLEAR POWER SAUCE",
          site_name: "NUCLEAR POWER SAUCE",
        }}
      />
      <NUCLEARPOWERSAUCE />
    </main>
  );
};

export default Home;
