import React, { Component } from 'react';

class LoginInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            memberInfo : [
            ]
        }
    }
    saveMemberInfo(){
        //JoinMemberPage에서 넘어온 정보를 state에 저장.
        console.log('saveMemberInfo 실행됨');
        var _memberInfo = Array.from(this.state.memberInfo);
        var _id, _pw, _nick = null;
        _id = this.props.data.id;
        _pw = this.props.data.pw;
        _nick = this.props.data.nick;

        _memberInfo.push(
            {id:_id, pw:_pw, nick:_nick}
            );

        console.log(_memberInfo);

        this.setState({
            memberInfo : _memberInfo
        }); //state에 concat한 것을 저장.
    }

    componentWillMount(){
        this.saveMemberInfo();
        console.log('componentWillMount메소드 실행됨')
    }

    componentDidMount(){
        alert('회원가입 완료되었습니다');
    }

    render(){
        console.log('LoginInfo의 render함수 실행됨')
        return (
            <div>
                <p>LoginInfo 태그입니다.</p>
            </div>
        );
    }
}

export default LoginInfo;