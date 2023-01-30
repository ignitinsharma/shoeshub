import { ReactNode } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { LocalMall } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  {
    title: "Home",
    id: 1,
    path: "/",
  },
  {
    title: "Mens",
    id: 2,
    path: "/mens",
  },
  {
    title: "Women",
    id: 3,
    path: "/women",
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        zIndex={9999}
        w={"100%"}
        position={"fixed"}
        bg={useColorModeValue("white")}
        px={4}
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <a style={{ fontWeight: "500" }} href="/" className="logo">
              &lt;ShoesHUB/&gt;
            </a>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link
                  style={{ fontWeight: "550", marginRight: "0.6rem" }}
                  fontSize="md"
                  _hover={{ textDecoration: "none" }}
                  href={link.path}
                  key={link.id}
                >
                  {link.title}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Box mr={4}>
              <Link href="">
                <SearchIcon />
              </Link>
            </Box>
            <Box mr={4}>
              <Link href="cart">
                <LocalMall />
              </Link>
            </Box>
            <Box mr={1}>
              <Link href="signup">
                <PersonIcon />
              </Link>
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link
                  style={{ fontWeight: "600" }}
                  href={link.path}
                  key={link.id}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
