import Layout from '../components/layouts'
import auth from '../garbage/middleware/auth'

export const getServerSideProps = auth(async function ({ req, res }) {
  const { user } = req.token

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { user },
  }
})

const Profile = ({ user }) => {
  return (

    <Layout>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export default Profile