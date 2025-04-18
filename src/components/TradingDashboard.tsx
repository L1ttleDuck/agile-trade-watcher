
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaCog, FaRobot, FaChartLine, FaHistory, FaBitcoin } from "react-icons/fa";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import TradingSettings from "./TradingSettings";
import TradeHistory from "./TradeHistory";
import BotControls from "./BotControls";

const TradingDashboard: React.FC = () => {
  const [botStatus, setBotStatus] = useState<"idle" | "running" | "error">("idle");
  
  const handleToggleBot = () => {
    setBotStatus(botStatus === "running" ? "idle" : "running");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <FaRobot size={24} className="text-primary" />
          <h1 className="text-2xl font-bold">Trading Bot Dashboard</h1>
        </div>
        <Badge 
          className={`
            ${botStatus === "idle" ? "bg-gray-500" : ""}
            ${botStatus === "running" ? "bg-profit" : ""}
            ${botStatus === "error" ? "bg-loss" : ""}
            px-3 py-1
          `}
        >
          {botStatus === "idle" && "Idle"}
          {botStatus === "running" && "Running"}
          {botStatus === "error" && "Error"}
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FaBitcoin className="text-yellow-500" /> 
              BTC/USDT
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">$65,432.10</span>
              <div className="flex items-center text-profit">
                <GoArrowUpRight size={18} />
                <span>+2.45%</span>
              </div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              24h Volume: $1.2B
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Current Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Active Trades</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Profit Target</span>
                <span className="font-medium text-profit">5%</span>
              </div>
              <div className="flex justify-between">
                <span>Stop Loss</span>
                <span className="font-medium text-loss">3%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Profit</span>
                <span className="font-medium text-profit">+$1,243.55</span>
              </div>
              <div className="flex justify-between">
                <span>Win Rate</span>
                <span className="font-medium">68%</span>
              </div>
              <div className="flex justify-between">
                <span>Total Trades</span>
                <span className="font-medium">42</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="controls" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="controls" className="flex gap-2 items-center">
            <FaRobot /> Bot Controls
          </TabsTrigger>
          <TabsTrigger value="history" className="flex gap-2 items-center">
            <FaHistory /> Trade History
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex gap-2 items-center">
            <FaCog /> Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="controls">
          <BotControls botStatus={botStatus} onToggleBot={handleToggleBot} />
        </TabsContent>
        
        <TabsContent value="history">
          <TradeHistory />
        </TabsContent>
        
        <TabsContent value="settings">
          <TradingSettings />
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <FaChartLine />
            Market Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] rounded-md bg-chart-background border border-border p-4 flex items-center justify-center">
            <p className="text-muted-foreground">Chart visualization will connect to real-time data</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingDashboard;
