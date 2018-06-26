import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';


class About extends Component{

  render(){
    return(
<div>
   <Grid>
    <Cell col={4}>
    <h4>About me</h4>
    </Cell>
    <Cell col={8}>
    </Cell>
   </Grid>
</div>
    )
  }
}
export default About;
