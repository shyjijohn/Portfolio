import { useEffect } from 'react';
import './App.css';


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
    <div class="app">
      <div class="container">
        <div class="firstPage">
          <div class="left-container">
            <div class="hello">HELLO</div>
            <div class="me">I'm <span>SHYJI JOHN</span></div>
            <div class="role">
              <div class="aspiring">Aspiring</div>
              <div class="developer">Frontend developer</div>
            </div>
          </div>
          <div class="right-container">
            <div class="picture">
              <img src="images/resume.png" class="imageMe" />
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container">
        <div class="firstPage">
          <div class="left-container">
            <div class="hello">HELLO</div>
            <div class="me">I'm <span>SHYJI JOHN</span></div>
            <div class="role">
              <div class="aspiring">Aspiring</div>
              <div class="developer">Frontend developer</div>
            </div>
          </div>
          <div class="right-container">
            <div class="picture">
              <img src="images/resume.png" class="imageMe" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;