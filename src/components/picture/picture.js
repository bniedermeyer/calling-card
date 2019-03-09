import React from "react"

import pictureStyles from "./picture.module.css"
import headshot from "./headshot.jpg"

export default () => (
  <img
    src={headshot}
    alt="a headshot of Brenden"
    className={pictureStyles.picture}
  />
)
