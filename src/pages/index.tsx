import Head from "next/head";
import {MainLayout} from "src/layouts/main";
import {Top} from "src/components/top";
import {Concept} from "src/components/concept";
import {Feature} from "src/components/feature";
import {About} from "src/components/about";
import {Products} from "src/components/products";
import {News} from "src/components/news";
import {Concept2} from "src/components/concept2";
import {Contact} from "src/components/contact";

export default function IndexPage(): JSX.Element{
  return (
    <MainLayout
      title={`sobolon - 海洋マイクロプラスチックを素材とした ハンドメイドアクセサリー`}
      description={`sobolonはあらゆる女性に向けて、海洋マイクロプラスチックを素材としたハンドメイドアクセサリーを販売しているオンラインショップです`}
    >
      <Top />
      <Concept />
      <Feature />
      <About />
      <Products />
      <News />
      <Concept2 />
      <Contact />
    </MainLayout>
  );
}

