import {AppBar} from "@/components/AppBar"
import {VideoGrid} from "@/components/VideoGrid"
import App from "./_app";

export default function Home() {
  return (
    <div>
      <AppBar />
      <VideoGrid />
    </div>
  );
}
