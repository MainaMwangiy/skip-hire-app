import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Filters } from '@/types/skip';

interface FilterSectionProps {
    filters: Filters;
    setFilters: (filters: Filters) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ filters, setFilters }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex items-center mb-4">
                <ChevronDown className="w-5 h-5 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filter Options</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Skip Size</label>
                    <select
                        value={filters.skipSize}
                        onChange={(e) => setFilters({ ...filters, skipSize: e.target.value })}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">All sizes</option>
                        {[4, 6, 8, 10, 12, 14, 16, 20, 40].map(size => (
                            <option key={size} value={size.toString()}>{size} Yard</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Range</label>
                    <select
                        value={filters.priceRange}
                        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">All prices</option>
                        <option value="low">Under £400</option>
                        <option value="medium">£400 - £600</option>
                        <option value="high">Over £600</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Road Placement</label>
                    <select
                        value={filters.roadPlacement}
                        onChange={(e) => setFilters({ ...filters, roadPlacement: e.target.value })}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">All options</option>
                        <option value="road">Road OK</option>
                        <option value="private">Private only</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Waste Type</label>
                    <select
                        value={filters.wasteType}
                        onChange={(e) => setFilters({ ...filters, wasteType: e.target.value })}
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">All waste types</option>
                        <option value="heavy">Heavy waste OK</option>
                        <option value="light">Light waste only</option>
                    </select>
                </div>
            </div>
        </div>
    );
};