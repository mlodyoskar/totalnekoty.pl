import { Article } from "./getAllArticles";

const GetArticleBySlug = (slug: string) => `
query GetAcrticleBySlug {
    articles(filters: { slug: { eq: "${slug}" } }) {
        data {
            id
            attributes {
                Title
                Date
                Short_decsription
                Content
                Thumbnail {
                    data {
                        id
                        attributes {
                            name
                            height
                            width
                            url
                            previewUrl
                        }
                    }
                }
                author {
                    data {
                        id
                        attributes {
                            Name
                            Description
                            Avatar {
                                data {
                                    id
                                    attributes {
                                        name
                                        alternativeText
                                        width
                                        height
                                        url
                                        previewUrl
                                        size
                                    }
                                }
                            }
                            slug
                        }
                    }
                }
                slug
            }
        }
    }
}`;

const fetchArticleBySlug = async (slug: string) => {
 const query = GetArticleBySlug(slug);
 const res = await fetch(`${process.env.STRAPI_CMS_URL}`, {
  cache: "force-cache",
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${process.env.STRAPI_CMS_TOKEN}`,
  },
  body: JSON.stringify({
   query: query,
  }),
 });
 const data = await res.json();
 return data.data.articles as { data: Article[] };
};

export const getArticleBySlug = async (slug: string) => {
 const articles = await fetchArticleBySlug(slug);
 const article = articles.data[0];

 return {
  id: article.id,
  title: article.attributes.Title,
  slug: article.attributes.slug,
  content: article.attributes.Content,
  date: article.attributes.Date,
  shortDescription: article.attributes.Short_decsription,
  thumbnail: article.attributes.Thumbnail.data.attributes,
  author: {
   id: article.attributes.author.data.id,
   name: article.attributes.author.data.attributes.Name,
   description: article.attributes.author.data.attributes.Description,
   avatar: article.attributes.author.data.attributes.Avatar.data.attributes,
   slug: article.attributes.author.data.attributes.slug,
  },
 };
};
