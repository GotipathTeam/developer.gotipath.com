import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const StreamAPI: React.FC = () => {
    return (
        <API
            basePath="api/stream"
            layout="sidebar"
            hideExport={true}
            logo="https://images.prismic.io/gotipath-website/9d1ecca4-d282-4eb1-a7d3-9534700edcf8_gotiPath_logo.png"
            apiDescriptionUrl="https://raw.githubusercontent.com/GotipathTeam/api-docs/main/stream.yaml"
        />
    );
};
