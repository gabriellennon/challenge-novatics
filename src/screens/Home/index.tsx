import { FormEvent, useEffect, useState } from 'react';
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
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState('');
    
    useEffect(() => {
        api.get('pokedex.json')
        .then(response => setPokemonsData(response.data.pokemon))
    },  []);

    const searchPokemon = pokemonsData.filter((pokemon) => pokemon.name.toLowerCase().startsWith(search.toLowerCase()) || pokemon.num.startsWith(search))

    function sortFilter(event: string){
        if(event === 'a'){
            console.log('a')
        } else {
            console.log('b')
        }
    }

    return (
        <>
            <Container>
                <Filters>
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Digite nome ou número"
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                    />
                    <button>
                        <img src={searchSvg} alt="Ícone de pesquisar" />
                    </button>
                </Filters>
                <SelectFilter>
                    <select name="sort" id="sort" value={select} onChange={event => sortFilter(event.target.value)}>
                        <option value="">Ordenar por...</option>
                        <option value="a">A-Z</option>
                        <option value="z">Z-A</option>
                    </select>
                </SelectFilter>
                <ContainerCards>
                    {searchPokemon.map(data => {
                        return (
                            <Card 
                                key={data.id}
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