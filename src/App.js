import React from 'react';

import Title from './Title';
import List from './List';
import Form from './Form';

const App = () =>  {
    const name = 'こうが';
    return (
        <React.Fragment>
            <Title name={name}/>
            <List />
            <Form />
            </React.Fragment>
    );
};
export default App;