export class SearchResults {
  took: number;
  timedOut: boolean;
  '_shards': Shards;

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
  index: string;
  type: string;
  id: string;
  highlight: {};
}

export class Source {
}
