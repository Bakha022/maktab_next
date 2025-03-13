'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { useState } from 'react';

function LanguageDropDown() {
  const [isSelect, setIsSelect] = useState('uz');
  const [dropDown, setDropDown] = useState(false);

  const handleLang = (val: string) => {
    setIsSelect(val);
    setDropDown(false);
  };

  return (
    <DropdownMenu open={dropDown}>
      <DropdownMenuTrigger
        className="flex items-center gap-2"
        onClick={() => setDropDown(true)}
      >
        {isSelect.toUpperCase()}
        <Image priority alt="lang" width={20} height={20} src={'/UZ.svg'} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onInteractOutside={() => setDropDown(false)}
        className="w-auto min-w-0"
      >
        <DropdownMenuItem
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleLang('uz')}
        >
          UZ{' '}
          <Image priority alt="lang" width={20} height={20} src={'/UZ.svg'} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleLang('ru')}
        >
          RU
          <Image priority alt="lang" width={20} height={20} src={'/RU.svg'} />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleLang('en')}
        >
          EN
          <Image priority alt="lang" width={20} height={20} src={'/EN.svg'} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageDropDown;
