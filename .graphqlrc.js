module.exports = {
  schema: ['schema.graphql'],
  extensions: {
    endpoints: {
      default: {
        url: 'https://crisp-mantis-27.hasura.app/v1/graphql',
        headers: { 'x-hasura-admin-secret': 'z4KVqdafxRqAnS4' },
      },
    },
  },
  documents: '**/*.{graphql,tsx,jsx,ts,js,svelte}',
}
