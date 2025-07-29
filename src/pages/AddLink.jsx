import { useState } from "react";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";

const AddLink = () => {
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const shortUrl = nanoid(6);
    const apiUrl = `${import.meta.env.VITE_API_URL}/urls/add`;

    const body = {
      long_url: linkUrl,
      short_url: shortUrl,
      title: linkName,
      user_id: 1,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("DATA: ", data);
      navigate("/links");
    } catch (error) {
      console.error(error);
      navigate("/404")
    }
  };

  return (
    <form method="POST" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Name of Link
        <input
          type="text"
          name="linkName"
          value={linkName}
          onChange={(e) => setLinkName(e.target.value)}
        />
      </label>
      <label>
        Url of Link
        <input
          type="text"
          name="linkUrl"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
        />
      </label>
      <button type="submit">ZAP IT!</button>
    </form>
  );
};

export default AddLink;

// {
//   "long_url": "google.com",
//   "short_url": "goo2",
//   "title": "Google",
//   "user_id": 1
// }
