## Introduction

Thank you for taking the time to complete our assessment for the Front End Developer role. This task is designed to give you a taste to what day-to-day work would be like at Studio Noon whilst testing your development skills and problem-solving capability which are relevant to the role.

### The structure of this assessment

**Coding assessment** – 60 mins

The task is structured for you to succeed and achievable in the time allotted, but if you can’t achieve some areas please try and complete what you can. If you do get stuck, particularly with setup, we will be around to answer any questions (please email [hello@noon.studio](mailto:hello@noon.studio)).

**Code review** – 15 mins

Immediately following the assessment, you will discuss your assessment with Alex, lead developer at Studio Noon. You will be encouraged to walk through your process and code review, discussing any areas you found difficult.

### Next steps

Following the assessment, we will review your code and discussion and successful candidates will be taken through to an interview. If you are not selected to progress for an interview, we will provide feedback, if requested.

---

## Coding assessment specification

We are looking for you to develop a homepage article archive and article page on Next.js, pulling the content from a GraphQL API route supplied in the code snippets below.

We have created a starter codebase shared as a zip folder which includes the skeleton for the task.

You have up to 60 mins to develop and design the pages as closely to the Figma document as possible.

- Please keep your code in the same folder structure as supplied.
- Please think about user interactions, SEO and accessibility when carrying out this exercise.

**Requirements**

- **/ (Homepage)** – Estimated 20-30 mins
  - Style the page as designed in the Figma file, including the card component.
  - Build out the load more function when there are more articles using the API route supplied (/api/articles) – we want these to load in 3 at a time.
- **/articles/[slug] (Article Page)** – Estimated 20-30 mins
  - Get page content server side and handle if the slug is not found.
  - Utilise and extend pre-made components and style accordingly.
  - Styled as designed in the Figma file.

**Tech specification**

- Style using Tailwind
- Next.js 15.0
- GraphQL (API route supplied)

### Getting started

Get started by reviewing the Figma design (link below) and creating a GitHub repository using the files provided in the zip folder.

[\*\*Figma link](https://www.figma.com/proto/QfHqPfyf3gEeCXVxiX8oZU/Front-End-Developer-Assessment?node-id=1-1403&t=p0WurLNTtoVKsiDN-1&starting-point-node-id=1%3A1403&show-proto-sidebar=1)\*\* (try in private browsing if not loading)

This link outlines the design of the homepage and an example article page alongside a simple style guide.

You can use the sidebar to move between the _Style Guide_, _Homepage_ and _Article_ pages.

**Codebase files**

Please take the files supplied in the zip folder and create a public GitHub repository, sharing the link with us, so we are able to review before and during the code review.

## Useful Code Snippets

Below are some useful code snippets that you may need to utilise to complete the task.

```tsx
/** Local ENV**/

GRAPHQL_ENDPOINT=https://careers.noon.studio/graphql

/** GraphQL Query **/

export const getArticlesQuery = `
query ArticlesQuery($slug: ID!) {
    article(id: $slug, idType: SLUG) {
        id
        slug
        title(format: RENDERED)
        featuredImage {
            node {
                altText
                sourceUrl
                title
            }
        }
        excerpt: excerptPlainText
        editorBlocks {
            name
            ... on CoreParagraph {
                anchor
                attributes {
                    align
                    content
                }
            }
            ... on CoreHeading {
                anchor
                attributes {
                    align
                    content
                    level
                }
            }
        }
    }
}
`;
```

<aside>
❓

### Any questions?

Just let us know at [hello@noon.studio](mailto:hello@noon.studio)

</aside>
