import React from 'react';

import SecondaryBanner from '../SecondaryBanner';
import ButtonLink from '../ButtonLink';
import SectionTitle from '../SectionTitle';

const TopProducts = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <SectionTitle text="Top Products" />
                    <ButtonLink path="/about" text="see more" isMain />
                </div>
                {/* Products */}
                <div className="h-80"></div>
            </div>
            <SecondaryBanner />
        </div>
    );
};

export default TopProducts;
