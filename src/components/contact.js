import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import { CSSTransitionGroup } from 'react-transition-group';

class Contact extends Component{
  render(){
    return(

      <CSSTransitionGroup
                component="div"
                transitionName="example"
                transitionAppear={true}
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                >




      <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Aakanksha Singh</h2>
              <img
                src={require('./ss.png')}
                alt="avatar"
                className="contact-avatar"
                style={{height:'250px'}}
                />
                <p style={{width:'75%' , margin:'auto', paddingTop:'1em'}}>
                </p>

        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr/>
          <div className="contact-list">

            <List className="contact-listitem">
                <ListItem>
                  <ListItemContent id="a">
                    <i className="fa fa-phone-square" aria-hidden="true"/>+91 8169148550</ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent id="a">
                    <i className="fa fa-envelope" aria-hidden="true"/>aakankshaipsingh@gmail.com</ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent id="a">
                    <i className="fa fa-skype" aria-hidden="true"/>aakankshaipsingh@gmail.com</ListItemContent>
                </ListItem>

              </List>
          </div>

        </Cell>
        </Grid>
      </div>
      </CSSTransitionGroup>
    )
  }
}
export default Contact;
