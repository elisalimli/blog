import React from 'react';
import { TagSnippetFragment } from '@/generated/graphql';
import Button from '@/ui/buttons/Button';
import UnstyledLink from '@/ui/links/UnstyledLink';

const Tag: React.FC<TagSnippetFragment> = ({ id, name }) => {
  return (
    <UnstyledLink
      className='text-center'
      key={`tag-${id}`}
      href={`/search?query=${name}`}
    >
      <Button className='rounded-lg border-0  bg-gray-100 bg-opacity-80 p-1 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-700'>
        {name}
      </Button>
    </UnstyledLink>
  );
};
export default Tag;
