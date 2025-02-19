//controlled components
function UserForm() {
  const [name, setName] = React.useState("")
  const [email,setEmail] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name,email)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name" />
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="enter email" />

        <input type="submit"/>
      </form>
    </div>
  )
}
  
  ReactDOM.createRoot(document.querySelector("#root")).render(<UserForm />);
  