function UserForm() {
    const [data, setData] = React.useState({ userName: "", userEmail: "" });
    const [fetchedData,setFetchedData] = React.useState([])
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setData({ ...data, [e.target.name]: e.target.value });
    //setData({ userName: "chandra", userEmail: "chandra@gamil.com" })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //post data onto firebase
    try {
      const response = await axios.post(
        "https://userdatabase-c27eb-default-rtdb.firebaseio.com/users.json",
        data
      );
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
    
    const handleFetch = async() => {
        //get data from firebase
        try {
            const response = await axios.get("https://userdatabase-c27eb-default-rtdb.firebaseio.com/users.json")
            // console.log(response.data)
            const out = Object.entries(response.data)
            setFetchedData(out)

        } catch (error) {
            console.log(error)
        }
    }

    console.log(fetchedData)
    let users = fetchedData.map((elem)=>console.log(elem))
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="userName"
          type="text"
          placeholder="enter name"
        />
        <input
          onChange={handleChange}
          name="userEmail"
          type="text"
          placeholder="enter email"
        />
        <input type="submit" />
          </form>
          <button onClick={handleFetch}>Fetch users</button>
          {fetchedData.map((elem) => (
              <div key={elem[0]}>
                  <h1>{ elem[1].userName}</h1>
                  <p>{elem[1].userEmail}</p>
                  <button onClick={()=>handleDelete(elem[0])}>Delete</button>
              </div>
          ))}
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<UserForm />);
