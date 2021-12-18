import { 
    ContainerCard, 
    ImageCard,
    NumberPokemon,
    InfosPokemon,
    NamePokemon,
    Tags,
    TagPokemon,
} from "./styles";

interface CardProps{
    id: number;
    image: string;
    numberPokemon: string;
    namePokemon: string;
    tagPokemon: string[];
}

export function Card({
    id,
    image,
    numberPokemon,
    namePokemon,
    tagPokemon
}: CardProps){
    return (
        <>
            <ContainerCard>
                <ImageCard>
                    <img src={image} alt="Pokemon Image" />
                </ImageCard>
                <NumberPokemon>#{numberPokemon}</NumberPokemon>
                <InfosPokemon>
                    <NamePokemon>{namePokemon}</NamePokemon>
                    <Tags>
                    {tagPokemon.map(tag => {
                        return (
                            <TagPokemon>{tag}</TagPokemon>
                        )
                    })}
                    </Tags>
                </InfosPokemon>
            </ContainerCard>
        </>
    );
}