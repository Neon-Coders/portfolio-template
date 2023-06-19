interface WorkLayoutProps {
  children: React.ReactNode;
}

export default function WorkLayout({ children }: WorkLayoutProps) {
  return <main className="pt-10">{children}</main>;
}
