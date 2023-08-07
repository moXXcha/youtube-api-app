
type Props = {
  videoId: string | string[] | undefined
}
export const Player = (props: Props) => {

  return (
    <div>
      <iframe
        id="player"
        width={1000}
        height={600}
        src={"https://www.youtube.com/embed/" + props.videoId}
        allowFullScreen
      />
    </div>
  );
};
