const styles = {
    label: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '30px',
    },
    inputStyles: {
        '& .MuiInputBase-root': {
            background: (theme) => theme.palette.solid.dark5,
            backdropFilter: 'blur(12px)',
            borderRadius: "16px",
            border: '1px solid',
            borderColor: '#414974',
            "&.Mui-focused fieldset": {
                border: 'none !important'
            },
            '& input': {
                borderRadius: "16px",
                py: 1.6,
                color: '#FFF',
                '&::placeholder': {
                    color: (theme) => theme.palette.solid.dark1,
                },
            }
        },
        '& .MuiFormHelperText-contained': {
            color: "red",
            mx: 0,
        },
        border: "none",
        "select:-webkit-autofill, input:-webkit-autofill, textarea:-webkit-autofill": {
            WebkitBoxShadow: (theme) => `0 0 0 1000px ${theme.palette.solid.dark5} inset`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: (theme) => `${theme.palette.solid.dark5} !important`,
        },
    }
};

export default styles;