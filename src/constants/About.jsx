import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h2 className="my-20 text-4xl text-center text-white">About Me</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
