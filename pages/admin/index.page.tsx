import AuthGuard from '@/components/HOC/authGuard'
import React from 'react'

function Admin() {
  return (
    <div>Admin</div>
  )
}

export default AuthGuard(Admin)