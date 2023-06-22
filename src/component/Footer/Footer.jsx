import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id="footer">

      <div id="width">
        <span className="floatLeft">
          design <a href="http://fullahead.org" title="Goto Fullahead">Fullahead</a> <span className="grey">|</span>
          valid <a href="http://validator.w3.org/check?uri=referer" title="Validate XHTML">XHTML</a> <span className="grey">|</span>
          should be valid <a href="http://jigsaw.w3.org/css-validator" title="Validate CSS">CSS</a>
        </span>

        <span className="floatRight">
          <a href="index.html" title="Introduction">intro</a> <span className="grey">|</span>
          <a href="help.html" title="Learn how to use the template">help</a> <span className="grey">|</span>
          <a href="tags.html" title="View the styled tags">tags</a> <span className="grey">|</span>
          <a href="print.html" title="View the print layout">print</a> <span className="grey">|</span>
          <a href="http://fullahead.org/contact.html" title="Get in touch">mail</a>
        </span>
      </div>

    </div>
  )
}

export default Footer