import React, { Component } from 'react'
import userMessage from '../DataServer/UserMessage' ;
import { 
    Button,
    Toast,
    NavBar,
    WingBlank, 
    WhiteSpace ,
    List,
    InputItem,
    Icon
} from 'antd-mobile';

export default class RegisterScreen extends Component {
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
            icon={<Icon type="left"/>}
            onLeftClick={()=>{this.props.history.goBack()}}
        >
            注册
        </NavBar>
        <WhiteSpace/>
        <List>
            <InputItem
                type={'text'}
                value={this.state.username}
                onChange={(username)=>{this.setState({username})}}
                placeholder={'请输入注册用户名'}
            >
                用户名
            </InputItem>
            <InputItem
                type={'text'}
                value={this.state.password}
                onChange={(password)=>{this.setState({password})}}
                placeholder={'请输入注册密码'}
            >
                密码
            </InputItem>
        </List>
        <WingBlank>
            <Button
                type={'primary'}
                onClick={async()=>{
                    const result=await userMessage.register(this.state.username,this.state.password);
                    console.log(result);
                    if(result.success === false){
                        Toast.fail(result.errorMessage);
                        return;
                    }
                    this.props.history.replace('/HomeScreen');
                }}
            >
                提交
            </Button>
        </WingBlank>
      </div>
    )
  }
}
