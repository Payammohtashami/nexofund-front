const styles = {
    HeroBackground: {
        position: 'absolute',
        width: 'calc( 100vw - 6px )',
        margin: '-100% 0 0',
        height: 'calc( 100vw - 6px )',
        svg: {
            width: 'calc( 100vw - 6px )',
            height: 'calc( 100vw - 6px )',
            position: 'absolute',
        }
    },
    stickyWrapper: {
        top: 0,
        height: '100vh',
        width: '100%',
        zIndex: 1,
        position: 'sticky',
    },
            
    secendBackgroundLayer: {
        position: 'absolute',
        zIndex: -2,
        bottom: 0,
        width: 'calc( 100vw - 6px )',
        height: 'calc( 100vw - 6px )',
        borderRadius: '50%',
        filter: 'blur(60px)',
        background: 'radial-gradient(circle, rgba(38,44,198,1) 65%, rgba(39,57,201,1) 70%, rgba(52,203,236,1) 100%)',
        animation: 'widthSpin 3s linear infinite',
    },
    
    thirdBackgroundLayer: {
        zIndex: -1,
        position: 'absolute',
        width: 'calc( 100vw - 6px )',
        height: 'calc( 100vw - 6px )',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(8,7,26,1) 24%, rgba(19,17,55,1) 40%, rgba(21,18,59,1) 46%, rgba(22,20,64,1) 58%, rgba(27,22,101,1) 62%, rgba(37,29,193,1) 70%, rgba(36,146,226,1) 80%)',
    },
    
    heroTitle: {
        fontFamily: 'Futura !important',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 700,
        letterSpacing: '24px',
        color: (theme) => theme.palette.mode.dark1,
        fontSize: 33,
    },
    heroDescription: {
        mr: "24px",
        textAlign: 'center',
        fontSize: 20,
        lineHeight: "40px",
        fontWeight: 400,
        color: (theme) => theme.palette.mode.dark1,
    },
    
    circleButton: {
        boxShadow: '0px 0px 16px 0px #2817ED80',
        background: 'linear-gradient(180deg, rgba(140, 220, 255, 0.1) 0%, rgba(140, 220, 255, 0) 100%)',
        border: '1px solid #2817ED',
        textTransform: 'none',
        fontSize: 16,
        borderRadius: '50%',
        height: '80px',
        width: '80px',
        backdropFilter: 'blur(12px)',
        filter: 'drop-shadow(0px 0px 11px rgba(40, 23, 237, 0.5))',
        color: '#FFF',
        position: 'relative',
        top: '24px',
        left: '24px',
        zIndex: 2,
    },
    
    buttonWrapper: {
        background: 'linear-gradient(100.84deg, #2817ED 4.93%, #AB30D7 84.35%)',
        borderRadius: '16px',
        p: '1px',
    },
    
    backButton: {
        background: '#08071A',
        fontSize: 16,
        textTransform: 'none',
        borderRadius: 'inherit',
        color: '#FFF',
        padding: '12px 36px',
    },
};

export default styles;