import { Box, VStack, Image, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';


const Authform = () => {
  const [isLogin, setIsLogin] = useState(true)
  return <>
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image src='/logo.png' h={24} cursor={"pointer"} alt="Instagram" />
        <Input
          placeholder='Email'
          fontSize={14}
          type="email"
        />
        <Input
          placeholder='Password'
          fontSize={14}
          type="password"
        />

        {!isLogin ? (
          <Input
            placeholder='Confirm Password'
            fontSize={14}
            type="password"
          />
        ) : null}
        <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
          {isLogin ? "Log in" : "Sign Up"}
        </Button>
      </VStack>

    </Box>
  </>
}

export default Authform