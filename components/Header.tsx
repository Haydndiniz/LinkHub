const Header = () => {
  return (
    <header className="container flex text-center mx-auto pt-10 pb-2">
      <div className="md:w-4/6 mx-auto">
        <img src="./profile_image.jpeg" className="h-24 rounded-full mx-auto mb-5" />
        <h1 className="font-bold">Haydn Diniz</h1>
        <p>
          Computer Science BSc
          <br /> Welcome to my Links Hub for sites, projects and status updates
          <br />Full Stack Developer | Photographer | WindSurfer
        </p>
      </div>
    </header>
  );
};

export default Header;
