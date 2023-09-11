import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";

//  SERVER SIDE DATA FETCHING 

const UsersPage = ({ usersData }) => {
  const { push } = useRouter()

  return (
    <Layout title="Users">
      <h1 className="text-center text-lime-400 text-5xl font-bold my-8">
        Users Page
      </h1>
      {usersData && usersData.map((user) => (
        <div
          key={user.id}
          className="bg-zinc-900 w-1/2 mx-auto my-2 py-4 px-8 rounded-lg hover:bg-zinc-800 flex justify-between items-center"
          onClick={() => { push(`/users/${user.id}`) }}
        >
          <div>
            <h2 className="text-lime-400 text-2xl font-bold">
              {user.firstName} {user.lastName} 
            </h2>
            <p className="text-gray-400 text-lg font-bold">
              Age: {user.age}
            </p>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json()
  const usersData = data?.users.slice(0,10)

  return {
    props: {
      usersData
    }
  }
}

export default UsersPage