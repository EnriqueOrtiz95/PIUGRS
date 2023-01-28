import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonPlayers = (length) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-white">
        {[...Array(length)].map((_, i) => {
          return (
            <div className="flex items-center gap-6" key={i}>
              <Skeleton
                width={50}
                height={50}
                circle={true}
                highlightColor="#444"
              />
              <Skeleton
                width={150}
                borderRadius={"0.25rem"}
                highlightColor="#444"
              />
            </div>
          );
        })}
      </div>
  )
}

export default SkeletonPlayers