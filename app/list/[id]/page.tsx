export default function ListIdPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>List ID: {params.id}</h1>
      <p>This is the list page with ID: {params.id}</p>
    </div>
  );
}
