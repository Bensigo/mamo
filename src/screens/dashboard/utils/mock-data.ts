export enum Status  {
    pending = 'pending',
    refunded = 'refunded',
    settled = 'settled',
    partialRefund = 'partialRefund',
    refundPending = 'refundPending',
    failed = 'failed'

}
export type MockData = {
  id: string;
  customer: string;
  amount: number;
  status: Status
  createdAt: string
}
 const mockData: MockData [] = [
    {
        id: 'IDMPB-CHRG-7631AC9C27',
        customer: 'Asma Alyamani',
        amount: 250.50,
        status: Status.pending,
        createdAt: '25/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C22',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.settled,
        createdAt: '25/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C20',
        customer: 'Asma Alyamani',
        amount: 250.50,
        status: Status.refunded,
        createdAt: '25/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C21',
        customer: 'Asma Alyamani',
        amount: 250.50,
        status: Status.pending,
        createdAt: '25/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C26',
        customer: 'Asma Alyamani',
        amount: 250.50,
        status: Status.partialRefund,
        createdAt: '21/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C24',
        customer: 'Asma Alyamani',
        amount: 250.50,
        status: Status.pending,
        createdAt: '25/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C23',
        customer: 'Asma Alyamani',
        amount: 150.50,
        status: Status.refundPending,
        createdAt: '23/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'david Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    },
    {
        id: 'IDMPB-CHRG-7631AC9C28',
        customer: 'Asma Alyamani',
        amount: 200.50,
        status: Status.pending,
        createdAt: '22/05/2021'
    }
]

export default mockData;