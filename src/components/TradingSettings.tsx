
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TradingSettings: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="api">API Settings</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
            <TabsTrigger value="risk">Risk Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">General Settings</h3>
                <p className="text-muted-foreground mb-4">
                  Configure the general settings for your trading bot
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tradingPair">Trading Pair</Label>
                    <Select defaultValue="BTC-USDT">
                      <SelectTrigger>
                        <SelectValue placeholder="Select trading pair" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BTC-USDT">BTC/USDT</SelectItem>
                        <SelectItem value="ETH-USDT">ETH/USDT</SelectItem>
                        <SelectItem value="SOL-USDT">SOL/USDT</SelectItem>
                        <SelectItem value="BNB-USDT">BNB/USDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeframe">Timeframe</Label>
                    <Select defaultValue="15m">
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1m">1m</SelectItem>
                        <SelectItem value="5m">5m</SelectItem>
                        <SelectItem value="15m">15m</SelectItem>
                        <SelectItem value="1h">1h</SelectItem>
                        <SelectItem value="4h">4h</SelectItem>
                        <SelectItem value="1d">1d</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="positionSize">Position Size (USDT)</Label>
                    <Input id="positionSize" type="number" defaultValue="100" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="maxPositions">Max Concurrent Positions</Label>
                    <Input id="maxPositions" type="number" defaultValue="3" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-6">
                  <Switch id="testMode" defaultChecked />
                  <Label htmlFor="testMode">Test Mode (Paper Trading)</Label>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="api">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">API Settings</h3>
                <p className="text-muted-foreground mb-4">
                  Configure your Binance API credentials
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">API Key</Label>
                    <Input id="apiKey" type="password" placeholder="Enter your Binance API key" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="apiSecret">API Secret</Label>
                    <Input id="apiSecret" type="password" placeholder="Enter your Binance API secret" />
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full">Save API Credentials</Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Your API credentials are securely stored and used only for connecting to your Binance account.
                    Make sure to set appropriate permissions for your API keys.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="strategy">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">Strategy Settings</h3>
                <p className="text-muted-foreground mb-4">
                  Configure the trading strategy parameters
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="strategy">Strategy Type</Label>
                    <Select defaultValue="ma_crossover">
                      <SelectTrigger>
                        <SelectValue placeholder="Select strategy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ma_crossover">Moving Average Crossover</SelectItem>
                        <SelectItem value="rsi">RSI Oscillator</SelectItem>
                        <SelectItem value="macd">MACD</SelectItem>
                        <SelectItem value="bollinger_bands">Bollinger Bands</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fastMA">Fast MA Period</Label>
                    <Input id="fastMA" type="number" defaultValue="9" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="slowMA">Slow MA Period</Label>
                    <Input id="slowMA" type="number" defaultValue="21" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signalPeriod">Signal Period</Label>
                    <Input id="signalPeriod" type="number" defaultValue="9" />
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <Label>Advanced Options</Label>
                  <div className="flex items-center space-x-2">
                    <Switch id="confirmationIndicator" />
                    <Label htmlFor="confirmationIndicator">Use Confirmation Indicator</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="volumeFilter" />
                    <Label htmlFor="volumeFilter">Apply Volume Filter</Label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="risk">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">Risk Management</h3>
                <p className="text-muted-foreground mb-4">
                  Configure your risk management settings
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="takeProfit">Take Profit (%)</Label>
                    <Input id="takeProfit" type="number" defaultValue="5" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="stopLoss">Stop Loss (%)</Label>
                    <Input id="stopLoss" type="number" defaultValue="3" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="maxDailyLoss">Max Daily Loss (%)</Label>
                    <Input id="maxDailyLoss" type="number" defaultValue="5" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="maxPositionSize">Max Position Size (%)</Label>
                    <Input id="maxPositionSize" type="number" defaultValue="10" />
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="trailingStop" />
                    <Label htmlFor="trailingStop">Enable Trailing Stop</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="autoAdjustRisk" />
                    <Label htmlFor="autoAdjustRisk">Auto-Adjust Risk Based on Volatility</Label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6">
          <Button className="w-full">Save Settings</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradingSettings;
