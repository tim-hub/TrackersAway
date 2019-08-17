import React from 'react';
import {Button, Container, Icon, Level, LevelItem, LevelLeft, LevelRight, Subtitle, Title} from 'bloomer';
import {connect} from "react-redux";
import {toggleLoading, toggleClicked} from "../../store/actions";
import {addItem, deleteItem, toggle1} from "../../store/store";
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
                    <h1>loading?{props.isClicked? 'isClicked':'not isClicked'}</h1>
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
                    <h1>clicked?{props.isClicked? 'isClicked':'not isClicked'}</h1>
                    <Button
                        id="btn-loading"
                        isSize={'medium'}
                        isColor={props.isClicked ? 'primary': 'success'}
                        onClick={ () => {

                            // console.log('click status in react --' + props.isClicked);
                            console.log(props.state);
                            // console.log(props.state.ui);
                            props.toggleClicked(props.isClicked);
                            console.log(props.state);

                        }}
                        isLoading={props.isClicked}
                    >
                        {!props.isClicked && (<strong>Check for Updates & Apply</strong>)}
                    </Button>
                    <p>

                    </p>
                </LevelItem>
                <LevelRight/>
            </Level>
            <Level>
                <p>{props.items[0]}</p><p>{props.items[1]}</p>
                <Button onClick={
                    () =>{
                        console.log('add');
                        props.add(10);
                        console.log(props.items);

                    }
                }>Add</Button>
                <Button onClick={()=>{props.delete(1)}}>Delete</Button>
            </Level>
            <Level>
                <p>{props.app.isLoading ? 'true' : 'false'}</p>
                <Button onClick={()=>{
                    console.log(props);
                    props.toggle1(props.app.isLoading);
                }}>
                    toggle
                </Button>
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
