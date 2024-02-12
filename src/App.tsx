import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className="nav" role="navigation">
        <div className="max-centered">
          <h1 className="nav__logo">Rule of thumb.</h1>
          <button className="nav__hamburger icon-button">
            <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero" />
            </svg>
          </button>
          <ul className="nav__links">
            <li>
              <a href="#">Past Trials</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Login / Sign Up</a>
            </li>
            <li>
              <form action="javascript:void(0)">
                <input className="nav__search-input" aria-label="search" type="text" />
                <button className="nav__search icon-button" type="submit">
                  <img src="src/assets/img/search.svg" alt="search" />
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
      <header className="hero">
        <img
          className="hero__background"
          srcSet="src/assets/img/pope-francis.png 750w, src/assets/img/pope-francis.@2x.png 1440w"
          sizes="(min-width: 750px) 1440px, 100vw"
          src="src/assets/img/pope-francis.png"
          alt="Pope Francis"
        />
        <div className="max-centered">
          <div className="hero__featured-card">
            <div className="featured-card__glass-background"></div>
            <div className="featured-card__content">
              <p className="featured-card__hairline">What's your opinion on</p>
              <h2 className="featured-card__title">Pope Francis?</h2>
              <p className="featured-card__desc">
                He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
              </p>
              <p className="featured-card__more-info">
                <a href="http://wikipedia.com">
                  <svg className="featured-card__more-info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18">
                    <path
                      d="M27 .303c0 .1-.032.2-.09.28a.255.255 0 01-.2.125 2.46 2.46 0 00-1.453.602 5.676 5.676 0 00-1.166 1.952l-6.127 14.533c-.04.135-.152.203-.337.203a.374.374 0 01-.337-.203l-3.436-7.564-3.952 7.564a.374.374 0 01-.337.203.34.34 0 01-.349-.203L3.196 3.262a5.052 5.052 0 00-1.19-1.89A3.161 3.161 0 00.267.708.23.23 0 01.086.6.378.378 0 010 .355C0 .118.064 0 .192 0 .73 0 1.29.025 1.876.075c.544.053 1.056.078 1.536.078.49 0 1.067-.026 1.732-.078C5.839.025 6.456 0 6.994 0c.128 0 .192.118.192.355 0 .235-.04.352-.119.352a2.308 2.308 0 00-1.268.43c-.297.22-.47.581-.463.963.015.263.08.521.192.757l4.975 11.826 2.824-5.614-2.631-5.807A7.637 7.637 0 009.53 1.257a2.274 2.274 0 00-1.382-.55A.208.208 0 017.986.6a.4.4 0 01-.078-.245c0-.237.054-.355.168-.355.494-.002.987.023 1.477.075.46.054.92.08 1.382.078.48 0 .988-.026 1.525-.078C13.013.025 13.558 0 14.094 0c.128 0 .192.118.192.355 0 .235-.038.352-.119.352-1.073.078-1.61.399-1.61.963.047.414.174.814.373 1.175l1.74 3.72 1.732-3.403c.209-.37.333-.786.36-1.215 0-.775-.536-1.188-1.61-1.24-.097 0-.144-.117-.144-.352a.44.44 0 01.071-.24c.05-.077.098-.115.145-.115.385 0 .857.025 1.418.075.536.053.978.078 1.25.078.409-.003.818-.03 1.224-.078.483-.05.915-.075 1.3-.075.111 0 .168.1.168.303z"
                      fill="#FFF" fillRule="nonzero"
                    />
                  </svg>
                  More information
                </a>
              </p>
              <p className="featured-card__cta">
                What’s Your Verdict?
              </p>
              <div className="featured-card__buttons">
                <button className="icon-button" aria-label="thumbs up">
                  <img src="src/assets/img/thumbs-up.svg" alt="thumbs up" />
                </button>
                <button className="icon-button" aria-label="thumbs down">
                  <img src="src/assets/img/thumbs-down.svg" alt="thumbs down" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__closing-gauge">
          <div className="closing-gauge__left">
            <span className="closing-gauge__title">closing in</span>
          </div>
          <div className="closing-gauge__right">
            <span className="closing-gauge__number">22</span>
            <span className="closing-gauge__desc">days</span>
          </div>
        </div>
      </header>
      <div className="max-centered">
        <aside className="banner banner-top" role="doc-tip" aria-label="Speak Out">
          <div className="banner__left">
            <span className="banner__hairline">Speak out. Be heard.</span>
            <span className="banner__title">Be counted</span>
          </div>
          <div className="banner__right">
            <p className="banner__text">
              Rule of Thumb is a crowd-sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
            </p>
          </div>
          <button className="icon-button" aria-label="close">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
                <path d="M1 19L19 1M1 1l18 18" />
              </g>
            </svg>
          </button>
        </aside>
        <main role="main">
          {/*application content*/}
        </main>
        <aside className="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
          <img
            srcSet="src/assets/img/bg-people.png 750w, src/assets/img/bg-people.@2x.png 1440w"
            sizes="(min-width: 750px) 1440px, 100vw"
            className="banner__background"
            src="src/assets/img/bg-people.png"
            alt=""
            role="none"
          />
          <div className="banner__left">
            <h2 className="banner__heading">Is there anyone else you would want us to add?</h2>
          </div>
          <div className="banner__right">
            <button className="banner__cta">
              Submit a name
            </button>
          </div>
        </aside>
        <hr role="separator" />
        <footer className="footer">
          <div className="footer__links">
            <ul>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer__social">
            <span>Follow us</span>
            <ul>
              <li>
                <a href="#">
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.467-3.622H16.56V8.771c0-1.048.292-1.763 1.796-1.763h1.918v-3.24a25.663 25.663 0 00-2.795-.143c-2.766 0-4.659 1.688-4.659 4.788v2.671H9.691v3.622h3.128V24H1.325A1.325 1.325 0 010 22.676V1.325A1.325 1.325 0 011.325 0h21.35A1.325 1.325 0 0124 1.325z" fill="#262626" fillRule="nonzero" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg width="26" height="23" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.329 6.204c.01.23.01.458.01.687A15.182 15.182 0 01-.008 19.688c.421.05.845.075 1.27.073a10.7 10.7 0 006.627-2.289 5.335 5.335 0 01-4.984-3.704c.798.151 1.62.12 2.404-.094a5.346 5.346 0 01-4.276-5.233v-.073a5.396 5.396 0 002.413.666 5.357 5.357 0 01-1.654-7.127A15.15 15.15 0 0012.79 7.484a5.898 5.898 0 01-.135-1.217 5.336 5.336 0 019.228-3.652 10.612 10.612 0 003.392-1.29 5.368 5.368 0 01-2.351 2.955 10.811 10.811 0 003.07-.843 10.868 10.868 0 01-2.664 2.767z" fill="#262626" fillRule="nonzero" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
