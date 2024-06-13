import { Flex, Avatar, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { timeAgo } from "../../util/timeAgo"
import useUserProfileStore from "../../store/userProfileStore"

const Caption = ({ post }) => {
    const userProfile = useUserProfileStore((state) => state.userProfile)
    return (
        <Flex gap={4} alignItems="flex-start">
            <Link to={`/${userProfile.username}`}>
                <Avatar src={userProfile.profilePicURL} size={"sm"} />
            </Link>
            <Flex direction={"column"} flex={1}>
                <Flex gap={2} alignItems={"baseline"}>
                    <Link to={`/${userProfile.username}`}>
                        <Text fontWeight={"bold"} fontSize={"sm"}>
                            {userProfile.username}
                        </Text>
                    </Link>
                    <Text fontSize={"sm"}>
                        {post.caption}
                    </Text>
                </Flex>
                <Text color={"gray"} fontSize={"xs"}>
                    {timeAgo(post.createdAt)}
                </Text>
            </Flex>
        </Flex>
    )
}

export default Caption