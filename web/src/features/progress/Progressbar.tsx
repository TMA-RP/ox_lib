import React from 'react';
import { Box, createStyles, Text } from '@mantine/core';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../utils/fetchNui';
import ScaleFade from '../../transitions/ScaleFade';
import type { ProgressbarProps } from '../../typings';

const useStyles = createStyles((theme) => ({
    container: {
        width: 350,
        height: '0.3em',
        borderRadius: '9999999999px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        boxShadow: 'lg',
        overflow: 'hidden',
        transition: 'margin-bottom .25s ease',
    },
    toUpper: {
        marginBottom: '7em',
    },
    wrapper: {
        width: '100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        position: 'absolute',
    },
    bar: {
        height: '100%',
        backgroundColor: 'rgb(93, 236, 255)',
    },
    labelWrapper: {
        position: 'absolute',
        display: 'flex',
        width: 350,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        maxWidth: 350,
        padding: 8,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontSize: 20,
        color: theme.colors.gray[3],
        textShadow: theme.shadows.sm,
    },
}));

const Progressbar: React.FC = () => {
    const { classes } = useStyles();
    const [visible, setVisible] = React.useState(false);
    const [label, setLabel] = React.useState('');
    const [duration, setDuration] = React.useState(0);
    const [upper, setUpper] = React.useState(false);
    const [handle, setHandle] = React.useState<NodeJS.Timeout>();

    useNuiEvent('progressCancel', () => setVisible(false));

    useNuiEvent<ProgressbarProps>('progress', (data) => {
        setVisible(true);
        setLabel(data.label);
        setDuration(data.duration);
    });

    useNuiEvent('makeUpper', () => {
        if (handle) clearTimeout(handle);
        setUpper(!upper)
        setHandle(setTimeout(() => setUpper(false), 6000));
    });

    return (
        <>
            <Box className={classes.wrapper}>
                <ScaleFade visible={visible} onExitComplete={() => fetchNui('progressComplete')}>
                    <Box className={`${classes.container} ${upper ? classes.toUpper : ''}`}>
                        <Box
                            className={classes.bar}
                            onAnimationEnd={() => setVisible(false)}
                            sx={{
                                animation: 'progress-bar linear',
                                animationDuration: `${duration}ms`,
                            }}
                        >
                            <Box className={classes.labelWrapper}>
                                <Text className={classes.label}>{label}</Text>
                            </Box>
                        </Box>
                    </Box>
                </ScaleFade>
            </Box>
        </>
    );
};

export default Progressbar;
