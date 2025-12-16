import {useFetch} from "../hooks/useFetch";

const User = () => {
  const { data, isLoading, errorMessage } =
    useFetch(`https://jsonplaceholder.typicode.com/users`, []);

    console.log("This is data:"+data);

  return (
    <div>
      <h2>Details about Users:</h2>

      {isLoading && <h2>Page is Loading</h2>}
      {errorMessage && <h2>Error is: {errorMessage}</h2>}

      <div>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name}<br />
            Phone: {user.phone}<br />
            Email: {user.email}
            <hr/>
          </li>
        ))}
      </div>
    </div>
  );
};

export default User;
