import React from 'react';
import { Icon } from '@iconify/react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import reactIcon from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';

const Text = () => (
  <>
    I’m currently working as a {' '}
    <span className="font-bold text-gray-800">frontend developer</span> and improving myself in{' '}
    <span className="font-bold text-gray-800">UI/UX designer</span>. I enjoy building web/mobile apps using
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={<Icon icon={reactIcon} />}
    >
      React
    </HighlightedTextIcon>
    . I'm also an active student in PUCPR.
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
