import searchSvg from '../../assets/icons/search.svg';
import { Card } from '../../components/Card';

import { 
    Filters, 
    Container, 
    ContainerCards,
    SelectFilter,
} from "./styles";

export function Home() {
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ContainerCards>
            </Container>
        </>
    );
}