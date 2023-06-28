export default function RelatedBox({ onSelectedItem }) {
  const relateds = [
    {
      id: 1,
      related: "دوست",
    },
    {
      id: 2,
      related: "اعضای خانواده",
    },
    {
      id: 3,
      related: "همکار",
    },
    {
      id: 4,
      related: "فامیل",
    },
  ];
  return (
    <ul className="related-box">
      {relateds.map((item) => (
        <li key={item.id} onClick={()=>onSelectedItem(item.related)}>
          {item.related}
        </li>
      ))}
    </ul>
  );
}
