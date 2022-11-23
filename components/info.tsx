import React from 'react'
import Link from 'next/link'
import { Github, Twitter, LineChart } from 'lucide-react'

const Info: React.FC = () => (
  <React.Fragment>
    <title>Jeve Stobs - Portfolio</title>
    <div className="info-media-container">
      <Link href={'https://github.com/Jeve-Stobs'} legacyBehavior passHref>
        <a className="github">
          <Github />
          &nbsp;&#8239; View my projects on GitHub
        </a>
      </Link>
      <Link href={'https://twitter.com/devstobs'} legacyBehavior passHref>
        <a className="twitter">
          <Twitter />
          &nbsp;&#8239; Send me a DM on Twitter
        </a>
      </Link>
      <Link href={'https://bred.jevestobs.dev'} legacyBehavior passHref>
        <a className="recession">
          <LineChart />
          &nbsp;&#8239; Check out my recession indicator
        </a>
      </Link>
    </div>
    {/* language=CSS */}
    <style jsx>{`
      a {
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 10px;
        font-size: 16px;
        text-decoration: none;
        color: #171d29;
        transition: background-color 180ms ease-out 0s;
      }
      a > i {
        padding-right: 8px;
      }
      .recession {
        color: #ea4c89;
        background-color: rgba(234, 76, 137, 0.07);
      }
      .recession:hover {
        background-color: rgba(234, 76, 137, 0.115);
      }
      .twitter {
        color: #1da1f2;
        background-color: rgba(29, 161, 242, 0.07);
      }
      .twitter:hover {
        background-color: rgba(29, 161, 242, 0.115);
      }
      .github {
        color: #2867b2;
        background-color: rgba(40, 103, 178, 0.07);
      }
      .github:hover {
        background-color: rgba(40, 103, 178, 0.115);
      }
      .info-media-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
      }
      @media screen and (min-width: 1150px) {
        .info-media-container {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    `}</style>
  </React.Fragment>
)

export default Info
