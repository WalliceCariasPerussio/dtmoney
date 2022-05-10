import styled from "styled-components"

export const Container = styled.div`
    margin-top: 4rem;

    @media (max-width:800px){
        overflow-x: auto;
    }

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }

            &.deposit{
                color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }
        }

    }
`;

export const ContentDestroy = styled.div`
    text-align: center;
    button{
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }

    }
`