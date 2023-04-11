const Header = () => {
  return (
    <header className="container flex text-center mx-auto pt-10 pb-2">
      <div className="md:w-4/6 mx-auto">
        <img src="https://media.licdn.com/dms/image/C4E03AQHSqEmS243TGQ/profile-displayphoto-shrink_400_400/0/1662395756737?e=1686787200&v=beta&t=cbzQK8J6cuSaQcySENlEZLTX4001Lym0YL9ddz8pmmY" className="h-24 rounded-full mx-auto mb-5" />
        <h1 className="font-bold">Haydn Diniz</h1>
        <p>
          Computer Science BSc
          <br /> Welcome to my LinkHub for sites, projects and status updates
          <br />Full Stack Developer | Photographer | WindSurfer
        </p>
      </div>
    </header>
  );
};

export default Header;
