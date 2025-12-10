import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
        thumbnail:"/thumbnail.jpg",
        title:"Sample Video Title",
        channelName:"Sample Channel",
        views:"1M views",
        uploadedAt:"2 days ago"
    },
    {
        thumbnail:"/thumbnail.jpg",
        title:"Sample Video Title",
        channelName:"Sample Channel",
        views:"1M views",
        uploadedAt:"2 days ago"
    },
    {
        thumbnail:"/thumbnail.jpg",
        title:"Sample Video Title",
        channelName:"Sample Channel",
        views:"1M views",
        uploadedAt:"2 days ago"
    },
    {
        thumbnail:"/thumbnail.jpg",
        title:"Sample Video Title",
        channelName:"Sample Channel",
        views:"1M views",
        uploadedAt:"2 days ago"
    },
    {
        thumbnail:"/thumbnail.jpg",
        title:"Sample Video Title",
        channelName:"Sample Channel",
        views:"1M views",
        uploadedAt:"2 days ago"
    },
    {
        thumbnail:"/thumbnail.jpg",
        title:"Sample Video Title",
        channelName:"Sample Channel",
        views:"1M views",
        uploadedAt:"2 days ago"
    },
    {
        thumbnail:"/thumbnail.jpg",
        title:"Sample Video Title",
        channelName:"Sample Channel",
        views:"1M views",
        uploadedAt:"2 days ago"
    }      
]

export const VideoGrid = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => (
                <VideoCard
                    thumbnail={video.thumbnail}
                    title={video.title}
                    channelName={video.channelName}
                    views={video.views}
                    uploadedAt={video.uploadedAt}
                />
            ))}
        </div>
    )
}