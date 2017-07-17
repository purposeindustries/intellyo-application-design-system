import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Logo from '../components/logo';

import '../../css/main.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div className="main">
        <Helmet
          title="Intellyo's Application Design System"
          meta={[
            { name: "description", content: "The official style guide to build awesome applications here at Intellyo" },
            { name: "keywords", content: "intellyo, design system, ux, style guide, frontend framework, fef" },
          ]}
        />
        <aside className="sidebar">
          <div className="logo">
            <Logo />
          </div>
        </aside>
        <div className="content">
          { this.props.children() }
        </div>
      </div>
    )
  }
}
