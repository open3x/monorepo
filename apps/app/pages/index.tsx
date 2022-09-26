import type { NextPage } from "next";
import { hoge } from "@monorepo/hoge";
import Header from "app/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <>{hoge}</>
      <Header />
    </>
  );
};

export default Home;
