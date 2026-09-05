import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const isCourseListPage =
    window.location.pathname.includes('/course-list') ||
    window.location.pathname.includes('/course/') ||
    window.location.pathname.includes('/my-enrollments') ||
    window.location.pathname.includes('/player/')

  const { openSignIn } = useClerk()
  const { user } = useUser()

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'
      }`}
    >

      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-24 lg:w-32 cursor-pointer"
        />
      </Link>

      {/* Desktop View */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">

        <div className="flex items-center gap-5">
          {user && <>

          <Link
            to="/educator"
            className="cursor-pointer hover:text-blue-600"
          >
            Become Educator
          </Link>

          <span>|</span>

          <Link
            to="/my-enrollments"
            className="cursor-pointer hover:text-blue-600"
          >
            My Enrollments
          </Link>
          </>}
          

        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-blue-700"
          >
            Create Account
          </button>
        )}

      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center gap-3 text-gray-500 text-sm">

        <div className="flex items-center gap-2">
        {user && <>

          <Link
            to="/educator"
            className="cursor-pointer hover:text-blue-600"
          >
            Become Educator
          </Link>

          <span>|</span>

          <Link
            to="/my-enrollments"
            className="cursor-pointer hover:text-blue-600"
          >
            My Enrollments
          </Link>
          </>}

        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="cursor-pointer"
          >
            <img
              src={assets.user_icon}
              alt="User"
              className="w-8 h-8"
            />
          </button>
        )}

      </div>

    </div>
  )
}

export default Navbar