import { Link } from "react-router-dom"

const Dasboard = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{marginBottom:'20px'}}>Thank you for your time and data 😘😈</h1>
      <p>Now you may <Link to={'/'}>Log out</Link></p>
    </div>
  )
}

export default Dasboard