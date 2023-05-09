const ContentContainer: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => (
  <div className={`max-w-screen-3xl px-8 ${className}`}>{children}</div>
);

export default ContentContainer;
