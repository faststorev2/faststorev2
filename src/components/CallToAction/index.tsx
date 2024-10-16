import React from "react";
import { useSearchPage } from "@faststore/core"
import { GET_POKEMON } from "../../gqlThirdParty/getPokemon";
import { useLazyQuery } from "../../hooks/useLazyQuery";
import { useQuery } from "../../hooks/useQuery";
import styles from './styles.module.scss'

export interface CallToActionProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export function CallToAction(props: CallToActionProps) {
  // const { data: pokemonQuery } =
  //   useQuery<PokemonResponse>(GET_POKEMON, {
  //     name: "pikachu",
  //   });

  const [getPokemon, { data }] =
    useLazyQuery<PokemonResponse>(GET_POKEMON, {
      name: "",
    });

  async function handlePokemon() {
    getPokemon({
      name: "pikachu",
    })
  }

  const { data: pokemonData } =
    useQuery<PokemonResponse>(GET_POKEMON, {
      name: "pikachu",
    });


  const contextUseSearch = useSearchPage()

  console.log("useQuery", pokemonData)
  console.log("contextUseSearch", contextUseSearch)
  console.log("useLazyQuery", data)

  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <a href={props.link.url}>{props.link.text}</a>
      </div>
      <button
        className={styles.button}
        onClick={handlePokemon}
      >
        UseLazyQuery
      </button>
    </section>
  );
}