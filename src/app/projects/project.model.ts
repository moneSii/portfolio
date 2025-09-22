export interface project {
  id: number;
  name: string;
  content: string;
  status: 'Pre-Planning' | 'In-Progess' | 'Complete';
  version: string;
}
