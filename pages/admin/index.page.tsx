import AuthGuard from '@/components/HOC/authGuard'
import AuthLayout from '@/components/layout/authLayout'
import React from 'react'

function Admin() {
  return (
    <AuthLayout>
      <div>Admin</div>
    </AuthLayout>
  )
}

export default AuthGuard(Admin)