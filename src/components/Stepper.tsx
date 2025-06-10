import React from 'react';
import { MapPin, Trash2, Truck, FileText, Calendar, CreditCard, CheckCircle } from 'lucide-react';

export const Stepper: React.FC = () => {
    const steps = [
        { id: 1, label: 'Postcode', completed: true, icon: <MapPin className="w-4 h-4" /> },
        { id: 2, label: 'Waste Type', completed: true, icon: <Trash2 className="w-4 h-4" /> },
        { id: 3, label: 'Select Skip', current: true, icon: <Truck className="w-4 h-4" /> },
        { id: 4, label: 'Permit Check', completed: false, icon: <FileText className="w-4 h-4" /> },
        { id: 5, label: 'Choose Date', completed: false, icon: <Calendar className="w-4 h-4" /> },
        { id: 6, label: 'Payment', completed: false, icon: <CreditCard className="w-4 h-4" /> }
    ];

    return (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center overflow-x-auto">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-center flex-shrink-0">
                            <div className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
                                    ${step.completed ? 'bg-green-500 text-white' :
                                        step.current ? 'bg-blue-500 text-white' :
                                            'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                                    {step.completed ? <CheckCircle className="w-5 h-5" /> : step.icon}
                                </div>
                                <span className={`ml-3 text-sm font-medium hidden sm:block whitespace-nowrap
                                    ${step.current ? 'text-blue-600 dark:text-blue-400' :
                                        step.completed ? 'text-green-600 dark:text-green-400' :
                                            'text-gray-500 dark:text-gray-400'}`}>
                                    {step.label}
                                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`w-8 sm:w-16 h-0.5 mx-4 transition-all duration-200
                                    ${step.completed ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};