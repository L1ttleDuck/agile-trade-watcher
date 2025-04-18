
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Trade {
  id: string;
  pair: string;
  type: "buy" | "sell";
  price: number;
  amount: number;
  value: number;
  status: "open" | "closed";
  profitLoss: number;
  timestamp: string;
}

const TradeHistory: React.FC = () => {
  // Mock data for demonstration
  const trades: Trade[] = [
    {
      id: "1",
      pair: "BTC/USDT",
      type: "buy",
      price: 65432.10,
      amount: 0.01,
      value: 654.32,
      status: "closed",
      profitLoss: 32.72,
      timestamp: "2023-04-18T10:30:00Z"
    },
    {
      id: "2",
      pair: "ETH/USDT",
      type: "buy",
      price: 3120.45,
      amount: 0.15,
      value: 468.07,
      status: "closed",
      profitLoss: 23.40,
      timestamp: "2023-04-17T14:22:00Z"
    },
    {
      id: "3",
      pair: "SOL/USDT",
      type: "buy",
      price: 152.30,
      amount: 3.5,
      value: 533.05,
      status: "closed",
      profitLoss: -15.99,
      timestamp: "2023-04-16T09:45:00Z"
    },
    {
      id: "4",
      pair: "BTC/USDT",
      type: "buy",
      price: 63210.75,
      amount: 0.008,
      value: 505.69,
      status: "open",
      profitLoss: 10.11,
      timestamp: "2023-04-18T11:15:00Z"
    },
    {
      id: "5",
      pair: "BNB/USDT",
      type: "buy",
      price: 560.20,
      amount: 0.9,
      value: 504.18,
      status: "closed",
      profitLoss: -15.13,
      timestamp: "2023-04-15T16:30:00Z"
    }
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-medium text-lg mb-4">Trade History</h3>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pair</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Profit/Loss</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trades.map((trade) => (
                <TableRow key={trade.id}>
                  <TableCell className="font-medium">{trade.pair}</TableCell>
                  <TableCell>
                    <Badge variant={trade.type === "buy" ? "default" : "secondary"}>
                      {trade.type.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>${trade.price.toLocaleString()}</TableCell>
                  <TableCell>{trade.amount}</TableCell>
                  <TableCell>${trade.value.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={trade.status === "open" ? "outline" : "secondary"}>
                      {trade.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className={trade.profitLoss >= 0 ? "text-profit" : "text-loss"}>
                    {trade.profitLoss >= 0 ? "+" : ""}{trade.profitLoss.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(trade.timestamp).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradeHistory;
