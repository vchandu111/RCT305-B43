import '../Styles/table.css'

function Todotable(props) {
  console.log(props.data);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((todo) => (
              <tr>
                  <td>{todo.id }</td>
                  <td>{todo.title }</td>
                  <td className={todo.completed ? "success" : "fail"}>{todo.completed ? "Done" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Todotable;
