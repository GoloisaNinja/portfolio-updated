import * as React from "react";
import {
  Layout,
  Hero,
  ResumeTech,
  BlogArticles,
  Projects,
} from "../components";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <ResumeTech />
      <BlogArticles />
      <Projects />
    </Layout>
  );
}
