import React from 'react';

const AppContext = React.createContext({
    words: [],
    phrases: [],
    user: {}
});

export default AppContext;