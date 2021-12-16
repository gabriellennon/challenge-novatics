import { 
    ContainerCard, 
    ImageCard,
    NumberPokemon,
    InfosPokemon,
    NamePokemon,
    Tags,
    TagPokemon,
} from "./styles";

export function Card(){
    return (
        <>
            <ContainerCard>
                <ImageCard>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/359.png" alt="Pokemon Image" />
                </ImageCard>
                <NumberPokemon>#001</NumberPokemon>
                <InfosPokemon>
                    <NamePokemon>Bulbasaur</NamePokemon>
                    <Tags>
                        <TagPokemon>Grass</TagPokemon>
                        <TagPokemon>Grass</TagPokemon>
                    </Tags>

                </InfosPokemon>
            </ContainerCard>
        </>
    );
}