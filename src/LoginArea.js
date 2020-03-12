import React, { Component } from 'react';
import LoginPage from './LoginPage';
import JoinMemberPage from './JoinMemberPage';


class LoginArea extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode : 'loginMode'
        }
    }


    render(){
        var loginMode = null;
        if(this.state.mode === 'loginMode'){
            loginMode =
            <LoginPage
                onChangeMode={function(_mode){
                    this.setState({
                        mode : _mode
                    });
                }.bind(this)}></LoginPage>
            ;
        }else if(this.state.mode === 'joinMemberMode'){
            loginMode =
            <JoinMemberPage 
                onChangeMode={function(_mode){
                    this.setState({
                        mode : _mode
                    });
            }.bind(this)}></JoinMemberPage>
            ;
        }

        return (
            <div className="loginArea">
                <h3>LOGIN AREA</h3>
                {loginMode}       
            </div>
        );
    }
}

export default LoginArea;