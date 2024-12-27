export type Josh = {
  name: string;
  handle: string;
  intro: string;
  xdotcom: string;
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
  intro: 'Ambitious founder @ Primcloud transforming shipping into an extreme sport.',
  xdotcom: 'https://x.com/joshmanders',
  github: 'https://github.com/joshmanders',
  website: 'https://ambitiousfounder.com',
  projects: [
    {
      name: 'Primcloud',
      website: 'https://primcloud.com',
      tagline: 'The cloud hosting platform that lets you focus on what matters — your apps, your vision, your success.',
    },
  ],
};

export default josh;
