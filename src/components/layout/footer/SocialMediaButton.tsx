type SocialMediaButtonProps = {
  icon: React.ReactNode;
  href: string;
  title: string;
};

const SocialMediaButton = ({ icon, href, title }: SocialMediaButtonProps) => {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-media-button ${title.toLowerCase()}`}
    >
      {icon}
    </a>
  );
};

export default SocialMediaButton;
