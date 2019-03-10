import React from "react"

import Container from "../components/container/container"
import LinkButton from "../components/link-button/link-button"
import Picture from "../components/picture/picture"

export default () => (
  <Container>
    <Picture />
    <h1>Brenden Niedermeyer</h1>
    <LinkButton url="https://brenden.fyi" title="Resume" />
    <LinkButton
      url="https://www.linkedin.com/in/bniedermeyer"
      title="LinkedIn"
    />
    <LinkButton url="https://medium.com/@brenden.niedermeyer" title="Blog" />
    <LinkButton url="https://github.com/bniedermeyer" title="Github" />
    <LinkButton url="https://twitter.com/thenieds" title="Twitter" />
    <LinkButton url="mailto:me@brenden.fyi" title="Email" />
  </Container>
)
