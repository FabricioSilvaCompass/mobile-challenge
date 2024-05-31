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

export const transactions: Transaction[] = [
  {
    type: 'Deposit',
    amount: '15000.00',
    description: 'Payment from Freela',
    from_user: 'John Doe',
    authentication:
      '45d064afbd6cf24613daed52133320b84ece0e2cc751995a4d0b94fca84823dd',
    id: '1',
    created_at: '2023-09-21T18:46:45.478966',
    to_user: 'John Doe',
    bank_name: 'Adams LLC',
  },
  {
    type: 'Deposit',
    amount: '88.81',
    description: 'Trip authority window myself hour.',
    from_user: 'Holly Bailey',
    authentication:
      '0ef6dc8284c7908ce7af354b10b6f354ff355a201f8f54e22bd60d928a6670c8',
    id: '2',
    created_at: '2020-09-07T00:00:00',
    to_user: 'Caitlin Bennett',
    bank_name: 'Williams-Norris',
  },
  {
    type: 'Withdrawal',
    amount: '250.00',
    description: 'ATM withdrawal',
    from_user: 'John Doe',
    authentication:
      '45d064afbd6cf24613daed52133320b84ece0e2cc751995a4d0b94fca84823dd',
    id: '3',
    created_at: '2023-09-22T10:23:14.090307',
    to_user: 'John Doe',
    bank_name: 'Adams LLC',
  },
  {
    type: 'Deposit',
    amount: '1000.00',
    description: 'Salary deposit',
    from_user: 'Acme Corp',
    authentication:
      '0ef6dc8284c7908ce7af354b10b6f354ff355a201f8f54e22bd60d928a6670c8',
    id: '4',
    created_at: '2023-09-23T08:00:00.000000',
    to_user: 'John Doe',
    bank_name: 'Adams LLC',
  },
  {
    type: 'Bill Payment',
    amount: '120.00',
    description: 'Electricity bill',
    from_user: 'John Doe',
    authentication:
      '45d064afbd6cf24613daed52133320b84ece0e2cc751995a4d0b94fca84823dd',
    id: '5',
    created_at: '2023-09-24T15:30:00.000000',
    to_user: 'ABC Power',
    bank_name: 'Adams LLC',
  },
  {
    type: 'Deposit',
    amount: '15000.00',
    description: 'Payment from Freela',
    from_user: 'John Doe',
    authentication:
      '45d064afbd6cf24613daed52133320b84ece0e2cc751995a4d0b94fca84823dd',
    id: '6',
    created_at: '2023-09-21T18:46:45.478966',
    to_user: 'John Doe',
    bank_name: 'Adams LLC',
  },
  {
    type: 'Deposit',
    amount: '88.81',
    description: 'Trip authority window myself hour.',
    from_user: 'Holly Bailey',
    authentication:
      '0ef6dc8284c7908ce7af354b10b6f354ff355a201f8f54e22bd60d928a6670c8',
    id: '7',
    created_at: '2020-09-07T00:00:00',
    to_user: 'Caitlin Bennett',
    bank_name: 'Williams-Norris',
  },
  {
    type: 'Withdrawal',
    amount: '250.00',
    description: 'ATM withdrawal',
    from_user: 'John Doe',
    authentication:
      '45d064afbd6cf24613daed52133320b84ece0e2cc751995a4d0b94fca84823dd',
    id: '8',
    created_at: '2023-09-22T10:23:14.090307',
    to_user: 'John Doe',
    bank_name: 'Adams LLC',
  },
  {
    type: 'Deposit',
    amount: '1000.00',
    description: 'Salary deposit',
    from_user: 'Acme Corp',
    authentication:
      '0ef6dc8284c7908ce7af354b10b6f354ff355a201f8f54e22bd60d928a6670c8',
    id: '9',
    created_at: '2023-09-23T08:00:00.000000',
    to_user: 'John Doe',
    bank_name: 'Adams LLC',
  },
  {
    type: 'Bill Payment',
    amount: '120.00',
    description: 'Electricity bill',
    from_user: 'John Doe',
    authentication:
      '45d064afbd6cf24613daed52133320b84ece0e2cc751995a4d0b94fca84823dd',
    id: '10',
    created_at: '2023-09-24T15:30:00.000000',
    to_user: 'ABC Power',
    bank_name: 'Adams LLC',
  },
];
