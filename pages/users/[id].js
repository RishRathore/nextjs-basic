import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";

//  CLIENT SIDE DATA FETCHING (same as we do generally with react)

const UserDetailPage = () => {
  const [userData, setUserData] = useState(null);
  const { query } = useRouter()
 
  useEffect(() => {
    const fetchData = async () => {
      const userId = query.id;
      const data = await (await fetch(`https://dummyjson.com/users/${userId}`)).json()
      if (data) setUserData(data)
    }

    fetchData();
  }, [])

  return (
    <Layout title="User Details">
      <h1 className="text-center text-lime-400 text-5xl font-bold my-8">
        User Detail Page
      </h1>
      <div
        className="bg-zinc-900 w-1/2 mx-auto my-2 py-4 px-8 rounded-lg hover:bg-zinc-800 flex justify-between items-center"
      >
        {!userData ? 
          <p className="text-gray-400 text-lg font-bold">
            Fetching...
          </p> :
          <div>
            <h2 className="text-lime-400 text-2xl font-bold">
              {userData.firstName} {userData.lastName} 
            </h2>
            <p className="text-gray-400 text-lg font-bold">
              Age: {userData.age}
            </p>
            <p className="text-gray-400 text-lg font-bold">
              email: {userData.email}
            </p>
            <p className="text-gray-400 text-lg font-bold">
              DOB: {userData.birthDate}
            </p>
          </div>
          }
      </div>
    </Layout>
  )
}

export default UserDetailPage;