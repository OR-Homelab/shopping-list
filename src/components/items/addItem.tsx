export function AddItem() {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 px-55">Add Item</h1>

      <form className="space-y-6 bg-white p-6 rounded-2xl shadow-md" action="">
        <div>
          <label
            htmlFor="itemName"
            className="block text-sm font-medium text-dark-text"
          >
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            placeholder="Name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="itemAmount"
            className="block text-sm font-medium text-dark-text"
          >
            Amount
          </label>
          <input
            type="number"
            id="itemAmount"
            name="itemAmount"
            placeholder="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="itemPrice"
            className="block text-sm font-medium text-dark-text"
          >
            Price
          </label>
          <input
            type="number"
            id="itemPrice"
            name="itemPrice"
            placeholder="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-button text-text font-medium py-2 px-4 rounded-md hover:bg-button-hover transition"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
