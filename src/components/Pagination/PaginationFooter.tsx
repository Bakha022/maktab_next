import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const PaginationFooter = () => {
  return (
    <Pagination>
      <PaginationContent className="w-full flex justify-between items-center">
        <PaginationItem>
          <Button
            className="border p-2 sm:p-auto sm:border-none"
            variant={'ghost'}
          >
            <ArrowLeft />
            <span className="hidden sm:inline-block">Oldingi</span>
          </Button>
        </PaginationItem>

        <div className="hidden sm:flex justify-center !gap-0 !sm:gap-2 items-center">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
        </div>

        <p className="block sm:hidden text-sm font-inter font-normal leading-5">
          Page 1 of 10
        </p>

        <PaginationItem className="flex items-center">
          <Button
            className="border p-2 sm:p-auto sm:border-none"
            variant={'ghost'}
          >
            <span className="hidden sm:inline-block">Keyingi</span>
            <ArrowRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationFooter;
