const styles = {
    boxWrapper: {
        bgcolor: (theme) => theme.palette.solid.dark5,
        backdropFilter: 'blur(12px)',
        borderRadius: '26px',
        padding: '36px 36px',
    },
    HeroBackground: {
        position: 'absolute',
        opacity: 0.4,
        width: 'calc( 100vw - 6px )',
        margin: '-95% 0 0',
        height: 'calc( 100vw - 6px )',
        svg: {
            width: 'calc( 100vw - 6px )',
            height: 'calc( 100vw - 6px )',
            position: 'absolute',
        }
    },

    thirdBackgroundLayer: {
        zIndex: -1,
        position: 'absolute',
        width: 'calc( 100vw - 6px )',
        height: 'calc( 100vw - 6px )',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(8,7,26,1) 24%, rgba(19,17,55,1) 40%, rgba(21,18,59,1) 46%, rgba(22,20,64,1) 58%, rgba(27,22,101,1) 62%, rgba(37,29,193,1) 70%, rgba(36,146,226,1) 80%)',
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
};

export default styles;