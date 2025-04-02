export function AddItem() {
  return (
    <>
      <h1>Add item form</h1>
      <div className="row">
        <div className="col-75">
          <div className="border-b pb-12">
            <form action="">
              <div className="row">
                <div className="col-50">
                  <h2>Add item</h2>
                  <label htmlFor="itemName">
                    <i className="itemName "></i>Item name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    placeholder="itemName"
                  />

                  <label htmlFor="itemAmount">
                    <i className="itemAmount "></i>Item Amount
                  </label>
                  <input
                    type="text"
                    id="itemAmount"
                    name="itemAmount"
                    placeholder="itemAmount"
                  />

                  <label htmlFor="Price">
                    <i className="Price "></i>Price
                  </label>
                  <input
                    type="text"
                    id="itemPrice"
                    name="Price"
                    placeholder="Price"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex flex-row rounded-2xl bg-button hover:bg-button-hover p-3 pl-5 pr-5"
              >
                Add item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
