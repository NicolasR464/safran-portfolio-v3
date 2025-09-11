import { VideoSchema } from '@/types/video/schema'
import { localApiInstance } from '@/utils/apiCalls/settings'
import { localApiEndpoints } from '@/utils/constants/endpoints'

export const getAllVideos = async (): Promise<VideoSchema[]> => {
    const response = await localApiInstance.get(localApiEndpoints.VIDEOS)

    // Return
    return response.data
}
