import React from 'react';

const Policy = (param) => {
    return (
        <>
            <div className="border-2 border-white rounded-2xl mx-auto mb-6">
                <h2 className="pb-3 text-3xl">{param.title}</h2>
                <p>
                    {param.text}
                </p>
            </div>
        </>
    );
};

export default Policy;
