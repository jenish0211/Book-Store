import React from "react";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">About</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="">
            <img
              src={aboutImg}
              alt="About BookHub"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              About BookHub
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dignissimos consequuntur vero commodi provident maiores, iusto
              atque corrupti voluptate vel sequi consectetur unde aliquam
              corporis saepe animi non, tempora reiciendis molestias sed
              laudantium dolores. Assumenda aperiam fuga quo voluptate commodi
              ullam aliquam expedita voluptas delectus.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dicta, possimus inventore eveniet atque voluptatibus repellendus
              aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
              dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
