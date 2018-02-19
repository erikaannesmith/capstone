import React, { Component } from 'react'
import {getDesigner, getStyles} from '../../utils/requests'
import DesignerContactInfo from './DesignerContactInfo'
import DesignerStylesList from './DesignerStylesList'

class DesignerShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      designer: [],
      styles: []
      // comments: []
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    getDesigner(id)
      .then(designer => this.setState({ designer }))
    getStyles(id)
      .then(styles => this.setState({ styles }))
      .catch(error => console.log({ error }))
    // getComments()
    //   .then(comments => this.setState({ comments }))
    //   .catch(error => console.log({ error }))
  }

  render() {
    let designer = this.state.designer
    let styles = this.state.styles
    return (
      <div className="designer-show">
        <h3>{ designer.company }</h3>
        <DesignerContactInfo designer={designer} />
        <DesignerStylesList styles={styles} />
        {/* <DesignerComments /> */}
      </div>
    )
  }
}

export default DesignerShow;