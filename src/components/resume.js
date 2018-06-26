import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
class Resume extends Component{
  render(){
    return(

    <div>
      <Grid>
       <Cell className="resume-left-col"col={4}>
          <img
            src={require('./ss.png')}
            alt="avatar"
             className="resume-avatar"
            style={{height: '200px'}}
          />
          <h2>Aakanksha Singh</h2>
          <h4>Developer | Bibliophile</h4>
          <hr/>
          <p>To work as a fresher and enhance my technical & interpersonal skills and serve the organization</p>
          <hr/>
          <h5>Address</h5>
            <p>Patidar Complex, Kannawar Nagar- 2, Vikhroli(East)</p>
            <h5>Phone</h5>
            <p>+91-8169148550</p>
            <h5>Email</h5>
            <p>aakankshaipsingh@gmail.com</p>
            <h5>Web</h5>
            <p>aakankshaip.netlify.com</p>
            <hr/>

       </Cell>
       <Cell className="resume-right-col" col={8}>

        <h2> Education</h2>

                  <Education
                  startYear={2014}
                  endYear={2018}
                  schoolName="University of Mumbai"
                  schoolDescription="The University of Mumbai, informally known as Mumbai University (MU), is one of the earliest state universities in India and the oldest in Maharashtra."
                  />


                  <Education
                  startYear={2012}
                  endYear={2014}
                  schoolName="Ramniranjan Jhunjhunwala"
                  schoolDescription="Ramniranjan Jhunjhunwala, known as one of the esteemed college of Mumbai, is one of the colleges in India."
                  />
                  <hr/>

                  <h2>Experience</h2>
                  <Experience
                   jobName="Fresher"

                  />
                  <hr/>
                  <h2>Skills</h2>
                        <Skill
                        skill="Java"
                        progress={60}
                          />

                          <Skill
                          skill="HTML/CSS"
                          progress={70}
                            />

                          <Skill
                           skill="CSS-GRID"
                           progress={75}
                            />


                          <Skill
                           skill="SQL"
                           progress={80}
                            />


                          <Skill
                           skill="Python"
                           progress={50}
                            />

                            <Skill
                             skill="JSP"
                             progress={50}
                             />



       </Cell>
      </Grid>
    </div>

    )
  }
}
export default Resume;
