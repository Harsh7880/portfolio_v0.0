import ArrowWIcon from "../assets/icons/arrow.svg";
const Home = () => {
  return (
    <div className=" bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm-h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)"></div>
      <div className="container justify-center mx-auto relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className=" inline-flex gap-3 border border-white/30 py-2 px-2 rounded-lg"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#C3F0B2,#2Fd8FE)]  text-transparent bg-clip-text ">
              {" "}
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span> Read More </span>
              <img
                src={ArrowWIcon}
                className="transform fill-white text-white"
                alt=""
              />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl sm:text-9xl font-bold, tracking-tighter text-center mt-8">
            One task <br /> at a time{" "}
          </h1>
        </div>
        <div className="flex justify-center">
        <p className="text-center text-xl mt-8 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          perspiciatis placeat blanditiis! Quae autem eligendi fugit, ea
          mollitia nulla sed tempora eum harum doloribus, ex fugiat impedit
          quia. Dolorem sequi, sit porro inventore consectetur nulla facilis
          mollitia amet error quam.
        </p>
        </div>
    
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
