export type Work = {
  name: string;
  website: string;
  title: string;
  description: string;
};

export type JoshManders = {
  name: string;
  handle: string;
  work: Work[];
  twitter: string;
  github: string;
  website: string;
};

const joshManders: JoshManders = {
  name: 'Josh Manders',
  handle: 'joshmanders',
  work: [
    {
      name: 'Primcloud, Inc',
      title: 'Founder & CEO',
      website: 'https://primcloud.com',
      description: 'Deploy, manage and scale your apps',
    },
    {
      name: 'NiftyCo',
      title: 'Founder',
      website: 'https://aniftyco.com',
      description: 'Design & develop simple solutions to complex problems',
    },
  ],
  twitter: 'https://twitter.com/joshmanders',
  github: 'https://github.com/joshmanders',
  website: 'https://joshmanders.com',
};

export default joshManders;
