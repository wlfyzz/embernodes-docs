import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { FaGithub, FaDiscord, FaYoutube, FaEnvelope } from 'react-icons/fa';

const config: DocsThemeConfig = {
  logo: <span>Embernodes</span>,
  docsRepositoryBase: 'https://github.com/embernodes/docs',
  navbar: {
    extraContent: (
      <div style={{ display: 'flex', gap: '10px' }}>
        <a href="https://github.com/embernodes/docs">
          <FaGithub size={24} />
        </a>
        <a href="https://www.embernodes.com/discord">
          <FaDiscord size={24} />
        </a>
        <a href='https://www.embernodes.com/youtube'>
          <FaYoutube size={24} />
        </a>
        <a href='mailto:tom@embernodes.com'>
          <FaEnvelope size={24} />
        </a>
      </div>
    ),
  },
};

export default config;
