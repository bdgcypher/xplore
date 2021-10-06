import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Btn = styled(Link)`
    background: ${({primary}) => (primary ? '#F06449' : '#5BC3EB')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({big}) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease-out !important;
    border-radius: ${({round}) => (round ? '50px' : 'none')};

    &:hover {
        transform: translateY(-2px);
        background: ${({primary}) => (primary ? '#5BC3EB' : '#F06449')};
    }
`;

export const BtnSlide = styled(Link)`
    background: ${({primary}) => (primary ? 'linear-gradient(to left, transparent 50%, #F06449 50%) right' : 'linear-gradient(to left, transparent 50%, #5BC3EB 50%) right')};
    background-size: 200%;
    white-space: nowrap;
    padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
    color: ${({primary}) => (primary ? '#F06449' : '#5BC3EB')};
    font-size: ${({big}) => (big ? '20px' : '16px')};
    outline: none;
    border: ${({primary}) => (primary ? '2px solid #F06449' : '2px solid #5BC3EB')};
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease-out !important;
    border-radius: ${({round}) => (round ? '50px' : 'none')};

    &:hover {
        transform: translateY(-2px);
        background-position: left;
        color: #fff;
    }
`;