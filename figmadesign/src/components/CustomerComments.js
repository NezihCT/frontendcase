import React, { useRef } from 'react';
import '../styles/CustomerComments.css';


const testimonials = [
  {
    logo: 'https://via.placeholder.com/50',
    content: 'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem.',
    profileImg: 'https://via.placeholder.com/40',
    name: 'Hellen Jummy',
    title: 'Team Lead',
  },
  {
    logo: 'https://via.placeholder.com/50',
    content: 'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim.',
    profileImg: 'https://via.placeholder.com/40',
    name: 'Helina John',
    title: 'Co-founder',
  },
  {
    logo: 'https://via.placeholder.com/50',
    content: 'A eget sed posuere dui risus habitasse mauris.',
    profileImg: 'https://via.placeholder.com/40',
    name: 'David Gohard',
    title: 'Manager',
  },
  {
    logo: 'https://via.placeholder.com/50',
    content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    profileImg: 'https://via.placeholder.com/40',
    name: 'Sarah Doe',
    title: 'Designer',
  },
  {
    logo: 'https://via.placeholder.com/50',
    content: 'Suspendisse potenti. Fusce gravida euismod ligula, vel varius nisl.',
    profileImg: 'https://via.placeholder.com/40',
    name: 'John Smith',
    title: 'Developer',
  },
  {
    logo: 'https://via.placeholder.com/50',
    content: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
    profileImg: 'https://via.placeholder.com/40',
    name: 'Michael Brown',
    title: 'Product Manager',
  },
  {
    logo: 'https://via.placeholder.com/50',
    content: 'Donec sollicitudin molestie malesuada.',
    profileImg: 'https://via.placeholder.com/40',
    name: 'Jessica White',
    title: 'Marketing',
  },
  {
    logo: 'https://via.placeholder.com/50',
    content: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    profileImg: 'https://via.placeholder.com/40',
    name: 'David Wilson',
    title: 'CEO',
  }
];

const CustomerComments = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl font-bold">Because they love us</h2>
          <div>
            <button onClick={scrollLeft} className="border border-brownBg text-brownText bg-transparent p-2 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.646 10.354a.5.5 0 0 0 0 .707l4 4a.5.5 0 0 0 .708-.707L7.707 11H14.5a.5.5 0 1 0 0-1h-6.793l2.147-2.146a.5.5 0 0 0-.708-.707l-4 4a.5.5 0 0 0 0 .707z" />
              </svg>
            </button>
            <button onClick={scrollRight} className="border border-brownBg text-brownText bg-transparent p-2 rounded-full mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.354 10.354a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.707 0l-.708-.707a.5.5 0 0 1 0-.707L12.293 11H5.5a.5.5 0 1 1 0-1h6.793l-3.147-3.147a.5.5 0 0 1 0-.707l.708-.707a.5.5 0 0 1 .707 0l4 4z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-hidden bg-cardBg" ref={scrollRef}>
          <div className="flex space-x-6 mt-8 ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[350px] min-h-[350px] bg-white p-4 rounded-lg shadow-md">
                <img src={testimonial.logo} alt="Company Logo" className="h-10 mb-4" />
                <p className="mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <img src={testimonial.profileImg} alt="Profile" className="h-10 w-10 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerComments;
