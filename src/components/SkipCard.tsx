import React from 'react';
import { Calendar, Truck, MapPin, AlertTriangle } from 'lucide-react';
import { Skip } from '@/types/skip';

interface SkipCardProps {
    skip: Skip;
    isSelected: boolean;
    onClick: () => void;
}

export const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onClick }) => {
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
    const binBags = skip.size <= 8 ? `${skip.size * 5}-${skip.size * 7} bin bags` : `${skip.size * 10}+ bin bags`;

    return (
        <div
            onClick={onClick}
            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md
                ${isSelected
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md'
                    : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'}`}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-3">
                        {skip.size}
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{skip.size} Yard Skip</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{binBags}</p>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">£{skip.price_before_vat}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">+VAT</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Total: £{totalPrice.toFixed(2)} (inc. VAT)</div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {skip.hire_period_days} days
                </div>
                <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                    <Truck className="w-4 h-4 mr-2" />
                    Free delivery
                </div>
                <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className={skip.allowed_on_road ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}>
                        {skip.allowed_on_road ? 'Road OK' : 'Private only'}
                    </span>
                </div>
                <div className="flex items-center text-sm">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    <span className={skip.allows_heavy_waste ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}>
                        {skip.allows_heavy_waste ? 'Heavy waste' : 'Light materials only'}
                    </span>
                </div>
            </div>

            {isSelected && (
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Select This Skip
                </button>
            )}
        </div>
    );
};