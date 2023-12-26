// Chakra Imports
import { Box, Center, Text, HStack, Image, Flex } from "@chakra-ui/react";

// Components
import Header from "@/components/Header";
import TechStack from "@/components/TechStack";

// Icons
import { FaMusic } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRust,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";
import { LuCode2 } from "react-icons/lu";
import { FaReact } from "react-icons/fa";

// Fonts
import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Header header="Home" />
      <Center>
        <Box
          w={{ base: "100vw", md: "70vw" }} // Set to 100vw on smaller screens
          p={"20px"}
          className={`${JetBrainsMono.className}`}
        >
          <HStack>
            <Image
              style={{ borderRadius: "50%" }}
              src="/profile.png"
              boxSize={"55px"}
              placeholder="blur"
              loading="lazy"
            />
            <Text fontSize="3xl">
              Hey, I'm{" "}
              <Text
                as="span"
                className="username-gradient"
                /* color={"#877ab7"} */
                fontSize="3xl"
                _hover={{
                  borderBottom: "#877ab7 2px solid",
                  transition: "border-bottom 0.08s linear",
                }}
              >
                durpyneko
              </Text>
              !
            </Text>
          </HStack>
          <Flex
            maxW={"6xl"}
            p={"2px"}
            margin={"10px"}
            backgroundColor={"#332e45"}
            borderRadius={"8px"}
          >
            <Text fontSize={"md"} p={"20px"}>
              {
                "Welcome to my site! I like to play video games and program in my freetime. I mostly program in JavaScript/Typescript and know a little how Rust works. I have a good understanding of Python."
              }
            </Text>
          </Flex>
          <Box px={{ base: "0", md: "50px" }}>
            <Box>
              <HStack>
                <Text as={LuCode2} fontSize={"2xl"}></Text>
                <Text fontSize={"2xl"} as={"u"}>
                  Tech stack
                </Text>
              </HStack>
              <TechStack />
            </Box>
            <Box mt={"10px"}>
              <HStack>
                <Text as={FaMusic} fontSize={"lg"}></Text>
                <Text fontSize={"2xl"} as={"u"}>
                  Music
                </Text>
              </HStack>
              <Text>• DnB, Breakcore</Text>
              <Text>• Black Metal, Djent</Text>
              <Text>• Techno</Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
}
