export function VideoCard(props:any){
    return(
        <div className="p-3">
            <img src="/thumbnail.jpg" alt="Video Thumbnail" className="rounded-xl" />
            <div className="grid grid-cols-15 pt-2">
                <div className="col-span-1 ">
                    <img className={"rounded-full w-20 h-20"} src ={props.thumbnail} alt="Thumbnail"></img>
                </div>
                <div className="col-span-14 ">
                    <div >
                        {props.title}
                    </div>
                    <div className="text-gray-400 text-base" >
                        {props.channelName}
                    </div>
                    <div className="text-gray-400 text-base" >
                        {props.views} | {props.uploadedAt}
                    </div>
                </div>
            </div>
        </div>
    )
}