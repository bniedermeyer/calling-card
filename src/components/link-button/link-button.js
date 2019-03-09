import React from "react"
import linkButtonStyles from "./link-button.module.css"

export default props => (
  <a className={linkButtonStyles.linkButton} href={props.url}>
    {props.title}
  </a>
)
