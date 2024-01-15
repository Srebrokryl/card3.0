import React from 'react';
import './App.css';
import picture from './assets/images/Rectangle 1.png'
import styled from "styled-components";
import {Img} from "./components/Image";
import {Container} from "./components/Container";
import {H1} from "./components/Heading";
import {Paragraph} from "./components/Text";
import {Button} from "./components/Button";
import {ButtonSecond} from "./components/ButtonSecond";

function App() {
    return (
        <div className="App">
            <Main>
                <Container>
                    <Img src={picture} alt={"desert"}/>
                    <H1>Headline</H1>
                    <Paragraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Paragraph>
                    <Button>See More</Button>
                    <ButtonSecond>Save</ButtonSecond>
                </Container>
            </Main>
        </div>
    );
}

const Main = styled.main`
`

export default App;