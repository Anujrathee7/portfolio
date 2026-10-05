/** What was done, one line each, ticked off the scale. */
export function Points({ items }: { items: string[] }) {
  return (
    <ul className="points" role="list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
