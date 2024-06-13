import { create } from "zustand"

const useUserProfileStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    /* Updates number of posts in profile header */
    addPost: (post) => set(state => ({
        userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] }
    })),
    deletePost: (postId) => set((state) => ({
        userProfile: {
            ...state.userProfile,
            posts: state.userProfile.posts.filter((id) => id !== postId),
        },
    }))
}))

export default useUserProfileStore