const GetAllArticlesQuery = `
query GetAllAcrticles {
    articles {
        data {
            id
            attributes {
                Title
                Date
                Short_decsription
                Thumbnail {
                    data {
                        id
                        attributes {
                            name
                            height
                            width
                            url
                            previewUrl
                            alternativeText
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
}
`;

export type Article = {
 id: string;
 attributes: {
  Title: string;
  Content: string;
  Date: string;
  Short_decsription: string;
  Thumbnail: {
   data: { id: string; attributes: Image };
  };
  slug: string;
  author: {
   data: {
    id: string;
    attributes: {
     Name: string;
     Description: string;
     slug: string;
     Avatar: {
      data: { id: string; attributes: Image };
     };
    };
   };
  };
 };
};

type Image = {
 id: string;
 name: string;
 alternativeText: string;
 width: number;
 height: number;
 url: string;
 previewUrl: string;
 size: number;
};

const fetchAllArticles = async () => {
 const res = await fetch(`${process.env.STRAPI_CMS_URL}`, {
  next: {
   tags: ["articles"],
   revalidate: 60,
  },
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${process.env.STRAPI_CMS_TOKEN}`,
  },
  body: JSON.stringify({
   query: GetAllArticlesQuery,
  }),
 });
 const data = await res.json();
 return data.data.articles as { data: Article[] };
};

export const getAllArticles = async () => {
 const articles = await fetchAllArticles();

 return articles.data.map((article) => {
  return {
   id: article.id,
   title: article.attributes.Title,
   slug: article.attributes.slug,
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
 });
};
