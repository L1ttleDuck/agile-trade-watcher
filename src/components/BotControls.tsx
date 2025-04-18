
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaPlay, FaStop, FaCode } from "react-icons/fa";
import PythonCodeModal from "./PythonCodeModal";

interface BotControlsProps {
  botStatus: "idle" | "running" | "error";
  onToggleBot: () => void;
}

const BotControls: React.FC<BotControlsProps> = ({ botStatus, onToggleBot }) => {
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-lg mb-2">Bot Controls</h3>
            <p className="text-muted-foreground mb-4">
              Control the trading bot operations and view current status
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onToggleBot}
                className={`${botStatus === "running" ? "bg-loss hover:bg-loss-dark" : "bg-profit hover:bg-profit-dark"}`}
                size="lg"
              >
                {botStatus === "running" ? (
                  <><FaStop className="mr-2" /> Stop Bot</>
                ) : (
                  <><FaPlay className="mr-2" /> Start Bot</>
                )}
              </Button>
              
              <Button variant="outline" size="lg">
                <FaCode className="mr-2" /> View Python Code
              </Button>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium text-lg mb-2">Trading Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Take Profit</div>
                <div className="text-xl font-bold text-profit">5%</div>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Stop Loss</div>
                <div className="text-xl font-bold text-loss">3%</div>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Trading Pair</div>
                <div className="text-xl font-bold">BTC/USDT</div>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Position Size</div>
                <div className="text-xl font-bold">0.01 BTC</div>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Strategy</div>
                <div className="text-xl font-bold">Moving Average</div>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <div className="text-sm text-muted-foreground">Timeframe</div>
                <div className="text-xl font-bold">15m</div>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">Python Bot Status</h3>
            <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
              <code>
{`[INFO] Trading bot initialized
[INFO] Connected to Binance API
[INFO] Monitoring BTC/USDT for entry points
[INFO] Take profit set at 5%, stop loss at 3%
[INFO] Waiting for trading signals...`}
              </code>
            </pre>
          </div>
        </div>
        
        <PythonCodeModal 
          isOpen={codeModalOpen} 
          onClose={() => setCodeModalOpen(false)} 
        />
      </CardContent>
    </Card>
  );
};

export default BotControls;
