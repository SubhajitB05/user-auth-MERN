import { Link } from "react-router-dom"
import './Home.css';

const Home = () => {
  return (
    <div className="homie">
        <h1>Welcome to the Home Page</h1>
        <br />
        <p>New User? <Link to={'/register'}>Register here</Link></p>
        <br />
        <p>Old user? <Link to={'/login'}>Login here</Link></p>
    </div>
  )
}

export default Home