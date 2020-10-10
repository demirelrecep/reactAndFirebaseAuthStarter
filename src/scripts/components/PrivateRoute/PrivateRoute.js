import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PetContext } from '../../../context/petContext';

const PrivateRoute = ({ children, ...props }) => {
    const { currentUser } = useContext(PetContext);
    return (
        <Route
            {...props}
            render={() => 
                currentUser ? (
                    children
                ) : ( <Redirect to='/login' />)
            }
        />
    );
};
export default PrivateRoute;

