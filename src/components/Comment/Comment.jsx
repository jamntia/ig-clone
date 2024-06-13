import { Flex, Avatar, Text } from "@chakra-ui/react"

const Comment = ({ comment }) => {
    return (
        <Flex gap={4}>
            {/* <Avatar src={profilePic} name={username} size={"sm"} /> */}
            <Flex direction={"column"}>
                <Flex gap={2}>
                    <Text fontWeight={"bold"} fontSize={12}>
                        {/* {username} */}
                    </Text>
                    <Text color={"gray.500"} fontSize={14}>
                        {comment.comment}
                    </Text>
                </Flex>
                <Text color={"gray"} fontSize={12}>
                    {/* {createdAt} */}
                </Text>
            </Flex>
        </Flex>
    )
}

export default Comment