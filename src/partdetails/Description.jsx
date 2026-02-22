function Description() {
  return (
    <div className="flex border border-gray-300 rounded-lg bg-white p-4 w-full max-w-2xl shadow-sm h-30">
      <div className="flex flex-row justify-between items-start w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-semibold text-gray-900">
            Children English Teacher - ($250-$300) - Toul Kork
          </h1>
          <p className="text-sm text-gray-600">
            Experience: 1 Year(s) | $200 - $500
          </p>
          <span className="text-sm text-blue-600">
            📍 Phnom Penh, Khan Toul Kork
          </span>
        </div>
        
        <div className="flex flex-col items-end gap-1 ml-4">
          <button className="px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors">
            Full Time
          </button>
          <span className="text-xs text-gray-500">7hours ago</span>
        </div>
      </div>
    </div>
  );
}

export default Description;