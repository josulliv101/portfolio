export interface CallToAction {
  label: string;
  disabled?: boolean;
  href?: string;
}

export interface Project {
  id: string;
  title: string;
  content: string | string[];
  photoUrl: string;
  tags: Array<string>;
  callToAction: CallToAction;
}
