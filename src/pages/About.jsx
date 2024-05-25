import React, { useEffect, useRef } from 'react';
import './about.css'; 

const About = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const currentImageRefs = imageRefs.current; // Copy current imageRefs to a local variable
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    currentImageRefs.forEach((image) => {
      if (image) {
        observer.observe(image);
      }
    });

    return () => {
      currentImageRefs.forEach((image) => {
        if (image) {
          observer.unobserve(image);
        }
      });
    };
  }, []);

  return (
    <div className='container mx-auto'>
      <section className='my-16'>
        <div className='flex flex-wrap items-center'>
          <div className='w-full md:w-1/2'>
            <h1 className='font-bold text-5xl md:text-6xl mb-8 text-center md:text-left'>
              The Future of Retail
            </h1>
            <p className='text-lg leading-relaxed mb-8 text-center md:text-justify'>
              LuxeMART aims to revolutionize the supermarket experience with our cutting-edge location-based mobile application. Leveraging beacon technology, our app provides real-time alerts and personalized offers to customers as they navigate through the store. By delivering timely and relevant information based on their location, LuxeMART enhances the shopping experience, fostering greater engagement and satisfaction. Our commitment to innovation and excellence drives us to create a seamless and convenient platform that not only meets but exceeds customer expectations. Join us in redefining the future of supermarket shopping.
            </p>
          </div>
          <div className='w-full md:w-1/2 flex justify-center mb-8'>
            <img 
              src="https://img.freepik.com/free-photo/young-gardener-wearing-jumpsuit-hat-working-gloves-holding-crate-full-vegetables-with-pumpkin-looking-front-smiling-with-happy-face-standing-purple-wall_141793-53040.jpg?t=st=1714745598~exp=1714749198~hmac=1babab086ddc4bb8fdc1d45906470d8f51fd93e2e8e0f0affada95ae236658ea&w=900" 
              alt="AboutImage1" 
              className="image-responsive"
              ref={(el) => (imageRefs.current[0] = el)}
              style={{ maxWidth: '100%', height: 'auto', marginLeft: '32px' }} 
            />
          </div>
        </div>
      </section>
     
      <div className='flex flex-wrap items-center'>
        <div className='w-full md:w-1/2 flex justify-center mb-8'>
          <img 
            src="https://img.freepik.com/free-photo/chef-holding-lettuce-white-background_1368-10199.jpg?t=st=1714747969~exp=1714751569~hmac=1cbf056a91b21e8f13c3ad1c0471c0e1b9231a02faad38ef90c316e83b4cb5f2&w=740"
            alt="AboutImage2"
            className="image-responsive"
            ref={(el) => (imageRefs.current[1] = el)}
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>
        <div className='w-full md:w-1/2'>
          <h1 className='font-bold text-5xl md:text-6xl mb-8 text-center md:text-left' style={{ marginLeft: '32px' }}>
            100% Trusted Organic Food Store
          </h1>
          <p className='text-lg leading-relaxed mb-8 text-center md:text-justify' style={{ marginLeft: '32px' }}>
            Welcome to our 100% Trusted Organic Food Store, where quality meets integrity in every bite. Our commitment to providing the finest organic products stems from a deep-rooted belief in the power of natural, sustainable food. From farm to table, we ensure that each item in our store is carefully selected and certified to meet the highest organic standards. With a focus on transparency and traceability, we partner directly with local farmers and producers who share our values, ensuring that every product is free from synthetic pesticides, GMOs, and harmful chemicals. Whether you're stocking up on fresh fruits and vegetables, indulging in artisanal cheeses, or exploring our range of wholesome pantry staples, you can trust that each item is not only delicious but also supports your health and the health of the planet. Join us in nourishing your body and supporting sustainable agriculture with every purchase at our 100% Trusted Organic Food Store.
          </p>
        </div>
      </div>
   
      <section className='my-16'>
        <div className='flex flex-wrap items-center'>
          <div className='w-full md:w-1/2'>
            <h1 className='font-bold text-5xl md:text-6xl mb-8 text-center md:text-left'>
              We Deliver, You Enjoy Your Order
            </h1>
            <p className='text-lg leading-relaxed mb-8 text-center md:text-justify'>
              At our "We Deliver, You Enjoy Your Order" service, convenience and satisfaction are at the heart of everything we do. Whether you're craving a gourmet meal for a special occasion or simply stocking up on everyday essentials, we've got you covered. With our seamless online ordering platform and reliable delivery service, you can enjoy the convenience of having your favorite products delivered right to your doorstep. From farm-fresh produce to artisanal delicacies, each item is carefully selected and packed with care, ensuring that you receive only the highest quality products. Sit back, relax, and let us take care of the rest. With "We Deliver, You Enjoy Your Order," indulgence is just a click away...
            </p>
          </div>
          <div className='w-full md:w-1/2 flex justify-center mb-8'>
            <img 
              src="https://img.freepik.com/free-photo/high-angle-view-bunch-tomatoes-with-chili-peppers-onion-eggplant-greens-broccoli-garlic-gray-surface-horizontal_176474-5104.jpg?t=st=1714748158~exp=1714751758~hmac=ce4333ac9ef930d4958e9cd1a29705a8b38799e8aee7b1e3304b0e976717f7ee&w=996" 
              alt="AboutImage3" 
              className="image-responsive"
              ref={(el) => (imageRefs.current[2] = el)}
              style={{ maxWidth: '100%', height: 'auto', marginLeft: '32px' }} 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
