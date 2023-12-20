import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const TextFieldComponent = ({ field, name, type, Icon, label, errors, placeholder }) => {
    const {onChange, onBlur, value, ref} = field;
    return (
        <>
            <label className="block text-sm leading-6 text-darkness-100">{label}</label>
            <TextField
                error={errors}
                fullWidth
                name={name}
                placeholder={placeholder}
                type={type}
                id={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                className={`[&>.MuiInputBase-root]:rounded-xl block w-full bg-darkness-500 rounded-xl [&>.MuiInputBase-root]:border-none !border-none px-3.5  [&>.MuiInputBase-root]:py-0 [&>.MuiInputBase-root]:text-darkness-100  ring-0 ring-inset [&>.MuiInputBase-root]:placeholder:text-gray-400 [&>.MuiInputBase-root]:focus:ring-0 sm:text-sm sm:leading-6`}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {Icon}
                        </InputAdornment>
                    ),
                }}
            />
            {errors ?
                <div>
                    <p className='text-xs mt-1 text-red-500'>{errors}</p>
                </div>
            : null
            }
        </>
    );
};

export default TextFieldComponent;