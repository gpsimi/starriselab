import RegisterForm from '@/components/register-form'
import Form from '@/components/register-form'
import RegisterHero from '@/components/register-hero'
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