import Header from "components/Home/Header";
import About from "components/Home/About";
import Services from "components/Home/Services";

const HomePage = () => {
  return (
    <div className="bg-gray-100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header />
        <About />
        <Services />
    </div>
  );
};

export default HomePage;
