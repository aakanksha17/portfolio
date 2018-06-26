import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Experience extends Component{
  render(){
    return(


<div>
  <Grid>
    <Cell className="detail-right" col={4}>
      <p>{this.props.jobstartYear} - {this.props.jobendYear}</p>

    </Cell>
    <Cell className="detail-left" col={8}>
    <h4>{this.props.jobName}</h4>
    <p>{this.props.jobDescription}</p>
    </Cell>
  </Grid>




</div>

    )
  }
}export default Experience;
