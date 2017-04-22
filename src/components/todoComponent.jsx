import React from 'react';

export default class TodoComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {item: this.props.item}
  }
  render() {
    return (
     <div>
       <ul>
         <li>{this.state.item}</li>
       </ul>
     </div>
    )
  }
}
