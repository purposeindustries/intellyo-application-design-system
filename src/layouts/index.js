import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import "../css/typography.css"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Intellyo's Application Design System"
          meta={[
            { name: "description", content: "The official style guide to build awesome applications here at Intellyo" },
            { name: "keywords", content: "intellyo, design system, ux, style guide, frontend framework, fef" },
          ]}
        />
        <div>
          { this.props.children() }
        </div>
      </div>
    )
  }
}
