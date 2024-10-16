import { gql } from '@faststore/core/api'

export const GET_POKEMON = gql(`
  query GET_POKEMON($name: String) {
    getPokemon(name: $name) {
      url
    }
  }
`)

