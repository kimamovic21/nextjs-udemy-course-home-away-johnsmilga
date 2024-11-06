import { LuAlignLeft } from 'react-icons/lu';
import { Button } from '../ui/button';
import { links } from '@/utils/links';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import UserIcon from './UserIcon';

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex gap-4 max-w-[100px]'>
          <LuAlignLeft className='w-6 h-6' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
        {links.map((link) => {
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;