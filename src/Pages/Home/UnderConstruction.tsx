import React from 'react';

export const UnderConstruction = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-100"
        >
            <div className="text-center">
                <img
                    className="h-44 w-auto mx-auto mb-6"
                    src="https://images.squarespace-cdn.com/content/v1/62e45351ae57ad11885910bd/fae09bca-0d47-4bf9-bc8e-ef8acbcd1267/itly_pos%403x.png?format=1500w"
                    alt="Company Logo"
                />

                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    We are currently under construction
                </h1>
                <p className="text-lg text-gray-600">
                    Our website will be live soon. Stay tuned!
                </p>
                <p className="text-lg text-gray-600 pt-6">
                    In the meantime, you can contact us at{' '}
                    <a href="mailto:info@itly.se" className="text-blue-600 hover:text-blue-800 underline">
                        info@itly.se
                    </a>
                </p>
            </div>
        </div>
    );
};
