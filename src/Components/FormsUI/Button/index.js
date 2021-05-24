import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react';


const ButtonWrapper = ({
    children,
    ...otherProps
}) => {

    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        variant: 'contained',
        color: 'secondary',
        fullWidth: true,
        onClick: handleSubmit
    };

    return (
        <Button
            {...configButton}
        >
            {children}
        </Button>
    )
}

export default ButtonWrapper;