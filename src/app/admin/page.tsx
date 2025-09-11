import { getAllVideos } from '@/utils/apiCalls/videos'

const Admin = async () => {
    const videos = await getAllVideos()

    console.log(videos)

    return (
        <div className="flex justify-center items-center h-screen">
            👋 Admin
        </div>
    )
}

export default Admin
