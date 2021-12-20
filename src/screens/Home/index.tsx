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
    const [filters, setFiters] = useState<PokemonDataModel[]>([]);
    const [forms, setForms] = useState({
        search: '', 
        order:  ''
    });
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(true);
    
    useEffect(() => {
        getData();
    },  []);

    useEffect(() => {
        filter();
    },  [forms, pokemonsData]);

    function getData() {
        setLoading(true);
        api.get('pokedex.json').then(response => {
            setPokemonsData(response.data.pokemon);
            setLoading(false);
        }, error => {
            setLoading(false)
        });
    }

    function filter() {
        let result = pokemonsData;

        if(forms.search !== '') {
            result = result.filter((pokemon) => (pokemon.name.toLowerCase().indexOf(forms.search.toLowerCase()) !==-1) || (pokemon.num.indexOf(forms.search) !== -1))
        }

        if(forms.order !== '') {
            
            if (forms.order == 'a') {
                
                const reordernar = result.sort(function (a, b) {
                    var nameA = a.name;
                    var nameB = b.name;
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
            
                    return 0;
                  });

                result = reordernar
              } else {
                const reordernar = result.sort(function (a, b) {
                    var nameA = a.name;
                    var nameB = b.name;
                    if (nameB < nameA) {
                      return -1;
                    }
                    if (nameB > nameA) {
                      return 1;
                    }
            
                    return 0;
                  });

                result = reordernar
            }
        }

        setFiters(result);
        setRefresh(!refresh);
    }

    if(loading){
        return (
            <div>
                loading
            </div>
        )
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
                        value={forms.search}
                        onChange={event => setForms({...forms, search: event.target.value})}
                    />
                    {/* <button>
                        <img src={searchSvg} alt="Ícone de pesquisar" />
                    </button> */}
                </Filters>
                <SelectFilter>
                    <select name="sort" id="sort" value={forms.order} onChange={event => setForms({...forms, order: event.target.value})}>
                        <option value="">Ordenar por...</option>
                        <option value="a">A-Z</option>
                        <option value="z">Z-A</option>
                    </select>
                </SelectFilter>
                <ContainerCards>
                    {filters.map(data => {
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