import React from 'react';
import { Calendar, Truck, MapPin, AlertTriangle, Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { Skip } from '@/types/skip';

interface SkipDetailsProps {
    skip: Skip | null;
}

export const SkipDetails: React.FC<SkipDetailsProps> = ({ skip }) => {
    if (!skip) {
        return (
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
                <div className="text-gray-400 dark:text-gray-500 mb-4">
                    <Truck className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Select a Skip</h3>
                <p className="text-gray-600 dark:text-gray-400">Choose a skip from the list to view its details</p>
            </div>
        );
    }

    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
    const vatAmount = skip.price_before_vat * (skip.vat / 100);
    const binBags = skip.size <= 8 ? `${skip.size * 5}-${skip.size * 7}` : `${skip.size * 10}+`;

    return (
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{skip.size} Yard Skip</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Perfect for your project needs</p>
                </div>
                <div className="text-right mt-4 sm:mt-0">
                    <div className="text-4xl font-bold text-green-600">£{skip.price_before_vat}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">+VAT (£{vatAmount.toFixed(2)})</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">Total: £{totalPrice.toFixed(2)}</div>
                </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Hire Period</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{skip.hire_period_days} Days</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Truck className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Delivery</div>
                    <div className="font-semibold text-green-600">Free</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <MapPin className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Road Placement</div>
                    <div className={`font-semibold ${skip.allowed_on_road ? 'text-green-600' : 'text-red-600'}`}>
                        {skip.allowed_on_road ? 'Allowed' : 'Not Allowed'}
                    </div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Heavy Waste</div>
                    <div className={`font-semibold ${skip.allows_heavy_waste ? 'text-green-600' : 'text-red-600'}`}>
                        {skip.allows_heavy_waste ? 'Suitable' : 'Not Suitable'}
                    </div>
                </div>
            </div>

            {/* Capacity & Usage Section */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    Capacity & Usage
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Capacity</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{binBags} bin bags</p>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recommended For</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                            {skip.size <= 6 ? 'Small home projects, garden clearance, single room renovation' :
                                skip.size <= 12 ? 'Medium projects, home renovations, garage clearouts' :
                                    skip.size <= 16 ? 'Large home projects, multiple room renovations' :
                                        'Commercial projects, major construction, industrial waste disposal'}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Whats Included</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                Free delivery & collection
                            </li>
                            <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                {skip.hire_period_days}-day hire period
                            </li>
                            <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                Weight allowance included
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Placement & Restrictions Section */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">i</span>
                    </div>
                    Placement & Restrictions
                </h3>

                <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-green-500" />
                            Road Placement
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {skip.allowed_on_road
                                ? 'This skip can be placed on public roads with proper permits from your local council.'
                                : 'This skip must be placed on private property only (driveway, garden, etc.).'}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2 text-blue-500" />
                            Heavy Materials
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {skip.allows_heavy_waste
                                ? 'Suitable for heavy materials like soil, rubble, concrete, bricks, and tiles.'
                                : 'Suitable for light materials only - household waste, garden waste, wood, and plastics.'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Insights Section */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                    Insights
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <Users className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                        <div className="text-sm text-gray-600 dark:text-gray-400">Popularity</div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                            {skip.size <= 8 ? 'High' : skip.size <= 16 ? 'Medium' : 'Low'}
                        </div>
                    </div>
                    <div>
                        <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
                        <div className="text-sm text-gray-600 dark:text-gray-400">Value Rating</div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                            {skip.price_before_vat <= 350 ? 'Excellent' : skip.price_before_vat <= 500 ? 'Good' : 'Fair'}
                        </div>
                    </div>
                    <div>
                        <Clock className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                        <div className="text-sm text-gray-600 dark:text-gray-400">Similar Options</div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                            {skip.size <= 8 ? '3 available' : skip.size <= 16 ? '2 available' : '1 available'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium px-3 py-1 rounded-full">
                    {skip.size} Cubic Yards
                </span>
                {skip.allowed_on_road && (
                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
                        Road Placement Available
                    </span>
                )}
                {skip.allows_heavy_waste && (
                    <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium px-3 py-1 rounded-full">
                        Heavy Waste Approved
                    </span>
                )}
            </div>

            {/* Large Skip Notice */}
            {skip.size >= 20 && (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                    <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Large Skip Notice</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This skip requires adequate access space and may have additional placement restrictions. Our team will contact you to confirm suitability.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};