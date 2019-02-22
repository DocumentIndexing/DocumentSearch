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
  private '_subtitle.analyzed': string[];
  private '_title.analyzed': string[];
  description: string[];
  content: string[];

  get 'subtitle.analyzed'(): string[] {
    return this['_subtitle.analyzed'];
  }

  set 'subtitle.analyzed'(value: string[]) {
    this['_subtitle.analyzed'] = value;
  }

  get subtitle(): string[] {
    return this['_subtitle.analyzed'];
  }
  get 'title.analyzed'(): string[] {
    return this['_title.analyzed'];
  }

  set 'title.analyzed'(value: string[]) {
    this['_title.analyzed'] = value;
  }

  get title(): string[] {
    return this['_title.analyzed'];
  }

}
