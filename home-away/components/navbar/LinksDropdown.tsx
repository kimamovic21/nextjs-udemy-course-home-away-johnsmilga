import { LuAlignLeft } from 'react-icons/lu';
import { auth } from '@clerk/nextjs/server';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { 
  SignedOut, 
  SignedIn, 
  SignInButton, 
  SignUpButton 
} from '@clerk/nextjs';
import Link from 'next/link';
import UserIcon from './UserIcon';
import SignOutLink from './SignOutLink';

function LinksDropdown() {
  const { userId } = auth();
  const isAdminUser = userId === process.env.ADMIN_USER_ID;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Login</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        <SignedIn>
          {links?.map((link) => {
            if (link.label === 'admin' && !isAdminUser) {
              return null;
            };

            return (
              <Link
                key={link.href}
                href={link.href}
                className="capitalize w-full"
              >
                <DropdownMenuItem>
                  {link.label}
                </DropdownMenuItem>
              </Link>
            );
          })}

          <DropdownMenuSeparator />
          
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;