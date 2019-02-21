export class SearchResults {
  took: number;
  timedOut: boolean;
  '_shards': Shards;
  hits: SearchHits;

}

export class Shards {
  total: number;
  successful: number;
  skipped: number;
  failed: number;
}

export class SearchHits {
  total: number;
  maxScore: number;
  hits: SearchHit[];

}

export class SearchHit {
  '_id': string;
  '_index': string;
  '_type': string;
  '_score': number;
  '_source': Source;
  highlight: Highlight;
}

export class Source {
  title: string;
}

export class Highlight {
  title: string[];
  description: string[];
  content: string[];
  subtitle: string[];
}
