import { HelplineItem, SearchResult, TabType, SubPageType } from '../types';

export const HELPLINES: HelplineItem[] = [
  {
    name: 'ComCare Hotline (7am-12 midnight daily)',
    phone: '1800-111-2222',
    hours: '7am - 12 midnight daily',
    notes: 'Say "ComCare" when prompted by the virtual assistant.'
  },
  {
    name: 'national mindline 1771 (24hrs)',
    phone: '1771',
    whatsapp: '6669 1771',
    hours: '24-hour Hotline & WhatsApp Chat'
  },
  {
    name: 'Samaritans of Singapore Hotline (24hrs)',
    phone: '1767',
    whatsapp: '9151 1767',
    hours: '24-hour Hotline & CareText'
  },
  {
    name: 'National Anti-Violence and Sexual Harassment Helpline (NAVH) (24hrs)',
    phone: '1800-777-0000',
    hours: '24-hour Hotline'
  }
];

export const FAM_CENTRES = [
  {
    name: 'FAM@FSC (Care Corner - Woodlands)',
    address: 'Blk 342 Woodlands Ave 1, #01-712, Singapore 730342',
    phone: '6362 2481',
    email: 'fam.woodlands@carecorner.org.sg',
    region: 'North'
  },
  {
    name: 'FAM@FSC (Fei Yue - Choa Chu Kang)',
    address: 'Blk 280 Choa Chu Kang Ave 3, #01-360, Singapore 680280',
    phone: '6762 5215',
    email: 'fam.cck@feiyue.org.sg',
    region: 'West'
  },
  {
    name: 'FAM@FSC (Thye Hua Kwan - Ang Mo Kio)',
    address: 'Blk 540 Ang Mo Kio Ave 10, #01-1823, Singapore 560540',
    phone: '6456 2201',
    email: 'fam.amk@thkmc.org.sg',
    region: 'Central/North-East'
  },
  {
    name: 'FAM@FSC (AMKFSC - Tampines)',
    address: 'Blk 472 Tampines St 44, #01-63, Singapore 520472',
    phone: '6787 1125',
    email: 'fam.tampines@amkfsc.org.sg',
    region: 'East'
  }
];

export const SEARCH_INDEX: SearchResult[] = [
  {
    id: 'cpp-eng',
    title: 'Mandatory Co-Parenting Programme (CPP)',
    category: 'Proceeding with Divorce',
    description: 'Understand marital situation, impact on children, and complete mandatory consultation.',
    tab: 'proceeding-divorce',
    subPage: 'cpp-english'
  },
  {
    id: 'cpp-mandarin',
    title: '强制性共同育儿辅导计划 (CPP)',
    category: 'Proceeding with Divorce',
    description: '适用于在家事司法法院申请离婚并育有21岁以下未成年子女的夫妇。',
    tab: 'proceeding-divorce',
    subPage: 'cpp-mandarin'
  },
  {
    id: 'marriage-decisions',
    title: 'Making a Decision About Your Marriage',
    category: 'Making Decisions',
    description: 'Explore marriage counselling, reconciliation options, and understanding marital conflict.',
    tab: 'making-decisions',
    subPage: 'decision-marriage'
  },
  {
    id: 'seeking-safety',
    title: 'Seeking Safety & Protection Orders',
    category: 'Making Decisions',
    description: 'Emergency shelter support, Personal Protection Orders (PPO), and safety planning.',
    tab: 'making-decisions',
    subPage: 'seeking-safety'
  },
  {
    id: 'impact-children',
    title: 'Impact of Divorce on Children',
    category: 'Impact of Divorce',
    description: 'Co-parenting strategies, explaining divorce to children, and emotional support.',
    tab: 'impact-divorce',
    subPage: 'impact-children'
  },
  {
    id: 'impact-housing',
    title: 'Impact of Divorce on Housing',
    category: 'Impact of Divorce',
    description: 'HDB flat options, eligibility rules, and housing assistance for divorced parents.',
    tab: 'impact-divorce',
    subPage: 'impact-housing'
  },
  {
    id: 'impact-finance',
    title: 'Impact of Divorce on Finance',
    category: 'Impact of Divorce',
    description: 'Maintenance, division of matrimonial assets, and financial planning.',
    tab: 'impact-divorce',
    subPage: 'impact-finance'
  },
  {
    id: 'counselling-centres',
    title: 'FAM@FSC Counselling Centres',
    category: 'Support Services',
    description: 'Locate specialized Family Service Centres offering professional marriage and divorce counselling.',
    tab: 'support-services',
    subPage: 'counselling'
  }
];

export const NAV_ITEMS = [
  { id: 'making-decisions' as TabType, label: 'Making Decisions' },
  { id: 'strengthening-marriage' as TabType, label: 'Strengthening Your Marriage' },
  { id: 'proceeding-divorce' as TabType, label: 'Proceeding with Divorce' },
  { id: 'impact-divorce' as TabType, label: 'Impact of Divorce' },
  { id: 'support-services' as TabType, label: 'Support Services' },
  { id: 'about' as TabType, label: 'About' }
];
