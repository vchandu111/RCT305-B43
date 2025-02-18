//imgSrc, name, email
function UserCard(props) {
    console.log(props)
  const { name, email, imgSrc, isRegistered, age } = props.userDetails;

  return (
    <div className="card">
      <img src={imgSrc} alt="" />
      <h3 style={{ color: "teal", fontSize: "30px" }}>{name}</h3>
      <p>{email ? email : "No email registered"}</p>
      <p style={{ color: isRegistered ? "green" : "red" }}>
        {isRegistered ? "Registered User" : "Not Registered"}
      </p>
      <p>
        {age > 18
          ? "Eligible for license"
          : age == 18
          ? "Just eligible"
          : "Not eligible"}
      </p>
    </div>
  );
}

const users = [
  {
    imgSrc: "https://placehold.co/200x200",
    name: "Anirudh",
    email: "",
    isRegistered: true,
    age: 30,
  },
  {
    imgSrc: "https://placehold.co/100x100",
    name: "ankit",
    email: "ankit@gmail.com",
    isRegistered: false,
    age: 18,
  },

  {
    imgSrc: "https://placehold.co/50x50",
    name: "Vikas",
    email: "vikas@gmail.com",
    isRegistered: true,
    age: 12,
  },
];

//props/attributes in react
function App() {
  return (
    <div>
      {users.map((user) => (
        <UserCard userDetails={user} />
      ))}
    </div>
    
  );
}

<ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
