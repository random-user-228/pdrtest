import {auth} from '@/auth'
import SignOut from '../logout'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import SignIn from '../sign_in'

export default async function ProfileMenu(){
    const session = await auth()
    if(!session){<button
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200"
      >
        Вхід
      </button>}
    if(!session?.user?.image){return <><SignIn/></>}else{
    return(<>
      <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="userimage"
                    className="h-8 w-8 rounded-full"
                    src={session.user.image}
                 />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <Link href="/auth/profile" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Змінити категорію
                  </Link>
                </MenuItem>
                <MenuItem>
                <SignOut/>
                </MenuItem>
              </MenuItems>
            </Menu>
    
    </>)}
}