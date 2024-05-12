const NGOFooter = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center text-white py-4"
      style={{
        height: "10vh",
        background: "linear-gradient(to left, #9B1B59, #6b2d98)",
      }}
    >
      <div className="flex items-center justify-between w-full px-8">
        <div className="flex items-center">
          <img
            src={require("../assets/Logo-Image-White-NoBackGround.png")}
            alt="BrightHorizon Logo"
            className="h-12 w-auto mb-2"
            style={{ filter: "invert(100%)" }}
          />
          <p className="text-lg text-white ml-4">BrightHorizon</p>
        </div>
        <p className="text-lg text-white">contact@brighthorizon.com</p>
        <p className="text-lg text-white text-right">
          &copy; 2024 BrightHorizon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default NGOFooter;
