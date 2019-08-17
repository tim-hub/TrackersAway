import React from 'react';
import {
    Button,
    Column,
    Columns,
    Container,
    Icon,
    Level,
    LevelItem,
    LevelLeft,
    LevelRight,
    Notification,
    Subtitle,
    Title
} from 'bloomer';


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
                        isSize={'medium'}
                        isColor={'primary'}
                        id="btn-loading"
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
