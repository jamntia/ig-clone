import { create } from "zustand"

const useUserProfileStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    /* Updates number of posts in profile header */
    addPost: (post) => set(state => ({
        userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] }
    }))
}))

export default useUserProfileStore