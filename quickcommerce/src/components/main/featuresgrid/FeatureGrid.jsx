import React from 'react'
import { Truck, Shield, Award, Clock } from 'lucide-react';
const FEATURES = [
    { icon: Truck, title: '30-Min Delivery', description: 'Lightning fast delivery guaranteed' },
    { icon: Shield, title: 'Secure Payment', description: '100% secure & encrypted payments' },
    { icon: Award, title: 'Best Quality', description: 'Premium products from top brands' },
    { icon: Clock, title: '24/7 Support', description: 'Round the clock customer service' }
];
const FeatureCard = React.memo(({ icon: Icon, title, description }) => (
    <article className="bg-linear-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl mb-4" aria-hidden="true">
            <Icon className="w-7 h-7 text-white" />
        </div>
        <h4 className="font-bold text-gray-800 text-lg mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
    </article>
));

FeatureCard.displayName = 'FeatureCard';

const FeatureGrid = () => {
    return (
        <div>
            <section className="mb-10" aria-labelledby="features-heading">
                <h2 id="features-heading" className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </section>

        </div>
    )
}

export default FeatureGrid
