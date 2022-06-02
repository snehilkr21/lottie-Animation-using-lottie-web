
import React from "react";
import lottie from "lottie-web";
import reactLogo from './Animation/first.json'


//  function App() {
//   React.useEffect(() => {
//     lottie.loadAnimation({
//       container: document.querySelector("#react-logo"),
//       animationData: reactLogo
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <div id="react-logo" style={{ width: 200, height: 200 }} />
//     </div>
//   );
// }
class App extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    lottie.loadAnimation({
            container: document.querySelector("#react-logo"),
            animationData: reactLogo
          });
  }
  render(){
    return(
      <div>
        <h1>Hello Snehil</h1>
        <div id="react-logo" style={{alignContent:"center", width: 200, height: 200 }} />
      </div>
    )
  }
}
export default App;