interface PersonalLayoutProps {
  children: React.ReactNode;
}

export default function PersonalLayout({ children }: PersonalLayoutProps) {
  return <main className="pt-10">{children}</main>;
}
