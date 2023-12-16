const styles = {
    wrapper: {
        padding: '32px 0 0',
    },
    
    divider: {
        height: '72px',
        width: '1px',
        background: (theme) => theme.palette.solid?.dark1,
    },

    menuItem: {
        color: (theme) => theme.palette.solid?.dark1,
        fontSize: {xs: 12, md: 14},
    },
    
    logoWrapper: {
        display: 'flex',
        justifyContent: 'center',
        mt: '16px',
        svg: {
            width: '48px',
            height: '48px',
        },
    },
    
    heroTitle: {
        fontFamily: 'Futura !important',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 700,
        letterSpacing: '20px',
        color: (theme) => theme.palette.solid?.dark1,
        fontSize: 16,
        mb: '24px',
    },

    whiteButton: {
        borderRadius: '16px',
        color: '#FFF',
        fontWeight: 400,
        fontSize: 16,
        textTransform: 'none',
        padding: '8px 24px',
        border: '1px solid #2817ED',
        '&:hover': {
            boxShadow: '0px 0px 16px 0px #2817ED80',
            background: 'linear-gradient(180deg, rgba(140, 220, 255, 0.1) 0%, rgba(140, 220, 255, 0) 100%)',
            backdropFilter: 'blur(12px)',
            filter: 'drop-shadow(0px 0px 11px rgba(40, 23, 237, 0.5))',
            color: '#FFF',
        },
    },
    
    blueButton: {
        borderRadius: '16px',
        bgcolor: 'primary.main',
        color: '#FFF',
        fontWeight: 400,
        fontSize: '16px',
        textTransform: 'none',
        padding: '8px 24px',
        border: '1px solid transparent',
        boxShadow: '0px 0px 16px 0px #2817ED80',
        '&:hover': {
            background: 'linear-gradient(180deg, rgba(140, 220, 255, 0.1) 0%, rgba(140, 220, 255, 0) 100%)',
            borderColor: '#2817ED',
            backdropFilter: 'blur(12px)',
            filter: 'drop-shadow(0px 0px 11px rgba(40, 23, 237, 0.5))',
        }
    },
    
    
    planetWrapper: {
        position: 'relative',
    },
    
    HeroBackground: {
        position: 'absolute',
        width: '360px',
        right: '-120px',
        top: 0,
        height: '360px',
        svg: {
            width: '360px',
            height: '360px',
            position: 'absolute',
        }
    },
    
    secendBackgroundLayer: {
        bottom: 0,
        zIndex: -2,
        width: '360px',
        height: '360px',
        borderRadius: '50%',
        position: 'absolute',
        filter: 'blur(60px)',
        background: 'radial-gradient(circle, rgba(38,44,198,1) 65%, rgba(39,57,201,1) 70%, rgba(52,203,236,1) 100%)',
        animation: 'widthSpin 3s linear infinite',
    },
    
    thirdBackgroundLayer: {
        zIndex: -1,
        position: 'absolute',
        width: '360px',
        height: '360px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(8,7,26,1) 24%, rgba(19,17,55,1) 40%, rgba(21,18,59,1) 46%, rgba(22,20,64,1) 58%, rgba(27,22,101,1) 62%, rgba(37,29,193,1) 70%, rgba(36,146,226,1) 80%)',
    },
        
};

export default styles;