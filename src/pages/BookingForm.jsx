import React from "react";

const BookingForm = () => {
  const handleSave = () => {
    alert("Your booking is submitted!");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold leading-4">
  New <span className="border-b-4 border-red-800">Booking</span>
</h1>




          <div className="flex gap-4">
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
              NEW
            </button>
            <button
              onClick={handleSave} // Add this onClick handler
              className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* About Booking */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Booking</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Dates:</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="01/04/2025 - 01/05/2025"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Nights</label>
                  <input
                    type="number"
                    className="w-full border rounded-md p-2"
                    placeholder="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Guests</label>
                  <input
                    type="number"
                    className="w-full border rounded-md p-2"
                    placeholder="1"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Type, Room</label>
                <select className="w-full border rounded-md p-2">
                  <option>Single Room</option>
                  <option>Double Room</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Room number</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Hour</label>
                  <input type="text" className="w-full border rounded-md p-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Referral</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Nobeds.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Referral Order ID
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="1234"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Personal Code</label>
                <input type="text" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>

          {/* About Client */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Client</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Client or company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Full address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Dominican Republic"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-md p-2"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Comment</label>
                <textarea
                  className="w-full border rounded-md p-2"
                  placeholder="Add a comment..."
                />
              </div>
            </div>
          </div>

          {/* About Balance */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Balance</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="number"
                  className="w-full border rounded-md p-2"
                  placeholder="150.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Total</label>
                <input
                  type="number"
                  className="w-full border rounded-md p-2"
                  placeholder="150"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Paid</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Prepaid"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Balance</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Balance"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
