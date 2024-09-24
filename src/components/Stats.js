export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>
          開始在您的行李清單上添加物品🚀
          <br />
          Start adding some items to your packing list
        </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {percentage === 100 ? (
          <>
            {`一切就緒! 準備出發✈️`}
            <br />
            {`You got everything! Ready to go`}
          </>
        ) : (
          <>
            {`👜您有${numItems}個項目，您已打包${numPacked}個 進度:(${percentage}%)`}
            <br />
            {`You have ${numItems} item on your list, and you already packed ${numPacked} (${percentage}%)`}
          </>
        )}
      </em>
    </footer>
  );
}
