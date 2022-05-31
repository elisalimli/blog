import React, { Fragment, useEffect, useState } from 'react';
import { BsFacebook, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';

import ButtonLink from '@/ui/links/ButtonLink';
import Tooltip from '@/ui/Tooltip';

const shareOnButtonsData = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u',
    as: BsFacebook,
  },
  {
    name: 'Whatsapp',

    url: 'whatsapp://send?text',
    as: BsWhatsapp,
  },
  {
    name: 'Telegram',

    url: 'https://t.me/share?url',
    as: BsTelegram,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/intent/tweet?text',
    as: FiTwitter,
  },
];

const ShareOnButtons: React.FC = () => {
  const [url, setUrl] = useState<Location>();

  useEffect(() => {
    setUrl(window?.location);
  }, []);

  return (
    <Fragment>
      {shareOnButtonsData.map((b) => {
        const C = b.as;
        return (
          <span key={`share-on-${b.name}`} className='relative'>
            <span data-tip data-for={b.name}>
              <ButtonLink
                variant='ghost'
                className='p-0'
                target='_blank'
                href={`${b.url}=${url}`}
              >
                <C size={24} />
              </ButtonLink>
            </span>
            <Tooltip
              className='custom_react_component_tooltip'
              id={b.name}
              place='top'
            >
              Share on {b.name}
            </Tooltip>
          </span>
        );
      })}
    </Fragment>
  );
};

export default ShareOnButtons;
