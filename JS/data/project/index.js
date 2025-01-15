import { ValidateDataMap } from "../validate.js";

export const questprojects = new ValidateDataMap([
  [
    1,
    {
      title: "Test title",
      languages: ["Python", "JavaScript", "Java","C++"],	 
      description:
        "This is only a test display to see how the discription will look.",
      githubLink: "https://github.com/Waldo-Blom/CV-website",
    },
  ],
  [
    2,
    {
      title: "A bit longer Title",
      languages: ["HTML", "CSS", "JavaScript"], 
      description:
        "This is also a test display to see how the discription will look but longer.",
      githubLink: "https://github.com/Waldo-Blom/CV-website",
    },
  ],
  [
    3,
    {
      title: "Test Container for the longest title",
      languages: ["Python", "R"], 
      description:
        "This is another test display to see how the discription will look but with a lot more words to see it will effect the layout changes if the text in the containder is alot of text.",
      githubLink: "https://github.com/Waldo-Blom/CV-website",
    },
  ],
  [
    4,
    {
      title: "Test Container for the longest title",
      languages: ["Python", "R"], 
      description:
        "This is another test display to see how the discription will look but with a lot more words to see it will effect the layout changes if the text in the containder is alot of text.",
      githubLink: "https://github.com/Waldo-Blom/CV-website",
    },
  ],
]);

