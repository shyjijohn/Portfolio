import { useEffect, useState, useRef } from 'react';
import './App.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {


  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Your scroll event handler logic here
  //     console.log('Window scrolled!');
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener on unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount and componentWillUnmount


  return (
    <div className="app">
      <div className="container">
        <FadeInSection>
          <div className="firstPage">
            <div className="left-container">
              <div className="hello">HELLO</div>
              <div className="me">I'm <span>SHYJI JOHN</span></div>
              <div className="role">
                <div className="aspiring">Aspiring</div>
                <div className="developer">Frontend developer</div>
              </div>
            </div>
            <div className="right-container">
              <div className="picture">
                <img src="images/resume.png" className="imageMe" />
              </div>
            </div>
          </div>

        </FadeInSection>

      </div>
      <div className="container">
        <FadeInSection>
          <div className="firstPage">
            <div className="left-container">
              <div className="hello">HELLO</div>
              <div className="me">I'm <span>SHYJI JOHN</span></div>
              <div className="role">
                <div className="aspiring">Aspiring</div>
                <div className="developer">Frontend developer</div>
              </div>
            </div>

            <div className="right-container">
              <div className="picture">
                <img src="images/resume.png" className="imageMe" />
              </div>
            </div>
          </div>

        </FadeInSection>


      </div>
    </div>
  );
}

export default App;