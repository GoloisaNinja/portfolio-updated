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
        title={"Jon Collins Developer Portfolio"}
        description={"Jon Collins Dev Homepage"}
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
