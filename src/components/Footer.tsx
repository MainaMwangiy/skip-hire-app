import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Skip } from '@/types/skip';

interface FooterProps {
    selectedSkip: Skip | null;
    onBack: () => void;
    onContinue: () => void;
}

export const Footer: React.FC<FooterProps> = ({ selectedSkip, onBack, onContinue }) => {
    return (
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-4 mt-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center">
                        {selectedSkip && (
                            <>
                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Selected:</span>
                                <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                                    {selectedSkip.size} Yard Skip - £{selectedSkip.price_before_vat}
                                </span>
                            </>
                        )}
                    </div>
                    <div className="flex space-x-3">
                        <button
                            onClick={onBack}
                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </button>
                        <button
                            onClick={onContinue}
                            disabled={!selectedSkip}
                            className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center
                                ${selectedSkip
                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'}`}
                        >
                            Continue to Permits
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};