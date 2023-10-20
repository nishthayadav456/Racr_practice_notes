import React, { Component } from 'react'
import MountCompo from './MountCompo'
import UpdatingCompo from './UpdatingCompo'
import UnmountCompo from './UnmountCompo'

 class DisplayLife extends Component {
  render() {
    return (
      <div>
        <MountCompo/>
        <UpdatingCompo/>
        <UnmountCompo/>
      </div>
    )
  }
}
export default DisplayLife