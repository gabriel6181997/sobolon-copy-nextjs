import Head from "next/head";
import {MainLayout} from "src/layouts/main";
import {Top} from "src/components/top";
import {Concept} from "src/components/concept";
import {Feature} from "src/components/feature";



export default function IndexPage() {
  return (
    <MainLayout>
      <Top />
      <Concept />
      <Feature />
    </MainLayout>
  );
}

