export default async function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="pt-32">{children}</section>;
}
