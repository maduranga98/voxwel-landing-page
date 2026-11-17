export default function DeLayout({ children }: { children: React.ReactNode }) {
  // The root layout already renders <html> and <body>; only mark the language here.
  return <div lang="de">{children}</div>;
}
