import React, { useState } from 'react'

function SearchAndFilter({ onSearch, onPriceFilter, onSort }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 })
  const [sortBy, setSortBy] = useState("default")

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handlePriceChange = (type, value) => {
    const newRange = { ...priceRange, [type]: value }
    setPriceRange(newRange) 
    onPriceFilter(newRange)
  }

  const handleSortChange = (e) => {
    const value = e.target.value
    setSortBy(value)
    onSort(value)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            جستجو در محصولات
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="نام محصول را وارد کنید..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            محدوده قیمت (تومان)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="حداقل"
              value={priceRange.min}
              onChange={(e) => handlePriceChange('min', Number(e.target.value))}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="حداکثر"
              value={priceRange.max}
              onChange={(e) => handlePriceChange('max', Number(e.target.value))}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Sort Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            مرتب‌سازی
          </label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">پیش‌فرض</option>
            <option value="price-asc">قیمت: کم به زیاد</option>
            <option value="price-desc">قیمت: زیاد به کم</option>
            <option value="name-asc">نام: الفبایی</option>
            <option value="name-desc">نام: نزولی</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchAndFilter