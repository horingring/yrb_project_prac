import React, { Component } from 'react';
import LoginPage from './LoginPage';
import JoinMemberPage from './JoinMemberPage';
import LoginComplete from './LoginComplete';



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
                onChangeLoginMode={function(_mode){
                    this.setState({
                        mode : _mode
                    });
                }.bind(this)}></LoginPage>
            ;
        }else if(this.state.mode === 'joinMemberMode'){
            loginMode =
            <JoinMemberPage 
                onChangeLoginMode={function(_mode){
                    this.setState({
                        mode : _mode
                    });
            }.bind(this)}></JoinMemberPage>
            ;
        }else if(this.state.mode === 'loginCompleteMode'){
            loginMode = 
            <LoginComplete
                onChangeLoginMode={function(_mode){
                    this.setState({
                        mode : _mode
                    });
                }.bind(this)}></LoginComplete>;
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