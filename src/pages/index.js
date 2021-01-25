import Head from "next/head";
import {MainLayout} from "src/layouts/main";
import {Top} from "src/components/top";

export default function IndexPage() {
  return (
    <MainLayout>
      <Top />
    </MainLayout>
  );
}

