<script lang="ts">
  import Generic from 'src/generic/Generic.svelte'

  import { initClient } from '@urql/svelte'

  initClient({
    url: 'https://crisp-mantis-27.hasura.app/v1/graphql',
    fetchOptions: () => ({
      headers: { 'x-hasura-admin-secret': 'z4KVqdafxRqAnS4' },
    }),
  })
</script>

<Generic kind="button" />
<Generic kind="renderer" />
