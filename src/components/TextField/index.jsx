import React from 'react';
import { Controller } from "react-hook-form";
import { Box, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import styles from './styles';

const TextFieldComponent = ({
    field,
    name,
    type,
    Icon,
    label,
    errors,
    placeholder,
}) => {
    const {onChange, onBlur, value, ref} = field;
    return (
        <>
            <Typography sx={styles.label}>{label}</Typography>
            <TextField
                error={errors}
                helperText={errors}
                fullWidth
                name={name}
                placeholder={placeholder}
                type={type}
                id={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                sx={styles.inputStyles}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {Icon}
                    </InputAdornment>
                ),
                }}
            />
        </>
    );
};

export default TextFieldComponent;