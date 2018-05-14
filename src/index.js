// Code goes here
import React from 'react'
import ReactDOM from 'react-dom'

const title = React.createElement('h1', {}, 'My First React Code')
const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!')
const container = React.createElement('div', {}, [title, paragraph])

const list = React.createElement('div', {},
React.createElement('h1', {}, 'My favorite ice cream flavors'),
React.createElement('ul', {}, [
  React.createElement('li', {}, 'Chocolate'),
        React.createElement('li', {}, 'Vanilla'),
        React.createElement('li', {}, 'Banana')
      ]))
ReactDOM.render(
  container,
  list,
  
  document.getElementById('global')
  )