import React from 'react';
import NextLink from 'next/link';
import Sidebar from '../components/Sidebar';
import FavoritesBox from '../components/FavoritesBox';
import BB8Lottie from '../components/BB8Lottie';


import { Box, Flex, Text, Center, Square, Circle, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"


const Favorites = () => {
  const { colorMode, toggleColorMode } = useColorMode();  
  return(
    <div id="Website">
      <title>Andrew's Website</title>
      <Sidebar />
      <Box bg={useColorModeValue("blue.100", "gray.900")} w="85vw" right="0vw" position="absolute" display="inline-block" className="Background" pt="6%" textAlign={["center", "center", "left", "left"]}>
        <Text as="b" fontSize={["30px", "50px", "60px", "80px"]} fontFamily="Lexend Deca" mb="10px" mx={["20px", "20px", "40px", "80px"]}>
        Things I Like
        </Text>

        <Flex padding="3%" h="100%" w="85vw" wrap="wrap" justifyContent="center">
          <Accordion allowToggle w="100%">
            <AccordionItem mb="20px">
              <AccordionButton borderY="4px solid">
                <Box flex="1" textAlign="center">
                  <Text fontSize={["15px", "30px", "30px", "40px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]}>
                  Entertainment
                  </Text>  
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex pb={4} justifyContent="center" w="100%" wrap="wrap">
                <FavoritesBox href="https://www.starwars.com/databank" src="https://images.wallpapersden.com/image/download/star-wars-the-mandalorian-4k-minimalist_a21tbG2UmZqaraWkpJRnZWltrWdlaW0.jpg" alt="Star Wars"/>
                <FavoritesBox href="https://www.marvel.com/articles" src="https://3.bp.blogspot.com/-MZ2WEgcPcoo/WvFoyQSeLwI/AAAAAAAAF1I/8-nMb4EXoQQ6dugaq8j53SVoo_1ZX08GwCLcBGAs/s00/Thanos-With-Gauntlet-Infinity-Stones-02.jpg" alt="Marvel"/>
                <FavoritesBox href="https://xkcd.com/1288/" src="https://lh3.googleusercontent.com/Px91d1tMaIWKk11zl-DM-aTEYYvS9kBvUdzPT_zBS0AbmJzc6aLEueafEHLN-Gd199Jf_cSBUA=w640-h400-e365-rj-sc0x00ffffff" alt="XKCD"/>
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem mb="20px">
              <AccordionButton borderY="4px solid">
                <Box flex="1" textAlign="center">
                  <Text fontSize={["15px", "30px", "30px", "40px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]}>
                  Technologies
                  </Text>  
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex pb={4} justifyContent="center" w="100%" wrap="wrap">
                <FavoritesBox href="https://lottiefiles.com/popular" src="https://airbnb.io/lottie/images/logo.webp" alt="Lottie"/>
                <FavoritesBox /*href="https://chakra-ui.com/"*/ onClick={toggleColorMode} src="https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg" alt="Chakra"/> 
                <FavoritesBox href="https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website" src="https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png" alt="NextJS"/> 
                <FavoritesBox href="https://redux.js.org/" src="data:image/png;base64,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" alt="Redux"/> 
                <FavoritesBox href="https://unity.com/" src="https://fadigeorge.files.wordpress.com/2010/02/unity_01.jpg" alt="Unity"/> 
                </Flex>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton borderY="4px solid">
                <Box flex="1" textAlign="center">
                  <Text fontSize={["15px", "30px", "30px", "40px"]} fontFamily="Lexend Deca" my="10px" mx={["20px", "20px", "40px", "80px"]}>
                  Interests
                  </Text>  
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Flex pb={4} justifyContent="center" w="100%" wrap="wrap">
                <FavoritesBox href="https://www.spacex.com/human-spaceflight/" src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/hcukymjitstff5zm_1590834618.jpeg?tr=w-812,h-464" alt="Outer Space"/>
                {/* <FavoritesBox href="https://scratch.mit.edu/" src="https://res.cloudinary.com/primer-cloudinary/image/upload/f_auto,q_auto/fo5kxbquaidutqbha6hz" alt="Scratch"/> */}
                <FavoritesBox href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO" src="https://images-na.ssl-images-amazon.com/images/I/610iXon9LfL._SX342_.jpg" alt="Virtual Reality"/> 
                <FavoritesBox href="https://ultimatefrisbeehq.com/rules-of-ultimate/" src="https://cdn.ultiworld.com/wordpress/wp-content/uploads/2018/10/Screen-Shot-2018-10-30-at-4.08.45-PM-300x269.png" alt="Ultimate Frisbee"/> 
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <BB8Lottie/>
        </Flex>
      </Box>
    </div>
  );
}

export default Favorites;
