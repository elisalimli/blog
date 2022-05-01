import Tag from '@/components/Posts/Post/Tags/Tag';
import { TagSnippetFragment } from '@/generated/graphql';
import React, { Fragment } from 'react';

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
