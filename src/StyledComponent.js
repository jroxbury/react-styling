import React,{useState} from 'react';
import styled, {css} from 'styled-components';

const Header = styled.h1`
    color:dodgerblue;
    font-size:96px;

    ${props => props.primary && css`
        color:firebrick;
        font-size:48px;
    `}
`


export function StyledComponent(){
    const [width, setWidth] = useState(50);
    const Container = styled.section`
        width:${width}px;
        overflow:hidden;
    `
    return (
        <>
            <Container>
                <Header primary>Styled Component</Header>
            </Container>
            <button onClick={() => setWidth(width + 50)}>Click</button>
        </>
    )
}