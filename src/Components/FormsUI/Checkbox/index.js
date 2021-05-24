import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';
import React from 'react';

const CheckboxWrapper = ({
    name,
    label,
    legend,
    ...otherProps
}) => {

    const {setFieldValue} = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = evt => {
        const { checked } = evt.target;
        setFieldValue(name, checked);
    }

    const configCheckbox = {
        ...field,
        onChange: handleChange
    }

    const configFormControl = {};
    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
    }

    return (
        <FormControl>
            <FormLabel component="legend">{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel 
                    control={<Checkbox {...configCheckbox} />}
                    label={label}
                />
            </FormGroup>
        </FormControl>
    )
};

export default CheckboxWrapper;