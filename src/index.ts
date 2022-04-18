export type Josh = {
  name: string;
  handle: string;
  intro: string;
  twitter: string;
  github: string;
  website: string;
  projects: Project[];
};

export type Project = {
  name: string;
  website: string;
  tagline: string;
};

export const josh: Josh = {
  name: 'Josh Manders',
  handle: 'joshmanders',
  intro: `Founder @ NiftyCo, designing & developing simple solutions to complex problems.`,
  twitter: 'https://twitter.com/joshmanders',
  github: 'https://github.com/joshmanders',
  website: 'https://joshmanders.com',
  projects: [
    {
      name: 'Primcloud',
      website: 'https://primcloud.com',
      tagline: 'Deploy, manage and scale your apps.',
    },
    {
      name: 'Makerlog',
      website: 'https://getmakerlog.com',
      tagline: 'The public to-do list that keeps you creating daily.',
    },
    {
      name: 'Prevalidate',
      website: 'https://prevalidate.com',
      tagline: "Your product's success starts here.",
    },
    {
      name: 'BugFeedr',
      website: 'https://bugfeedr.com',
      tagline: 'Collect Customer Feedback.',
    },
  ],
};

export default josh;
