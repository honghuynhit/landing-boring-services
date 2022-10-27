
// Newer data models below
export interface writtenCopy {
  title: string;
  subtitle: string | null;
  description?: string | null;
}

export interface callToAction {
  cta: string;
  url: string;
}

export interface heroContent {
  supportImage: {
    url: string;
  };
  callToAction: callToAction;
  writtenCopy: writtenCopy;
}

export interface TagLine {
  text: string
  subtext: string
}

export interface Testimonial {
  launchPartner: launchPartner
  persona: string;
  testimonialShortVersion: string | null;
  testimonialLongVersion?: string;
  futurePromise?: string;
}

export interface launchPartner {
  partnerName: string;
  link: string | null;
  categories?: string[];
  blackPngLogo: {
    url: string;
  }
  partnerSince?: string | number;
}

export interface coreBenefit {
  title: string;
  subtitle: string | null;
  description: string | null;
  supportImage: {
    url: string;
  }
}

export interface polywrapApplication {
  writtenCopy: writtenCopy;
  callToAction: callToAction;
  uiScreenshot: {
    url: string;
  };
}


/// Older data models below that could use some refactoring 
export interface wrapperQuery {
  filename: string;
  featured: boolean;
  query?: string;
  comment: string;
  source: string;
  appJs?: string;
  appTs?: string;
  appPy?: string;
  appRs?: any;
}

export interface wrapper {
  wrapperName: string;
  featured: boolean;
  thirdParty: boolean;
  description: string;
  queriesCollection: {
    items : wrapperQuery[];
  }
  docsLink: string;
  svgLogo: { url: string; }
}

export interface newListOfFeaturedQueries {
  // this one might use a better name than "newListOfFeaturedQueries"
  wrapperName: string;
  //filename: string;
  description: string;
  featuredWrapper: boolean;
  thirdParty: boolean;
  docsLink: string;
  svgLogo: { url: string; }
  queries: {
    queryName: string;
    featuredQuery: boolean;
    source: string;
    snippets: {
      filename: string;
      language: string;
      snippet: string;
    }[];
  };
}

// Data models to be deprecated
export interface webContent {
  title: string;
  subtitle: string | null;
  callToAction: string | null;
  description?: string | null;
  supportImage?: any | null;
  
}