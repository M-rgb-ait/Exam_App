type PageProps = {
  params: { id: string };
};

export default function Page({ params: { id } }: PageProps) {
  return <>Product: {id}</>;
}
