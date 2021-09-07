import React from "react";
import {
  Layout,
  Hero,
  ResumeTech,
  BlogArticles,
  Projects,
  Contact,
  Seo,
} from "../components";

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title={"Homepage"}
        description={"Jon Collins Developer Portfolio Homepage"}
        lang={"en"}
      />
      <Hero />
      <ResumeTech />
      <BlogArticles />
      <Projects />
      <Contact />
    </Layout>
  );
}
