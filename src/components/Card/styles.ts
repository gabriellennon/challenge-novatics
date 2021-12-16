import styled from "styled-components";

export const ContainerCard = styled.div`
    background: var(--shape);
    border-radius: 6px;
    padding: 10px;
`;

export const ImageCard = styled.div`
    background: #F2F2F2;
    border-radius: 5px;
    text-align: center;
`;

export const NumberPokemon = styled.p`
    color: #919191;
    font-size: 80%;
    padding-top: 2px;
    font-weight: 500;
`;

export const InfosPokemon = styled.div``;

export const NamePokemon = styled.h2`
    color: var(--dark);
    text-transform: none;
    font-size: 22px;
    margin-bottom: 5px;
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
`;

export const TagPokemon = styled.span`
    display: block;
    border-radius: 3px;
    line-height: 18px;
    max-width: 110px;
    margin: 0 1.5625% 0 0;
    width: 30%;
    font-size: 11px;
    text-align: center;
    background: var(--grass);
`;
