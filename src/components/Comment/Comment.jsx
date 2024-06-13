import { Flex, Avatar, Text, Skeleton, SkeletonCircle, Link } from "@chakra-ui/react"
import useGetUserProfileById from "../../hooks/useGetUserProfileById"
import { timeAgo } from "../../util/timeAgo"

const Comment = ({ comment }) => {
    const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy)
    if (isLoading) return <CommentSkeleton />

    return (
        <Flex alignItems="flex-start" gap={4}>
            <Link to={`/${userProfile.username}`}>
                <Avatar src={userProfile.profilePicURL} size="sm" />
            </Link>
            <Flex direction="column" flex="1">
                <Flex alignItems="baseline" gap={2}>
                    <Link to={`/${userProfile.username}`}>
                        <Text fontWeight="bold" fontSize="sm">
                            {userProfile.username}
                        </Text>
                    </Link>
                    <Text fontSize="sm">
                        {comment.comment}
                    </Text>
                </Flex>
                <Text color="gray" fontSize="xs">
                    {timeAgo(comment.createdAt)}
                </Text>
            </Flex>
        </Flex>
    )
}

export default Comment

const CommentSkeleton = () => {
    return (
        <Flex gap={4} w={"full"} alignItems={"center"}>
            <SkeletonCircle h={10} w='10' />
            <Flex gap={1} flexDir={"column"}>
                <Skeleton height={2} width={100} />
                <Skeleton height={2} width={50} />
            </Flex>
        </Flex>
    );
};