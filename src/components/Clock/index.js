import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
    // console.log('constructor called')
  }

  componentDidMount() {
    // console.log('componentsDidMount')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    // console.log('render called', date)
    return (
      <div className="clock-container">
        <h1 className="heading"> {date.toLocaleTimeString()} </h1>
      </div>
    )
  }
}
export default Clock
