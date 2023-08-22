async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  console.log(data);
  return data.data;
}

export default async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="border mt-32 mx-10 rounded">
      <h1 className="text-center py-10">User details</h1>
      <div>
        <div className="w-full flex justify-center">
          <img className="rounded" src={user.avatar} alt={user.first_name} />
        </div>
        <div className="text-center pt-2">
          <h2>ID: {user.id}</h2>
          <h2>
            Name: {user.first_name} {user.last_name}
          </h2>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}
