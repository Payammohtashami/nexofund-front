const styles = {
    cardWrapper: {
        padding: '24px 42px',
        bgcolor: 'rgba(234, 233, 255, 0.08)',
        border: '1px solid #414974',
        // backdropFilter: 'blur(12px)',
        borderRadius: '24px',
    },
    
    titleText: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: '30px',
        color: (theme) => theme.palette.solid.dark1,
        mb: '16px',
    },

    commentText: {
        fontSize: 18,
        fontWeight: 400,
        color: (theme) => theme.palette.solid.dark2,
        lineHeight: '32px',
        mb: '16px',
    },
    
    ratingWrapper: {
        mb: '12px',
        svg: {
            height: '20px',
            width: '20px',
        },
    },
    
    createdAtText: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '18px',
        color: (theme) => theme.palette.solid.dark1,
        mb: '12px',
    },
    
    ownerText: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '18px', 
        color: (theme) => theme.palette.solid.dark1,
    },
    
    jobText: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '18px', 
        color: (theme) => theme.palette.solid.dark1,
    },
}

export default styles;