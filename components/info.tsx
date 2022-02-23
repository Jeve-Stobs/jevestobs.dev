import React from 'react'
import Link from 'next/link'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Info: React.FC = () => (
  <React.Fragment>
    <div className="info-media-container">
      <Link href={'https://github.com/Jeve-Stobs'} passHref>
        <a className="linkedin">
          <FontAwesomeIcon icon={faGithub} />
          &nbsp;&#8239; View my projects on GitHub
        </a>
      </Link>
      <Link href={'https://twitter.com/devstobs'} passHref>
        <a className="twitter">
          <FontAwesomeIcon icon={faTwitter} />
          &nbsp;&#8239; Send me a DM on Twitter
        </a>
      </Link>
      <Link href={'https://fred.jevestobs.dev'} passHref>
        <a className="dribbble">
          <FontAwesomeIcon icon={faChartLine} />
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
      .dribbble {
        color: #ea4c89;
        background-color: rgba(234, 76, 137, 0.07);
      }
      .dribbble:hover {
        background-color: rgba(234, 76, 137, 0.115);
      }
      .twitter {
        color: #1da1f2;
        background-color: rgba(29, 161, 242, 0.07);
      }
      .twitter:hover {
        background-color: rgba(29, 161, 242, 0.115);
      }
      .linkedin {
        color: #2867b2;
        background-color: rgba(40, 103, 178, 0.07);
      }
      .linkedin:hover {
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
