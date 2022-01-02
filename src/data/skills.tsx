import React from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';
import laravelIcon from '@iconify/icons-logos/laravel';
import codeigniterIcon from '@iconify/icons-logos/codeigniter';
import postCssIcon from '@iconify/icons-logos/postcss';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import nextjsIcon from '@iconify/icons-logos/nextjs';

const skills = [
  <a href="https://reactjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={reactIcon} />
  </a>,
    <a href="https://nextjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={nextjsIcon} />
  </a>,
  <a href="https://tailwindcss.com" className="focus:outline-none">
    <Icon className="text-4xl" icon={tailwindcssIcon} />
  </a>,
  <a href="https://getboostrap.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={bootstrapIcon} />
  </a>,
];

export default skills;
