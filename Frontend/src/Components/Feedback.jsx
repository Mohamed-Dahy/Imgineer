import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Feedback = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-28 py-16 bg-gray-50 flex flex-col items-center sm:items-start gap-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 text-center sm:text-left">
          Customer Feedback
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl text-center sm:text-left">
            What our users say about Imgineer ?
        </p>
        <div className='flex flex-wrap gap-4 justify-center'>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md p-6 w-full sm:w-80 hover:shadow-lg transition-shadow duration-300'>
                    <div className='flex items-center gap-4 mb-4'>
                        <img src={testimonial.image} alt="" className='w-12 h-12 rounded-full object-cover' />
                        <div>
                            <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.text}"</p>
                   <p className="flex items-center gap-1">
  {Array(testimonial.stars).fill().map((_, i) => (
    <img key={i} src={assets.rating_star} alt="Star" className="w-5 h-5" />
  ))}
</p>

                </div>
            ))}

        </div>

    </div>
  )
}

export default Feedback