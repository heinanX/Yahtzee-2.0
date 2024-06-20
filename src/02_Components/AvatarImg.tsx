const AvatarImg = ({ url, player }: { url: string; player: number }) => {
  return <img src={url} alt={"PlayerAvatar" + player} className="h-14" />;
};

export default AvatarImg;
