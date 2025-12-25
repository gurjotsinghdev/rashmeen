import { MetadataRoute } from "next";
import { getBlogPosts } from "./lib/posts";
import { metaData } from "./config";
import { caseStudies } from "./case-studies/data";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs = getBlogPosts().map((post) => ({
    url: `${BaseUrl}blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let caseStudyRoutes = caseStudies.map((study) => ({
    url: `${BaseUrl}case-studies/${study.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  let routes = ["", "blog", "projects", "photos"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...caseStudyRoutes, ...blogs];
}
