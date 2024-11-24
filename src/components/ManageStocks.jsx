

const ManageStocks = () => {
  const stocks = [
    {
      id: 1,
      name: 'Aspirin',
      category: 'Medication',
      code: 'MED001',
      expirationDate: '2023-12-31',
      manufacturer: 'Pharma Co',
      quantity: 50,
    },
  ];

  return (
    <div className="manage-stocks">
      <h2>Manage Stocks</h2>
      <table className="stocks-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Code</th>
            <th>Expiration Date</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.id}>
              <td>{stock.id}</td>
              <td>{stock.name}</td>
              <td>{stock.category}</td>
              <td>{stock.code}</td>
              <td>{stock.expirationDate}</td>
              <td>{stock.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStocks;