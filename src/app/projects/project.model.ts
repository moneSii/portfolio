export interface project {
  id: number;
  name: string;
  content: content;
  status: 'Pre-Planning' | 'In-Progess' | 'Complete';
  version: string;
}

interface content {
  summary: string;
  features: string;
  stack: string;
  upcoming: string;
}
