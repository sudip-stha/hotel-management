import data from "../data.json";

interface aside {
  logo: string;
  title: string;
}

interface navitem {
  label: string;
  icon: string;
  URL: string;
}

interface navListing {
  navList: navitem[];
}

const NavList = ({ navList }: navListing) => {
  return (
    <ul className="nav">
      {navList.map((data) => {
        return (
          <li key={data.URL}>
            <span>
              <img src={data.icon} alt="This is a icon." />
            </span>
            <span>{data.label}</span>
          </li>
        );
      })}
    </ul>
  );
};

const Aside = () => {
  const rawData: aside = data.aside;
  return (
    <div>
      <div className="logo">
        <img src={rawData.logo} alt="This is a logo." />
        <h1>{rawData.title}</h1>
      </div>
      <NavList navList={data.aside.navList} />
    </div>
  );
};

export default Aside;
