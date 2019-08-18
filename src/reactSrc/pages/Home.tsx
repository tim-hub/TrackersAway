import React from 'react';
import {Button, Container, Icon, Level, LevelItem, LevelLeft, LevelRight, Subtitle, Title} from 'bloomer';
import {connect} from "react-redux";
import {toggleLoading, toggleClicked} from "../../store/actions";
import {addItem, deleteItem, toggle1, store} from "../../store/store";
// interface IProps  {
//     state: any,
//     isLoading : boolean,
//     isClicked: boolean,
//     toggleLoading: ()=>void,
//     toggleClicked: (i:boolean)=>void
// }

const Home: React.FunctionComponent<any> = (props:any) => {
    console.log(props);
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
                    {/*<h1>loading?{store.getState().ui.isLoading? 'loading':'not loading'}</h1>*/}
                    <Button
                        id="btn-loading"
                        isSize={'medium'}
                        isColor={'success'}
                        // onClick={ () => {
                        //     // props.toggleLoading();
                        //     console.log(props.isLoading);
                        //     console.log("button clicked from react");
                        // }}
                        // isLoading={props.isLoading}
                    >
                        <strong>Check for Updates & Apply</strong>
                    </Button>
                </LevelItem>
                <LevelRight/>
            </Level>
        </Container>
    );
};

const mapStatesToProps = (state:any) => {
    // console.log(state);
    return {
        state: state,
        items: state.test,
        app: state.app,
        isLoading: state.ui.isLoading,
        isClicked: state.ui.isClicked
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        toggleLoading: () => {
            dispatch(toggleLoading());
        },
        toggleClicked: (isClicked:boolean) => {
            dispatch(toggleClicked(isClicked));
        },
        add: (i:number) => {
            dispatch(addItem(i));
        },
        delete: (i:number) => {
            dispatch(deleteItem(i));
        },
        toggle1: (b:boolean) => {
            dispatch(toggle1(b));
        }
    };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Home);
