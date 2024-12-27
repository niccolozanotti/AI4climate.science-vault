---
title: GraphQL
aliases: 
date: 2024-12-27
tags: 
description:
---

Awesome resources:
- [Apollo graphQL](https://www.apollographql.com/tutorials/intro-strawberry/02-graphql-basics) explains all the basics of graphql concepts

GraphQL operations: 
- **Query** reads data; 
- **Mutation**: changes data;
- **Subscription**: listens for live, streaming data;

### Tools to build a query

- [Apollo Sandbox Explorer](https://studio.apollographql.com/sandbox/explorer?_gl=1%2A18qpk51%2A_gcl_au%2AMTk1MDE4ODEwLjE3MzUyNTIzMDA.) 


> *Schema-first design* means we'll implement the feature based on exactly which data our client application needs. Schema-first design typically involves three major steps:
> - Defining the schema: We identify which data our feature requires, and then we structure our schema to provide that data as intuitively as possible.
> - Backend implementation: We build out our GraphQL API and fetch the required data from whichever data sources contain it.
> - Frontend implementation: Our client consumes data from our GraphQL API to render its views.
> 
One of the benefits of schema-first design is that it reduces total development time by allowing frontend and backend teams to work in parallel. The frontend team can start working with mocked data as soon as the schema is defined, while the backend team develops the API based on that same schema. This isn't the only way to design a GraphQL API, but we believe it's an efficient one, so we'll use it throughout this course.