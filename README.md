# fetchql

A GraphQL wrapper for the browsers native fetch.

Example:

```js
fetchql(
    "https://rickandmortyapi.com/graphql/",
    gql`
      query CHARACTERS($name: String!) {
        characters(filter: { name: $name }) {
          results {
            id
            name
            status
            species
            type
            origin {
              name
            }
            image
          }
        }
      }
    `,
    {
      name,
    }
  ).then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
```