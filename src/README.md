
# Binance Trading Bot

This project provides a user interface for a Python-based trading bot that uses Binance for cryptocurrency trading.

## Trading Strategy

The trading bot implements the following specific trading conditions:
- Finds entry points using Moving Average crossover strategy
- Takes profit when gain is greater than or equal to 5%
- Cuts losses when loss is equal to or greater than 3%

## Python Implementation

To use the Python trading bot code:

1. Create a new Python project
2. Install the required dependencies:
```bash
pip install python-binance pandas numpy python-dotenv
```

3. Create a `.env` file with your Binance API credentials:
```
BINANCE_API_KEY=your_api_key_here
BINANCE_API_SECRET=your_api_secret_here
```

4. Copy the Python code from the "View Python Code" button in the UI
5. Run the script:
```bash
python trading_bot.py
```

## Configuration

The bot allows you to configure:
- Trading pair
- Position size
- Entry strategy parameters
- Take profit percentage (default 5%)
- Stop loss percentage (default 3%)

## Important Notes

- Always test with small amounts first
- Use Binance API keys with appropriate permissions (read + spot trading)
- Consider running the bot on a VPS for 24/7 operation
- Monitor the bot regularly to ensure it's functioning correctly

## Security Considerations

- Never share your API keys
- Use API keys with only the necessary permissions
- Enable IP restrictions on your API keys
- Consider using Binance Testnet for testing

## Disclaimer

Trading cryptocurrencies involves significant risk. This tool is provided for educational purposes only. Always do your own research before trading.
