//uncontrolled forms or uncontrolled form
import { useRef, useState } from 'react'
function UserForm() {
    const usernameRef = useRef(null) 
    const emailRef = useRef(null)
    const handleSubmit = (e) => {
      e.preventDefault()
        console.log(usernameRef.current.value)
        console.log(emailRef.current.value)
    }
    console.log('renderingggggggg')
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input ref={usernameRef}  type="text" placeholder="enter name" />
          <input ref={emailRef}  type="text" placeholder="enter email" />
          <input type="submit"/>
        </form>
      </div>
    )
  }
    
export default UserForm    


useEffect(() => {
  first

  return () => {
    //cleanup function
  }
}, [])


