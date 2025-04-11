import { BiLogoInstagramAlt } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const socialLinks = [
    {
      title: "GitHub",
      tag: <VscGithubInverted size={20} />,
      url: "https://github.com/sohanreddyk",
    },
    {
      title: "Instagram",
      tag: <BiLogoInstagramAlt size={20} />,
      url: "https://www.instagram.com/sohanreddyy/",
    },
    {
      title: "X/Twitter",
      tag: <FaXTwitter size={16} />,
      url: "https://x.com/sohanreddyy?s=21",
    },
    {
      title: "LinkedIn",
      tag: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/sohanreddyk/",
    },
    {
      title: "Leetcode",
      tag: <SiLeetcode size={20} />,
      url: "https://leetcode.com/u/sohanreddyy/",
    },
  ];

  return (
    <div className="w-full px-4 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 max-w-screen-md mx-auto  ">
      <img
        src="/profile.jpg"
        alt="Sohan Reddy"
        className="rounded-full w-38 h-38 object-cover border p-1"
      />

      <div className="flex flex-col items-center md:items-start w-full gap-5 p-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-amber-50 text-center md:text-left">
          Sohan Reddy (Fullstack Developer)
        </h1>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <button className="text-sm text-blue-500 transition duration-150 ease-in-out px-3 py-1 rounded-xl cursor-pointer border border-blue-500">
            Developer
          </button>
        </div>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              className="text-sm text-amber-50 hover:text-blue-400 flex items-center gap-1"
            >
              {item.tag}
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
