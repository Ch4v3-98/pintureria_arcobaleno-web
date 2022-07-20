type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function Heading({ children, ...props }: HeaderProps) {
  return (
    <>
      <h1 {...props}>{children}</h1>
      <hr />
    </>
  );
}
