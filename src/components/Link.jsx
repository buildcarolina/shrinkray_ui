import { useState, useEffect } from "react";

const Links = () => {
  const [linkItems, setLinkItems] = useState([]);

  useEffect(() => {
    const getLinks = async () => {
      const url = "https://bzzt.fun/api/urls";
      const data = await fetch(url).then((response) => response.json());
      setLinkItems(data);
    };
    getLinks();
  }, [setLinkItems]);

  return (
    <>
      <p>LINKS PAGE</p>
      {linkItems && linkItems.length > 0 ? (
        <ul>
          {linkItems.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={`https://bzzt.fun/${link.short_url}`}
                  title={`Short URL for ${link.title}`}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Links are loading...</p>
      )}
    </>
  );
};

export default Links;
