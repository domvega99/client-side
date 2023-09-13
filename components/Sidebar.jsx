import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <div>
      <div>
        <ul className="sidebar">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#">Subsystems</Link></li>
          <li><Link href="#">Role</Link></li>
          <li><Link href="/users">Users</Link></li>
          <li><button>Logout</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
