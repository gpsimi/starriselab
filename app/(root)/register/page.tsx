import RegisterForm from '@/components/RegisterPage/register-form'
import RegisterHero from '@/components/RegisterPage/register-hero'
import React from 'react'

const page = () => {
  return (
    <section>
      <RegisterHero />
      <RegisterForm />
    </section>
  )
}

export default page