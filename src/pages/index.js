import React, { useEffect } from "react";
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
  useEffect(() => {
    if (typeof window !== undefined) {
      const blogScrollTarget = document.getElementById("blogScrollTarget");
      const fadeArticles = document.querySelectorAll("#fade-articles");

      const returnLoopCallback = (elements, classAsString) => {
        return function (entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (classAsString === "animate") {
                elements.forEach(el => {
                  el?.classList.add("animate");
                });
              } else {
                elements.forEach(el => {
                  el?.classList.add("fade");
                });
              }
            }
          });
        };
      };

      const createObserverFunction = (elem, callback, options) => {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(elem);
        return observer;
      };
      createObserverFunction(
        blogScrollTarget,
        returnLoopCallback(fadeArticles, "fade")
      );
    }
  }, []);
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
