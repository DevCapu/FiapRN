export type TabNewsContentList = TabNewsContent[];

export interface TabNewsContent {
  id: string;
  owner_id: string;
  parent_id: any;
  slug: string;
  title: string;
  status: string;
  source_url: any;
  created_at: string;
  updated_at: string;
  published_at: string;
  deleted_at: any;
  owner_username: string;
  tabcoins: number;
  tabcoins_credit: number;
  tabcoins_debit: number;
  children_deep_count: number;
}
