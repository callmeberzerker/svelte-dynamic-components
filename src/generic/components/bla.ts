import { gql } from '@urql/svelte'

export const bla = () => {
  return gql`
    {
      author(where: { _or: [{ first_name: { _ilike: "Spas%" } }, { last_name: { _like: "Spas%" } }] }) {
        id
      }
    }
  `
}
