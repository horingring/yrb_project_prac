import React, { Component } from 'react';

class LoginComplete extends Component{
    constructor(props){
        super(props);
        this.state = {
            session : {nick : '호링링'}
        }
    }

    render(){
        return (
            <div>
                <h3>로그인 완료창</h3>
                <p><b>{this.state.session.nick} 님 환영합니다!</b></p>
                <div>
                    <a 
                      href="./"
                      onClick={function(e){
                          e.preventDefault();
                          //'내 정보' 탭으로 넘어가는 로직
                      }.bind(this)}
                      >내 정보</a>
                    &nbsp;&nbsp;
                    <a 
                      href="./"
                      onClick={function(e){
                          e.preventDefault();
                          //로그인 페이지로 넘어가는 로직
                          //1. confirm창을 띄어 물어보고
                          //2. '확인'일 경우
                          //3. 1)session을 초기화하고
                                //session변경하면 2)로직 실행 안되지 않나?
                          //   2)로그인 페이지로 넘어가기
                          if(window.confirm('정말 로그아웃 하시겠습니까?')){
                              this.props.onChangeLoginMode('loginMode');
                          }else{

                          }
                      }.bind(this)}
                      >로그아웃</a>
                </div>
            </div>
        );
    }
}

export default LoginComplete;