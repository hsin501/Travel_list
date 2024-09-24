export default function Item({ item, onDelItem, onToggleItems }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}&nbsp;
        {item.description}
      </span>
      <button onClick={() => onDelItem(item.id)}>❌</button>
    </li>
  );
}
