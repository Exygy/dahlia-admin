import WebpackerReact from 'webpacker-react'
import Turbolinks from 'turbolinks'
import ReactModal from 'react-modal'

import ListingPage from 'components/listings/ListingPage'
import ListingsPage from 'components/listings/ListingsPage'
import ListingForm from 'components/listings/ListingForm'

import HomePage from 'components/pages/HomePage'

import './pattern_library'

Turbolinks.start()

WebpackerReact.setup({ ListingPage }) // ES6 shorthand for {ListingPage: ListingPage}
WebpackerReact.setup({ ListingsPage })
WebpackerReact.setup({ ListingForm })
WebpackerReact.setup({ HomePage })

window.onload = () => {
  ReactModal.setAppElement('#root')
}
