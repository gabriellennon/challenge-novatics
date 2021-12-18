import { useEffect, useState } from 'react';
import searchSvg from '../../assets/icons/search.svg';
import { Card } from '../../components/Card';
import { api } from '../../services/api';

import { 
    Filters, 
    Container, 
    ContainerCards,
    SelectFilter,
} from "./styles";
interface PokemonDataModel {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
}

export function Home() {
    const [pokemonsData, setPokemonsData] = useState<PokemonDataModel[]>([]);
    
    useEffect(() => {
        api.get('pokedex.json')
        .then(response => setPokemonsData(response.data.pokemon))
    },  []);

    console.log(pokemonsData);

    return (
        <>
            <Container>
                <Filters>
                    <input type="text" name="search" id="search" placeholder="Digite nome ou número"/>
                    <button>
                        <img src={searchSvg} alt="Ícone de pesquisar" />
                    </button>
                </Filters>
                <SelectFilter>
                    <select name="sort" id="sort">
                        <option value="">Ordenar por...</option>
                    </select>
                </SelectFilter>
                <ContainerCards>
                    {pokemonsData.map(data => {
                        return (
                            <Card 
                                id={data.id}
                                image={data.img}
                                numberPokemon={data.num}
                                namePokemon={data.name}
                                tagPokemon={data.type}
                            />
                        )
                    })}
                </ContainerCards>
            </Container>
        </>
    );
}