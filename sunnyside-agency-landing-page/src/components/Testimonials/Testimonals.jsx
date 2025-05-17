import TestimonialCard from '@/components/Testimonials/TestimonialCard';
import { TestimonialsData } from '@/components/Testimonials/TestimonialsData';

const Testimonials = () => {
  return (
    <div className="my-24">
      <h1 className="uppercase text-grey-400 font-bold tracking-widest text-center">Client Testimonials</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-3">
        {TestimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            img={testimonial.img}
            body={testimonial.body}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
