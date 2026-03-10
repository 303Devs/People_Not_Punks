import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'People Not Punks',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Replace with real ID from cloud.walletconnect.com
  chains: [base],
  ssr: false,
})
