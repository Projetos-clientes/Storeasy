import * as React from 'react';
import './Form.scss';
import Searchbar from './Searchbar';
import Propriedades from './db.json'
const Form = () => {

    return (
        <>
            <Searchbar data={Propriedades} />
        </>
    );
};

export default Form;
