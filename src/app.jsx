import React from 'react'
import $ from 'jquery'
import ReactDOM from 'react-dom'

window.onload = () => {
  ReactDOM.render(<div>hello world</div>, $('.app')[0]);
}

