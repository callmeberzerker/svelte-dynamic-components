<script lang="ts">
  console.log(`props are ${JSON.stringify($$props, null, 2)}`)
  import { operationStore, query as q, gql } from '@urql/svelte'

  import Query from 'graphql-query-builder'

  let authorsQueryDefinition = new Query('author', {
    where: { _or: [{ first_name: { _ilike: 'Spas%' } }, { last_name: { _like: 'Spas%' } }] },
  })
  authorsQueryDefinition.find('id', 'first_name', 'last_name')
  const generatedQuery = `{ ${authorsQueryDefinition} }`
  const authors = operationStore(generatedQuery)
  q(authors)
</script>

<div>a button</div>

{#if $authors.fetching}
  Loading...
{:else if $authors.error}
  Oh no!
  {$authors.error.message}
{:else if !$authors.data}
  No data
{:else}
  <pre>{JSON.stringify($authors.data, null, 2)}</pre>
{/if}
