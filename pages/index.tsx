import React from 'react'
import Header from '../components/header'

const Page = () => (
  <React.Fragment>
    <div className="container">
      <Header />
    </div>
    {/* language=CSS */}
    <style jsx global>{`
      .svg-inline--fa,
      svg:not(:root).svg-inline--fa {
        overflow: visible;
      }
      .svg-inline--fa {
        display: inline-block;
        font-size: inherit;
        height: 1em;
        vertical-align: -0.125em;
      }
      .svg-inline--fa.fa-w-16 {
        width: 1em;
      }
      .svg-inline--fa.fa-w-20 {
        width: 1.25em;
      }
    `}</style>
  </React.Fragment>
)

export default Page
