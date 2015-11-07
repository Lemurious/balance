import React from 'react';
import LeftNav from 'material-ui/lib/left-nav'

export default class Navigation extends React.Component {

  render() {
    return (
      <LeftNav ref="leftNav" menuItems={[]} />
    )
  }
}
