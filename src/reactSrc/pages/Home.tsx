import React from 'react';
import {Button, Container, Icon, Level, LevelItem, LevelLeft, LevelRight, Subtitle, Title} from 'bloomer';
import {connect} from "react-redux";
import {toggleButton} from "../../store/actions";
interface IProps  {
    isLoading : boolean
    toggleButton: ()=>void
}

const Home: React.FunctionComponent<IProps> = (props:IProps) => {

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
                    <h1>loading?{props.isLoading? 'loading':'not loading'}</h1>
                    <Button
                        id="btn-loading"
                        isSize={'medium'}
                        isColor={props.isLoading ? 'primary': 'success'}
                        // onClick={ () => {
                        //     props.toggleButton();
                        //     console.log(props.isLoading);
                        //     console.log("button clicked from react");
                        // }}
                        isLoading={props.isLoading}
                    >
                        {!props.isLoading && (<strong>Check for Updates & Apply</strong>)}
                    </Button>
                </LevelItem>
                <LevelRight/>
            </Level>

        </Container>
    );
};

const mapStatesToProps = (state:any) =>{
    return {
        isLoading: state.ui.isLoading
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        toggleButton: () => {
            dispatch(toggleButton());
        }
    };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Home);
