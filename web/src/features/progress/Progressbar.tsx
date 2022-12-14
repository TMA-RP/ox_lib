import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../utils/fetchNui';

export interface ProgressbarProps {
    label: string;
    duration: number;
}

const Progressbar: React.FC = () => {
    const [visible, setVisible] = React.useState(false);
    const [label, setLabel] = React.useState('');
    const [duration, setDuration] = React.useState(0);
    const [cancelled, setCancelled] = React.useState(false);
    const [upper, setUpper] = React.useState(false);
    const [handle, setHandle] = React.useState<NodeJS.Timeout>();

    const progressComplete = () => {
        setVisible(false);
        fetchNui('progressComplete');
    };

    const progressCancel = () => {
        setCancelled(true);
        setVisible(false);
    };

    useNuiEvent('progressCancel', progressCancel);

    useNuiEvent<ProgressbarProps>('progress', (data) => {
        setCancelled(false);
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
        <Flex h="2.5vw" w="100%" position="absolute" bottom="0" justifyContent="center" alignItems="center" className={`progressbarWrapper ${upper ? "toUpper" : ""}`}>
            <Box width={350}>
                {visible && (
                    <Box
                        height="0.3em"
                        bg="rgba(0, 0, 0, 0.6)"
                        textAlign="center"
                        borderRadius="9999999999px"
                        boxShadow="lg"
                        overflow="hidden"
                    >
                        <Box
                            height="0.3em"
                            onAnimationEnd={progressComplete}
                            sx={
                                !cancelled
                                    ? {
                                        width: '0%',
                                        backgroundColor: 'rgb(93, 236, 255)',
                                        animation: 'progress-bar linear',
                                        animationDuration: `${duration}ms`,
                                    }
                                    : {
                                        // Currently unused
                                        width: '100%',
                                        animationPlayState: 'paused',
                                        backgroundColor: 'rgba(0, 0, 0, .5)',
                                    }
                            }
                        />
                        <Text
                            fontFamily="Inter"
                            fontSize="1.1em"
                            fontWeight="500"
                            textShadow="0px 0px 5px rgba(0, 0, 0, 0.6)"
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -1.8em)"
                        >
                            {label}
                        </Text>
                    </Box>
                )}
            </Box>
        </Flex>
    );
};

export default Progressbar;
