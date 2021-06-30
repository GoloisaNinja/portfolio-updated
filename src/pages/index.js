import * as React from "react";
import {
  Layout,
  Hero,
  ResumeTech,
  BlogArticles,
  Projects,
  Contact,
} from "../components";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <ResumeTech />
      <BlogArticles />
      <Projects />
      <Contact />
    </Layout>
  );
}
