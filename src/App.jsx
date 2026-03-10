import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

import { config } from './lib/web3'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Mint from './pages/Mint'
import Technical from './pages/Technical'
import Creator from './pages/Creator'

const queryClient = new QueryClient()

const rainbowTheme = darkTheme({
  accentColor: '#d4c9b0',
  accentColorForeground: '#0c0c0c',
  borderRadius: 'none',
  fontStack: 'system',
})

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={rainbowTheme}>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-bg text-text-primary font-sans">
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/mint" element={<Mint />} />
                <Route path="/technical" element={<Technical />} />
                <Route path="/creator" element={<Creator />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
