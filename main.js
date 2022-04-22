import './style.css'

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { loadTabObservableSimple } from './src/pages/observable-simple/observable-simple'
import { loadTabObservableInterpolation } from './src/pages/observable-interpolation/observable-interpolation'

var tabs = document.querySelectorAll('button[data-bs-toggle="tab"]')

const initializeTab = () => {
  loadTabObservableSimple('tab-observable-simple')
}

tabs.forEach(tab => tab.addEventListener('shown.bs.tab', event => {
  if (event.target.id === 'nav-observable-simple') {
    initializeTab();
  } else if (event.target.id === 'nav-observable-interpolation') {
    loadTabObservableInterpolation('tab-observable-interpolation')
  }
}))

initializeTab()

