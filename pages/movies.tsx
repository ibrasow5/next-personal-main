import Image, { StaticImageData } from "next/image";

import imageLC from "../public/images/movies/Lucifer.png";
import imageSuits from "../public/images/movies/Suits.png";
import imageRPO from "../public/images/movies/Ready Player One.jpg";
import imageBL from "../public/images/movies/Blacklist.jpg";
import imageAV from "../public/images/movies/Avengers.png";
import imageBTTF from "../public/images/movies/Back to the Future.png";


export async function getStaticProps() {
  return {
    props: {
      pageId: "movies",
      metadata: {
        title: "Ibrahima Ndendé SOW",
        description:
          "Get to know Ibrahima Ndendé SOW and the things he loves by visiting his personal website.",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com",
        },
      },
    },
  };
}
type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};
function ProjectItem(props: ProjectItemProps) {
  let { name, url, urlDisplay, imageSrc: image } = props;
  return (
    <li>
      <a href={url}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src={image} alt={name} />
          <div className="px-6 py-4">
            <div className="text-xl mb-2">{name}</div>
          </div>
          <div className="px-6 pb-4">
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1
text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              🔗 {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
export default function Movies() {
  return (
    <div className="mt-4 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Movies I Recommend</h1>
        <p className="text-base mt-2 text-zinc-600">
          I would like to share with you some movies that I loved. !
        </p>
      </header>
      <div className="mt-10">
        <h2 className="text-2xl text-red-800">Movies</h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12
gap-y-16 mt-8"
        >
          <ProjectItem
            name={"Ready Player One"}
            url={"https://www.netflix.com/title/80211726"}
            urlDisplay={"Netflix"}
            imageSrc={imageRPO}
          />
          <ProjectItem
            name={"Avengers : Endgame"}
            url={"https://tv.apple.com/fr/movie/avengers--endgame/umc.cmc.4ao9tm6b6rz4sy7yj5v13ltf8"}
            urlDisplay={"Apple TV"}
            imageSrc={imageAV}
          />
          <ProjectItem
            name={"Back to the Future"}
            url={"https://www.netflix.com/title/60010110"}
            urlDisplay={"Netflix"}
            imageSrc={imageBTTF}
          />
        </ul>
      </div>
      <div className="mt-16">
        <h2 className="text-2xl text-red-800">Series</h2>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12
gap-y-16 mt-8"
        >
          <ProjectItem
            name={"Blacklist"}
            url={"https://www.netflix.com/title/70281312"}
            urlDisplay={"Netflix"}
            imageSrc={imageBL}
          />
          <ProjectItem
            name={"Suits"}
            url={"https://www.netflix.com/title/70195800"}
            urlDisplay={"Netflix"}
            imageSrc={imageSuits}
          />
          <ProjectItem
            name={"Lucifer"}
            url={"https://www.netflix.com/title/80057918"}
            urlDisplay={"Netflix"}
            imageSrc={imageLC}
          />
        </ul>
      </div>
    </div>
  );
}
