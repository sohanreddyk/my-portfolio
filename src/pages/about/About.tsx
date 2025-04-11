const About = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-center gap-7 max-w-screen-md mx-auto  px-4 ">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          About
        </h1>
      </div>
      <div className="text-white flex-wrap flex flex-col gap-2  text-start ">
        <p>I'm Sohan Reddy, Developer</p>
        <p>
          Aspiring Cloud Engineer with a passion for building intelligent and scalable systems.
        </p>
        <p>I have a strong foundation in programming with languages like Python, Java, C++, and JavaScript. I'm experienced in full-stack web development using React, Node.js, and Express, and have built cross-platform mobile applications with Flutter and Firebase.</p>
        <p>
          I enjoy solving real-world problems with clean code and scalable
          architecture.
        </p>
        <p>
          Outside of coding, I'm a learner, a creator, and someone who believes
          in constant growth and collaboration.
        </p>
        
      </div>
    </div>
  );
};

export default About;
