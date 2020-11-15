# Full Stack Development Intern Sample Project

This project is designed to expose you to a mix of familiar and unfamiliar technologies. It includes the following:

- Postgres database
- Hasura GraphQL server
- Docker-Compose config to run postgres and the graphql server
- Next.js application
- Material-UI
- Apollo GraphQL client
- GraphQL Codegen

You will need to make sure you have Docker installed, but _you will not need to configure any of the technologies above unless you want to_.

## Running the project

To get the project up and running, do the following:

1. Make sure you have [Docker](https://docs.docker.com/get-docker/) installed. We containerize pretty much every project we work on. Docker is a very important part of our toolset.
2. Make sure you have [Node](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/) installed.
3. Clone this repository and `cd` into the project directory.
4. Run `docker-compose up -d postgres`. This will launch a postgres database. 
5. Run `docker-compose logs -f postgres`. This will show you the logs from the postgres database. When you see a log ending in `database system is ready to accept connections` hit `ctrl + c` to stop watching the logs.
6. Run `docker-compose up -d gql`. This will create the necessary tables in the database, and spin up a GraphQL server based on [Hasura](https://hasura.io/).
7. Run `yarn install` to install all the frontend project dependencies.
8. Run `yarn dev` to get the development server up and running.
9. Visit [http://localhost:3000](http://localhost:3000) to see the a ToDo list up and running.
10. Try entering a ToDo and hitting enter.

## Development

For the most part, you should just be able to work in React. Here's a quick overview of what you might want to look at:

<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/_6r900fmMGI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

If, however, you're feeling more adventurous, take a look at the following video and use the commands below.

<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/-6yJGwgKCEI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

Watch your GraphQL code changes and generate Apollo hooks: 
`yarn gql-generate --watch`

Use the Hasura console to change the database/GraphQL API:
- Install the [Hasura CLI](https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html)
- `cd hasura`
- `hasura console --access-key password`

## What you need to do

The project is pretty open-ended: we would like you to spend _no more than 2-3 hours_ building whatever you like on top of the sample project. Here are some examples of what you could work on (but feel free to be creative and ignore these suggestions!):

- You will see that clicking on a ToDo takes you to a page that does not yet load or display the ToDo. You could work on that, if you like.
- You will notice that there is no way to mark a ToDo as completed. You could work on that.
- The ToDo object has a "Description" field that isn't used in the sample. You could work on input and display of the description.
- Anything else you can think of!

