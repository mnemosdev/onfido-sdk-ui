// @flow
import * as React from 'react'
import { h, Component } from 'preact'
import Guidance from './Guidance'

type Props = {
  documentType: string,
  i18n: Object,
  trackScreen: Function,
}

type State = {
  hasSeenGuidanceScreen: boolean,
}

export default WrappedDocument =>
  class PoADocument extends Component<Props, State> {
    state = {
      hasSeenGuidanceScreen: false,
    }

    handleIntroNext = () => {
      this.setState({ hasSeenGuidanceScreen: true })
    }

    render() {
      const { i18n, trackScreen, documentType } = this.props
      return this.state.hasSeenGuidanceScreen ?
        <WrappedDocument {...this.props} /> :
        <Guidance {...{i18n, trackScreen, documentType, nextStep: this.handleIntroNext}} />
    }
  }