import { getServerSession } from 'next-auth'
import React from 'react'

const Home = async () => {
  const session = await getServerSession()
  console.log(session)
  return <div>Home</div>
}

export default Home
