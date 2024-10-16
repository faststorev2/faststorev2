interface PokemonProps {
  name: string
};

const pokemonResolver = {
  Query: {
    getPokemon: async (_: any, data: PokemonProps) => {
      const { name } = data;

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );

        if (!response.ok) {
          throw new Error("Error while sending the message");
        }

        const responseJson = await response.json();

        return { 
          url: responseJson.species.url
         };
      } catch (error) {
        return { message: error };
      }
    },
  },
};

export default pokemonResolver;