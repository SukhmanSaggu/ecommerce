const Wrapping = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Gift Wrapping
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Add a thoughtful finishing touch to your order with our gift
            wrapping service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Premium Paper
              </h2>
              <p className="text-gray-600">
                Clean, attractive wrapping for birthdays, holidays, and special
                occasions.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Custom Message
              </h2>
              <p className="text-gray-600">
                Include a short personal note with your wrapped gift.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Ready to Give
              </h2>
              <p className="text-gray-600">
                Your order arrives neatly packed and ready for the recipient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapping;
