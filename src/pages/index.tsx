import type { NextPage } from 'next'
import Dashboard from '../screens/dashboard'
import Layout from '../shared/components/layout/index.componet'


const Home: NextPage = () => {
  return (
    <>
     <Layout>
      <Dashboard />
     </Layout>
    </>
  )
}

export default Home
