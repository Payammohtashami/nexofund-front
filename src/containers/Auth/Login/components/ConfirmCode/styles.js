const styles = {
    loginText: {
        fontSize: 20,
        fontWeight: 600,
        lineHieght: "26px",
        color: (theme) => theme.palette.solid.dark1
    },
    fotgotPasswordButton: {
        color: 'primary.light',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '30px',
        width: 'fit-content',
        mb: '24px'
    },
    loginWithGooglButton: {
        bgcolor: '#FFF',
        display: 'flex',
        gap: '10px',
        height: '56px',
        color: (theme) => theme.palette.solid.dark6,
        borderRadius: '16px',
        width: '100%',
        border: '1px solid transparent',
        '&:hover': {
            color: '#FFF',
            bgcolor: 'rgba(140, 220, 255, 0.1)',
            boxShadow: '0px 0px 16px 0px #2817ED80',
            borderColor: '#2817ED',
            backdropFilter: 'blur(12px)',
            filter: 'drop-shadow(0px 0px 11px rgba(40, 23, 237, 0.5))',
        },
        '& img': {
            width: '32px'
        }
    },
    loginButton: {
        height: '56px',
        bgcolor: 'primary.main',
        color: (theme) => theme.palette.solid.dark1,
        borderRadius: '16px',
        width: '100%',
        border: '1px solid transparent',
        '&:hover': {
            bgcolor: 'rgba(140, 220, 255, 0.1)',
            boxShadow: '0px 0px 16px 0px #2817ED80',
            borderColor: '#2817ED',
            backdropFilter: 'blur(12px)',
            filter: 'drop-shadow(0px 0px 11px rgba(40, 23, 237, 0.5))',
        }
    },
    signUpText: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '30px',

    },
    descriptionText: {
        lineHeight: '30px',
        color: (theme) => theme.palette.solid.dark2,
    },
    inputsStyles: {
        '& > div': {
            display: 'flex',
            gap: '6px',
            '& input': {
                flex: '1',
                height: '56px',
                border: '1px solid',
                borderRadius: '16px',
                borderColor: '#414974',
                background: (theme) => theme.palette.solid.dark5,
                fontSize: '18px',
                fontWeight: 700,
            }
        }
    }
};

export default styles;