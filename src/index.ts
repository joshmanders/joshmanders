export interface Work {
  name: string;
  website: string;
}

export interface JoshManders {
  name: string;
  handle: string;
  work: Work[];
  twitter: string;
  github: string;
  website: string;
  forHire: boolean | string;
}

const joshManders: JoshManders = {
  name: 'Josh Manders',
  handle: 'joshmanders',
  work: [
    { name: 'NiftyCo', website: 'https://aniftyco.com' },
    { name: 'App Metrics', website: 'https://appmetrics.co' },
    { name: 'Audience', website: 'https://github.com/aniftyco/audience' },
  ],
  twitter: 'https://twitter.com/joshmanders',
  github: 'https://github.com/joshmanders',
  website: 'https://joshmanders.com',
  // forHire: 'https://full.snack.dev/for-hire',
  forHire: false,
};

export default joshManders;
