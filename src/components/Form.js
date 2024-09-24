import { useState } from 'react';

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }
  function handleQuantity(e) {
    setQuantity(+e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>您的旅行需要什麼😍</h3>
      <select value={quantity} onChange={handleQuantity}>
        {/* <option value={1}>1</option> */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='輸入項目'
        value={description}
        onChange={handleDescription}
      />
      <button>Add</button>
    </form>
  );
}
