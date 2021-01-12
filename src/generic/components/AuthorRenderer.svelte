<script lang="ts">
  import { operationStore, query, gql } from '@urql/svelte'

  const books = operationStore(
    gql`
      {
        author(where: { _or: [{ first_name: { _ilike: "Spas%" } }, { last_name: { _like: "Spas%" } }] }) {
          id
        }
      }
    `,
  )
  query(books)
</script>
