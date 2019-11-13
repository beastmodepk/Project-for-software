import React from 'react'
import { Link } from "react-router-dom"; 
// need to import component defined on another page
class App extends React.Component {
  render () {
    return (
      <Router>
       <div>
        <Link to="/src/scenario1.js" className="btn btn-primary">Scenario 1</Link>
       </div>
       </Router>
    )
  }
}
export default App;