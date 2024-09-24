import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  items,
  onDelItem,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description, 'zh-Hant-TW'));
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDelItem={onDelItem}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>預設排序</option>
          <option value='description'>筆畫排序</option>
          <option value='packed'>打包排序</option>
        </select>
        <button onClick={onClearList}>清除清單</button>
      </div>
    </div>
  );
}
