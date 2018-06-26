import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'
class Landing extends Component{
  render(){
    return(
      <div style={{width:'100%',margin:'auto'}}>
        <Grid className="landing-grid">
            <Cell col='12'>
                <img
                src={require('./ss.png')}
                alt="avatar"
                className="avatar-img"
                    />

            </Cell>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
                <hr/>

              <p>HTML/CSS | Java | CSSGRID | JavaScript | SQL | Python </p>

              <div className="social-links">
              {/*LinkedIN*/}
                <a href="https://www.linkedin.com/in/aakanksha-singh-7447a7148/" target="_blank">
                  <i className="fa fa-linkedin-square"rel="noopener noreferrer" aria-hidden="true"/>
                </a>

                {/*Twitter*/}
                <a href="" target="_blank">
                  <i className="fa fa-twitter-square"rel="noopener noreferrer" aria-hidden="true"/>
                </a>

                {/*Github*/}
                <a href="https://github.com/aakanksha17" target="_blank">
                  <i className="fa fa-github-square"rel="noopener noreferrer" aria-hidden="true"/>
                </a>
              </div>



            </div>
        </Grid>
      </div>
    )
  }
}
export default Landing;
