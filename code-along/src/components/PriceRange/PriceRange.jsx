import React from 'react';

const PriceRange = () => {
    return (
        <div className="bg-gray-200 mb-4 py-4 px-6">
            <h4 className="font-krona text-sm mb-2">select price</h4>
            <div className="flex justify-between">
                <div className="text-center">
                    <input
                        name="min"
                        id="min"
                        type="text"
                        className="w-20 p-2 text-center  text-sm focus:ring-2 focus:ring-yellow focus:ring-inset caret-yellow outline-none"
                        placeholder="min"
                    />
                    <label className="text-xs" htmlFor="min">
                        min
                    </label>
                </div>
                <hr className="border border-yellow w-full mt-4" />
                <div className="text-center">
                    <input
                        name="max"
                        id="max"
                        type="text"
                        className="w-20 p-2 text-center  text-sm focus:ring-2 focus:ring-yellow focus:ring-inset caret-yellow outline-none"
                        placeholder="max"
                    />
                    <label className="text-xs" htmlFor="max">
                        max
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PriceRange;
