import { Box, createStyles, Text } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
    container: {
        textAlign: 'center',
        backgroundColor: "black",
        color: "rgb(93, 236, 255)",
        height: 100,
        width: 384,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 500,
    },
}));

const Header: React.FC<{ title: string }> = ({ title }) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.container}>
            <Text className={classes.heading}>{title}</Text>
        </Box>
    );
};

export default React.memo(Header);
