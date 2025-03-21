import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR'];

  const convertCurrency = async () => {
    if (!amount) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const rate = response.data.rates[toCurrency];
      const convertedAmount = (parseFloat(amount) * rate).toFixed(2);
      setResult(convertedAmount);
    } catch (err) {
      setError('Failed to fetch exchange rates. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    convertCurrency();
  }
  , [fromCurrency, toCurrency]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1e1e1e', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '420px', padding: '30px', borderRadius: '15px', background: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', textAlign: 'center', color: 'white', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Currency Converter</h1>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '12px', border: 'none', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.2)', color: 'white', fontSize: '16px', outline: 'none' }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            style={{ flex: '1', padding: '12px', border: 'none', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.2)', color: 'white', fontSize: '16px', outline: 'none', appearance: 'none', cursor: 'pointer' }}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency} style={{ background: '#333', color: 'white' }}>{currency}</option>
            ))}
          </select>

          <button onClick={swapCurrencies} style={{ padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', width: '45px', height: '45px', transition: '0.3s' }}>⇄</button>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            style={{ flex: '1', padding: '12px', border: 'none', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.2)', color: 'white', fontSize: '16px', outline: 'none', appearance: 'none', cursor: 'pointer' }}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency} style={{ background: '#333', color: 'white' }}>{currency}</option>
            ))}
          </select>
        </div>

        <button
          onClick={convertCurrency}
          disabled={loading || !amount}
          style={{ width: '100%', padding: '12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '18px', fontWeight: '600', transition: '0.3s', opacity: loading || !amount ? '0.6' : '1' }}
        >
          {loading ? 'Converting...' : 'Convert'}
        </button>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

        {result && (
          <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(40, 167, 69, 0.2)', border: '1px solid rgba(40, 167, 69, 0.5)', color: 'white', borderRadius: '8px', fontSize: '18px', fontWeight: '600' }}>
            <p>{amount} {fromCurrency} =</p>
            <h2 style={{ margin: '5px 0', fontSize: '22px', fontWeight: 'bold' }}>{result} {toCurrency}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
