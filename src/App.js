import {Component} from 'react'

import ReactPlayer from 'react-player'

import {FaWhatsapp} from 'react-icons/fa'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="first-container">
          <h1 className="heading">Mobishaala</h1>
          <p className="para">
            Create your <span className="spanEl">Digital Classroom</span> in 5
            mins for <span className="spanEl">FREE</span> & connect to 1+
            Million Students
          </p>
          <div className="second-container1">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=jg5d59ligW4"
              controls
              width="100%"
              height="100%"
            />
            <button type="button" className="BuybtnEl">
              Buy
            </button>
          </div>
          <div className="ul-div-container">
            <ul className="ul-container">
              <li className="list-item">No technical knowledge required.</li>
              <li className="list-item">
                Quickly setup live class, tests, notes,ebooks and more.
              </li>
              <li className="list-item">
                Reach out to millions of students anywhere, anytime.
              </li>
            </ul>
          </div>

          <div className="btn-container">
            <h1 className="btn-heading">Institute/Teacher</h1>
            <button type="button" className="btnEl">
              Get Started
            </button>
          </div>
          <div className="btn-container">
            <h1 className="btn-heading">Student</h1>
            <button type="button" className="btnEl">
              Download App
            </button>
          </div>
          <div>
            <button type="button" className="btnEl1">
              <FaWhatsapp className="iconEl" />
              Talk to Us
            </button>
          </div>
        </div>
        <div className="second-container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jg5d59ligW4"
            controls
            width="100%"
            height="50%"
          />
          <button type="button" className="BuybtnEl">
            Buy
          </button>
        </div>
        <div className="mobile-device-container">
          <h1 className="new-heading">Mobishaala</h1>
          <h1 className="main-heading">Vision</h1>
          <p className="paras">
            Empower Institutions & Teachers with state of the art digital
            classroom Technology.
          </p>

          <h1 className="main-heading">Address</h1>
          <p className="paras">
            <span className="span-heading">Registered Office:</span> 804, 5th
            Cross,9th main,4th Block Koramangala,Bangalore,Karnataka 560034
          </p>
          <p className="paras">
            <span className="span-heading">Corporate Office:</span> 293, Westend
            Marg, near Saket, Saidulajab,Saket New Delhi,110030
          </p>

          <h1 className="main-heading">Quick Links</h1>
          <p className="paras">Blog</p>
          <p className="paras">Android App</p>
          <p className="paras">IOS App</p>
        </div>
      </div>
    )
  }
}

export default App
