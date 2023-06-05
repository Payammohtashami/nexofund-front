import React from 'react';
import { Controller } from "react-hook-form";
import { Box, TextField, InputAdornment, IconButton, Typography } from '@mui/material';
import styles from './styles';

const TextFieldComponent = ({
    name,
    type,
    Icon,
    label,
    errors,
    control,
    placeholder,
}) => {
    return (
        <>
            <Typography sx={styles.label}>{label}</Typography>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                    error={errors?.password}
                    helperText={errors?.password?.message}
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
                )}
            />
        </>
    );
};

export default TextFieldComponent;