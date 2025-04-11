import CurrentTimeIST from "../../components/CurrentTimeIST";

const Connect = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto  px-4 py-2">
      {/* Flex row container */}
      <div className="flex flex-row   gap-5">
        {/* Left - Work Experience */}
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Connect
        </h1>

        {/* Right - Current Time */}
        <div className="flex flex-col gap-3">
          <CurrentTimeIST />
          <a
            href="https://www.linkedin.com/in/sohanreddyk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-50 hover:text-amber-100 text-center bg-blue-500 rounded-4xl cursor-pointer p-2 w-35"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
