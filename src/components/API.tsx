import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const StreamAPI: React.FC = () => {
    return (
        <API
            basePath="api/stream"
            layout="sidebar"
            hideExport={true}
            apiDescriptionUrl="https://raw.githubusercontent.com/GotipathTeam/api-docs/main/stream.yaml"
        />
    );
};
