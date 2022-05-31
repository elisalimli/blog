import { TagSnippetFragment } from '@/generated/graphql';
import React, { Fragment } from 'react';
import Tag from '@/ui/Tag';

const Tags: React.FC<{ tags: TagSnippetFragment[] }> = ({ tags }) => {
  return (
    <Fragment>
      {tags?.map((tag) => (
        <Tag key={`post-tag-${tag.id}`} {...tag} />
      ))}
    </Fragment>
  );
};
export default Tags;
