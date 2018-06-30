import React, { Component } from 'react'

import moment from 'moment';

import './CommentListItem.css';

import { 
    WingBlank, 
    WhiteSpace ,
    Card,
} from 'antd-mobile';

export default class CommentListItem extends Component {
  render() {
    return (
      <div>
        <WingBlank>
            <Card>
                <Card.Header
                    title={this.props.message_user.username}
                    extra={moment(this.props.createdAt).format('yyyy-MM-DD HH:mm')}
                />
                <Card.Body>
                    <span id='content' >
                        {this.props.content}
                    </span>
                </Card.Body>
            </Card>
        </WingBlank>
      </div>
    )
  }
}
