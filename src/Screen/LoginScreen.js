import React, { Component } from 'react'
import { 
    Button,
    Toast,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
} from 'antd-mobile';
import { list } from 'postcss';
import userMessage from'../DataServer/UserMessage'

export default class LoginScreen extends Component {
constructor(props) {
  super(props)

  this.state = {
     username:'',
     password:''
  }
}
  render() {
    return (
      <div>
        <NavBar
            mode="dark"
        >
        登录
        </NavBar>
        <List>
            <InputItem
                type={'text'}
                value={this.state.username}
                onChange={(username)=>{this.setState({username})}}
                placeholder={'请输入登录用户名'}
            >
            用户名
            </InputItem>
            <InputItem
                type={'text'}
                value={this.state.password}
                onChange={(password)=>{this.setState({password})}}
                placeholder={'请输入密码'}
            >
            密码
            </InputItem>
        </List>
        <WingBlank>
        <Button
            type={'primary'}
            onClick={async()=>{
                const result=await userMessage.login(this.state.username,this.state.password);
                console.log(result);
                if(result.success===false)
                {
                    Toast.fail(result.errorMessage);
                    return;
                }
                this.props.history.replace('/HomeScreen');
            }}
        >
            登录
        </Button>
        <WhiteSpace/>
        <Button
            type={'primary'}
            onClick={()=>{
                this.props.history.push('/RegisterScreen',{})
            }}
        >
            注册
        </Button>
        </WingBlank>
      </div>
    )
  }
}
