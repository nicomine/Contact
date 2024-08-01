import { Card } from "./Card";

import githubImage from "../../public/images/github.jpg";
import gmailImage from "../../public/images/gmail.jpg";
import linkedInImage from "../../public/images/linkedin.jpg";

const cardContent = [
  {
    id: 1,
    title: "LinkedIn",
    image: linkedInImage,
    url: "https://www.linkedin.com/in/nicolas-e-mine/",
  },
  {
    id: 2,
    title: "GitHub",
    image: githubImage,
    url: "https://github.com/nicomine",
  },
  {
    id: 3,
    title: "Gmail",
    image: gmailImage,
    url: "mailto:mine.nicolas03@gmail.com",
  },
];

export function Cards() {
  return (
    <div className="container d-flex h-100">
      <div className="row justify-content-space-around align-items-center">
        {cardContent.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card title={card.title} image={card.image} url={card.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
