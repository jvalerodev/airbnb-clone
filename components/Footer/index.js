const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 md:place-items-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">Community</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It&apos;s a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Papafam</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">Host</h5>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold uppercase">Support</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
};

export default Footer;