import React from 'react'
import DatePicker from 'react-datepicker'
import { isEmpty } from 'lodash'

export class SimpleDatePicker extends React.Component {
  constructor (props) {
    super(props)
    let dateValue = null

    if (!isEmpty(props.input.value)) {
      dateValue = new Date(props.input.value)
    } else {
      dateValue = new Date()
    }

    this.state = {
      startDate: dateValue
    }
    this.formOnChange = props.input.onChange // from React Final Form
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (date) {
    this.setState({
      startDate: date
    })
    this.formOnChange(date) // trigger React Final Form
  }

  render () {
    return (
      <React.Fragment>
        <label htmlFor={`form-${this.props.input.name}`}>{this.props.label}:</label>
        <DatePicker id={`form-${this.props.input.name}`} selected={this.state.startDate} onChange={this.handleChange} />
      </React.Fragment>
    )
  }
}
