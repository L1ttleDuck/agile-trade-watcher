
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCode } from "react-icons/fa";

const PythonCodeDisplay: React.FC = () => {
  const pythonCode = `
import time
import os
from binance.client import Client
from binance.enums import *
import pandas as pd
import numpy as np
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Binance client
api_key = os.getenv('BINANCE_API_KEY')
api_secret = os.getenv('BINANCE_API_SECRET')
client = Client(api_key, api_secret)

# Trade parameters
SYMBOL = 'BTCUSDT'
PROFIT_THRESHOLD = 0.05  # 5%
LOSS_THRESHOLD = 0.03    # 3%
QUANTITY = 0.01          # BTC amount to trade

print("[INFO] Trading bot initialized")
print("[INFO] Connected to Binance API")
print(f"[INFO] Monitoring {SYMBOL} for entry points")
print(f"[INFO] Take profit set at {PROFIT_THRESHOLD * 100}%, stop loss at {LOSS_THRESHOLD * 100}%")
print("[INFO] Waiting for trading signals...")

def get_ma_crossover_signal(symbol, fast_period=9, slow_period=21):
    """Get moving average crossover signals"""
    # Get historical klines/candlesticks
    klines = client.get_historical_klines(symbol, Client.KLINE_INTERVAL_15MINUTE, "1 day ago UTC")
    
    # Create DataFrame from klines
    df = pd.DataFrame(klines, columns=[
        'timestamp', 'open', 'high', 'low', 'close', 'volume',
        'close_time', 'quote_asset_volume', 'number_of_trades',
        'taker_buy_base_asset_volume', 'taker_buy_quote_asset_volume', 'ignore'
    ])
    
    # Convert data types
    df['close'] = pd.to_numeric(df['close'])
    
    # Calculate moving averages
    df['fast_ma'] = df['close'].rolling(window=fast_period).mean()
    df['slow_ma'] = df['close'].rolling(window=slow_period).mean()
    
    # Generate signals
    prev_row = df.iloc[-2]
    curr_row = df.iloc[-1]
    
    # Check for crossovers
    if prev_row['fast_ma'] < prev_row['slow_ma'] and curr_row['fast_ma'] > curr_row['slow_ma']:
        return 'BUY'
    elif prev_row['fast_ma'] > prev_row['slow_ma'] and curr_row['fast_ma'] < curr_row['slow_ma']:
        return 'SELL'
    
    return None

def place_order(symbol, side, quantity):
    """Place a market order"""
    try:
        order = client.create_order(
            symbol=symbol,
            side=side,
            type=ORDER_TYPE_MARKET,
            quantity=quantity
        )
        print(f"[SUCCESS] {side} order placed: {order['orderId']}")
        return order
    except Exception as e:
        print(f"[ERROR] Failed to place order: {e}")
        return None

def check_exit_conditions(entry_price, current_price, side):
    """Check if exit conditions are met"""
    if side == 'BUY':
        profit_loss = (current_price - entry_price) / entry_price
    else:
        profit_loss = (entry_price - current_price) / entry_price
        
    if profit_loss >= PROFIT_THRESHOLD:
        return 'PROFIT'
    elif profit_loss <= -LOSS_THRESHOLD:
        return 'LOSS'
    
    return None

def main():
    """Main bot loop"""
    position = None
    entry_price = 0
    
    while True:
        try:
            # Get current price
            ticker = client.get_symbol_ticker(symbol=SYMBOL)
            current_price = float(ticker['price'])
            
            # If no position, look for entry
            if position is None:
                signal = get_ma_crossover_signal(SYMBOL)
                
                if signal == 'BUY':
                    order = place_order(SYMBOL, SIDE_BUY, QUANTITY)
                    if order:
                        position = 'LONG'
                        entry_price = current_price
                        print(f"[INFO] Entered LONG position at {entry_price}")
            
            # If position exists, check exit conditions
            else:
                exit_signal = check_exit_conditions(entry_price, current_price, position)
                
                if exit_signal:
                    side = SIDE_SELL if position == 'LONG' else SIDE_BUY
                    order = place_order(SYMBOL, side, QUANTITY)
                    
                    if order:
                        profit_loss = current_price - entry_price if position == 'LONG' else entry_price - current_price
                        print(f"[INFO] Closed position with {exit_signal}. P/L: {profit_loss}")
                        position = None
                        entry_price = 0
            
            # Sleep to avoid API rate limits
            time.sleep(10)
            
        except Exception as e:
            print(f"[ERROR] Error in main loop: {e}")
            time.sleep(30)  # Wait longer on error

if __name__ == "__main__":
    main()
`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FaCode /> Python Trading Bot Code
        </CardTitle>
      </CardHeader>
      <CardContent>
        <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
          <code>{pythonCode}</code>
        </pre>
      </CardContent>
    </Card>
  );
};

export default PythonCodeDisplay;
