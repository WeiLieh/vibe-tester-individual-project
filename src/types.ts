export type TabType = 
  | 'making-decisions'
  | 'strengthening-marriage'
  | 'proceeding-divorce'
  | 'impact-divorce'
  | 'support-services'
  | 'about';

export type SubPageType = 
  | 'cpp-english'
  | 'cpp-mandarin'
  | 'cpp-malay'
  | 'cpp-tamil'
  | 'divorce-proceedings'
  | 'decision-marriage'
  | 'seeking-safety'
  | 'growing-marriage'
  | 'marriage-preparation'
  | 'impact-you'
  | 'impact-children'
  | 'impact-finance'
  | 'impact-housing'
  | 'counselling'
  | 'programmes'
  | 'resources'
  | 'where-to-attend'
  | 'about-us'
  | 'eligibility-checker';

export type Language = 'en' | 'zh' | 'ms' | 'ta';

export type TextSize = 'normal' | 'large' | 'xlarge';

export interface HelplineItem {
  name: string;
  phone: string;
  hours: string;
  whatsapp?: string;
  notes?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
  tab: TabType;
  subPage: SubPageType;
}
