export interface Transaction {
  type: string;
  amount: string;
  description: string;
  from_user: string;
  authentication: string;
  id: string;
  created_at: string;
  to_user: string;
  bank_name: string;
}
