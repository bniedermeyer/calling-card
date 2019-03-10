import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import linkButtonStyles from "./link-button.module.css"

export default props => (
  <OutboundLink className={linkButtonStyles.linkButton} href={props.url}>
    {props.title}
  </OutboundLink>
)
