import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 0 10px 0;
`;

export const Filters = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        background: var(--shape);
        border-radius: 6px;
        padding: 8px 12px;
        border: none;
        height: 40px;
        width: 100%;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        background: var(--orange);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 40px;

        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const ContainerCards = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`;

export const SelectFilter = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    text-align: end;

    select {
        background: var(--shape);
        border-radius: 6px;
        padding: 8px 12px;
        border: none;
        height: 40px;
        margin-top: 40px;
    }
`;

export const LoadingStyle = styled.div`
    text-align: center;
    margin: 40px auto;
`;