import React from 'react'
import Form from '../Components/Form'
import Header from '../Components/Header'
function Login() {
  return (
    <div className='h-[100vh] bg-gradient-to-t from-[#08AEEA] to-[#2AF598] flex flex-col'>
    <Header />
    <main className='flex flex-auto  justify-center items-center align-middle '>
      <Form />
    </main>
    </div>
  )
}

export default Login
