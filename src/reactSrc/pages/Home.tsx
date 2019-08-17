import React from 'react';
import { connect } from "react-redux";
import {Button, Container, Icon, Level, LevelItem, LevelLeft, LevelRight, Subtitle, Title} from 'bloomer';


const Home: React.FunctionComponent = (props) => {
    return (
        <Container>
            <Title>Clean HostsX</Title>
            <Subtitle>
                <Icon className="fas fa-info-circle"/>
                The best Hosts Manager for Mac OS
                <Icon className="fas fa-info-circle"/>
            </Subtitle>
            <Level>
                <LevelLeft/>
                <LevelItem>
                    <Button
                        id="btn-loading"
                        isSize={'medium'}
                        isColor={'primary'}
                        onClick={async () => {
                            console.debug("button clicked");
                        }}
                    >
                        <strong>Check for Updates & Apply</strong>
                    </Button>
                </LevelItem>
                <LevelRight/>
            </Level>

        </Container>
    );
};

export default Home;
