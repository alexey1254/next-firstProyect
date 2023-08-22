"use client";
import { useRouter } from "next/navigation";
function Users({ users }) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-3 w-full place-items-center mt-10">
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <div className="border rounded m-2 cursor-pointer">
            <img src={user.avatar} alt={user.first_name} />
            <h5 className="text-center">
              {user.first_name} {user.last_name}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
