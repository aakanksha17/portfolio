import React, {Component} from 'react';
import {Tabs,Tab} from 'react-mdl';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';
import { CSSTransitionGroup } from 'react-transition-group';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(


        <CSSTransitionGroup
        component="div"
transitionName="example"
transitionAppear={true}
transitionAppearTimeout={1000}
transitionLeaveTimeout={2000}>

        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
                  </CardText>
            <CardActions border>
              <Button colored href="https://github.com/">GitHub</Button>
              <Button colored href=''>Slideshare</Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
                  </CardText>
            <CardActions border>
              <Button colored href="https://github.com/">GitHub</Button>
              <Button colored>Slideshare</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
                </CardText>
            <CardActions border>
              <Button colored href="https://github.com/">GitHub</Button>
              <Button colored>Slideshare</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
  </CSSTransitionGroup>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Java</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is CSS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MYsql</h1></div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Java</Tab>
          <Tab>CSS</Tab>
          <Tab>SQL</Tab>

        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;
