import React, { Component, useEffect } from 'react';
import { Image, Center, VStack, Button, Box, Square, Circle , Collapse, Flex, Text, Tooltip, useDisclosure, useColorModeValue,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useBreakpointValue,
} from "@chakra-ui/react";

const NavigationDrawer = (props) => {

    return (
        <Drawer placement={useBreakpointValue({base: "bottom", md: "right"})} onClose={props.onClose} isOpen={props.isOpen} size="xs"//Change placement to switch between right and bottom
        >
            <DrawerOverlay>
            <DrawerContent borderRadius={useBreakpointValue({base: "30px 30px 0 0", md: "20px 0 0 0"})}>
                <DrawerHeader borderBottomWidth="1px">
                <Text fontFamily="Russo One" fontSize="35px">Navigation 🪐</Text>
                </DrawerHeader>
                <DrawerBody>
                <Text fontFamily="Audiowide" fontSize="20px" as="a" href='/'>🏠 Home</Text> <br/>
                <Text fontFamily="Audiowide" fontSize="20px" as="a" href='/resume'>📰 Resume</Text> <br/>
                <Text fontFamily="Audiowide" fontSize="20px" as="a" href='/favorites'>⭐ Favorites</Text> <br/>
                <Text fontFamily="Audiowide" fontSize="20px" as="a" href='/it-was-worth-a-try'>🚧 Construction</Text>
                </DrawerBody>
            </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

export default NavigationDrawer;