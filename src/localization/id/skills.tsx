import React from 'react';
import { Icon } from '@iconify/react';
import phpIcon from '@iconify/icons-logos/php';
import javascriptIcon from '@iconify/icons-logos/javascript';
import { HighlightedTextIcon } from 'components/molecules';

const Text = () => (
  <>
    Passei cerca de um ano aprimorando minhas habilidades no{' '}
    <span className="font-bold text-gray-800">desenvolvimento de sites</span> usando{' '}
    {' '}
    <HighlightedTextIcon
      className="mx-2"
      icon={<Icon icon={javascriptIcon} style={{ fontSize: '24px' }} />}
    >
      Javascript
    </HighlightedTextIcon>{' '}
    agora estou bastante confiante em criar aplicativos usando estas ferramentas:
  </>
);

const skills = {
  text: <Text />,
};

export default skills;
