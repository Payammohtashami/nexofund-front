const styles = {
    wrapper: {
        mb: '36px',
        width: '100%',
        border: '1px solid', 
        borderRadius: '26px',
        padding: '16px 24px',
        backdropFilter: 'blur(12px)',
        bgcolor: (theme) => theme.palette.solid.dark5,
        borderColor: (theme) => theme.palette.solid.dark5,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: '39px',
        mb: '8px',
    },
    submitButton: {
        px: 4,
        height: '100%',
        minHeight: 50,
        color: '#08071A',
        borderRadius: '16px',
        bgcolor: (theme) => theme.palette.green.default,
        '&:hover': {
            color: '#FFF',
        }
    },
    itemTitle: {
        color: '#A5A2B5',
        fontSize: '16px',
    },
    itemInputValue: {
        mt: '4px',
        borderRadius: '16px',
        '& .MuiInputBase-root': {
            border: '1px solid',
            borderRadius: "16px",
            borderColor: '#08071A66',
            backdropFilter: 'blur(12px)',
            background: '#08071A66',
            "&.Mui-focused fieldset": {
                borderColor: (theme) => theme.palette.solid.dark7
            },
            '&:hover': {
                borderColor: (theme) => theme.palette.solid.dark7,
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
    },
    description: {
        gap: '6px',
        display: 'flex',
        fontWeight: 600,
        lineHeight: '30px',
        alignItems: 'center',
        color: '#A5A2B5',
        'span': {
            fontWeight: 400,
            fontSize: 20,
            color: '#DFDEEF',
        }
    },

    descriptionWrapper: {
        p: '8px 24px',
        mt: '24px',
        bgcolor: (theme) => theme.palette.solid.dark5,
    },

    analysDescription: {
        fontSize: 16,
        fontWeight: 400,
        color: '#DFDEEF',
    },

    analysStats: {
        fontSize: 20,
        fontWeight: 400,
        color: '#DFDEEF',
    },
    defaultMode: {
        bgcolor: '#08071A66',
        borderRadius: '16px',
        borderColor: 'transparent',
        color: '#DFDEEF',
    },

    buyButton: {
        color: (theme) => theme.palette.green.default,
        borderColor: (theme) => theme.palette.green.default,
        borderRadius: '16px',
        bgcolor: '#08071A66',
        '&:hover': {
            borderColor: (theme) => theme.palette.green.default,
        }
    },
    sellButton: {
        color: (theme) => theme.palette.red.default,
        borderColor: (theme) => theme.palette.red.default,
        borderRadius: '16px',
        bgcolor: '#08071A66',
        '&:hover': {
            borderColor: (theme) => theme.palette.red.default,
        }
    },
};

export default styles;